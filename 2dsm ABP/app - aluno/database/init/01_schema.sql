CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
    CREATE TYPE user_role AS ENUM ('ADMIN', 'SECRETARIA');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'inquiry_status') THEN
    CREATE TYPE inquiry_status AS ENUM ('ABERTA', 'RESPONDIDA');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'satisfaction_flag') THEN
    CREATE TYPE satisfaction_flag AS ENUM ('ATENDEU', 'NAO_ATENDEU');
  END IF;
END;
$$;

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role user_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS navigation_nodes (
  id BIGSERIAL PRIMARY KEY,
  parent_id BIGINT REFERENCES navigation_nodes(id) ON DELETE CASCADE,
  title VARCHAR(180) NOT NULL,
  slug VARCHAR(180) NOT NULL UNIQUE,
  prompt VARCHAR(1000),
  answer_summary TEXT,
  evidence_excerpt TEXT,
  evidence_source VARCHAR(500),
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS inquiries (
  id BIGSERIAL PRIMARY KEY,
  requester_name VARCHAR(160) NOT NULL,
  requester_email VARCHAR(160) NOT NULL,
  question TEXT NOT NULL,
  attachment_name VARCHAR(255),
  attachment_mime_type VARCHAR(100),
  attachment_data BYTEA,
  status inquiry_status NOT NULL DEFAULT 'ABERTA',
  answered_by UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS interaction_logs (
  id BIGSERIAL PRIMARY KEY,
  session_id UUID NOT NULL DEFAULT gen_random_uuid(),
  navigation_flow JSONB NOT NULL DEFAULT '[]'::jsonb,
  inquiry_ids JSONB NOT NULL DEFAULT '[]'::jsonb,
  flag satisfaction_flag,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'users'
      AND column_name = 'active'
  ) THEN
    ALTER TABLE users
    DROP COLUMN active;
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'inquiries'
      AND column_name = 'requester_name'
  ) THEN
    ALTER TABLE inquiries
    ADD COLUMN requester_name VARCHAR(160);
  END IF;

  UPDATE inquiries
  SET requester_name = COALESCE(
    NULLIF(requester_name, ''),
    NULLIF(split_part(requester_email, '@', 1), ''),
    'Nao informado'
  )
  WHERE requester_name IS NULL
     OR requester_name = '';

  ALTER TABLE inquiries
  ALTER COLUMN requester_name SET NOT NULL;

  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'inquiries'
      AND column_name = 'attachment_name'
  ) THEN
    ALTER TABLE inquiries
    ADD COLUMN attachment_name VARCHAR(255);
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'inquiries'
      AND column_name = 'attachment_mime_type'
  ) THEN
    ALTER TABLE inquiries
    ADD COLUMN attachment_mime_type VARCHAR(100);
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'inquiries'
      AND column_name = 'attachment_data'
  ) THEN
    ALTER TABLE inquiries
    ADD COLUMN attachment_data BYTEA;
  END IF;

  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'inquiries'
      AND column_name = 'answer_text'
  ) THEN
    ALTER TABLE inquiries
    DROP COLUMN answer_text;
  END IF;

  IF EXISTS (
    SELECT 1
    FROM information_schema.table_constraints
    WHERE table_schema = 'public'
      AND table_name = 'navigation_nodes'
      AND constraint_name = 'fk_navigation_nodes_answer_chunk'
      AND constraint_type = 'FOREIGN KEY'
  ) THEN
    ALTER TABLE navigation_nodes
    DROP CONSTRAINT fk_navigation_nodes_answer_chunk;
  END IF;

  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'navigation_nodes'
      AND column_name = 'answer_chunk_id'
  ) THEN
    ALTER TABLE navigation_nodes
    DROP COLUMN answer_chunk_id;
  END IF;

  DROP TABLE IF EXISTS faq_entries;
  DROP TABLE IF EXISTS document_chunks;
  DROP TABLE IF EXISTS documents;

  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'interaction_logs'
      AND column_name = 'feedback_id'
  ) THEN
    IF EXISTS (
      SELECT 1
      FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_name = 'satisfaction_feedback'
    ) THEN
      IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
          AND table_name = 'satisfaction_feedback'
          AND column_name = 'value'
      ) THEN
        IF NOT EXISTS (
          SELECT 1
          FROM information_schema.columns
          WHERE table_schema = 'public'
            AND table_name = 'satisfaction_feedback'
            AND column_name = 'flag'
        ) THEN
          ALTER TABLE satisfaction_feedback
          ADD COLUMN flag satisfaction_flag;
        END IF;

        UPDATE satisfaction_feedback
        SET flag = CASE
          WHEN value::text IN ('GOSTEI', 'ATENDEU') THEN 'ATENDEU'::satisfaction_flag
          WHEN value::text IN ('NAO_GOSTEI', 'NAO_ATENDEU') THEN 'NAO_ATENDEU'::satisfaction_flag
          ELSE flag
        END
        WHERE flag IS NULL;
      END IF;

      UPDATE interaction_logs il
      SET flag = sf.flag
      FROM satisfaction_feedback sf
      WHERE il.feedback_id = sf.id
        AND il.flag IS NULL;
    END IF;

    ALTER TABLE interaction_logs
    DROP COLUMN feedback_id;
  END IF;

  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'interaction_logs'
      AND column_name = 'user_agent'
  ) THEN
    ALTER TABLE interaction_logs
    DROP COLUMN user_agent;
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'interaction_logs'
      AND column_name = 'inquiry_ids'
  ) THEN
    ALTER TABLE interaction_logs
    ADD COLUMN inquiry_ids JSONB NOT NULL DEFAULT '[]'::jsonb;
  END IF;

  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'interaction_logs'
      AND column_name = 'inquiry_id'
  ) THEN
    UPDATE interaction_logs
    SET inquiry_ids = CASE
      WHEN inquiry_id IS NULL THEN COALESCE(inquiry_ids, '[]'::jsonb)
      WHEN COALESCE(inquiry_ids, '[]'::jsonb) @> jsonb_build_array(inquiry_id) THEN COALESCE(inquiry_ids, '[]'::jsonb)
      ELSE COALESCE(inquiry_ids, '[]'::jsonb) || jsonb_build_array(inquiry_id)
    END;

    ALTER TABLE interaction_logs
    DROP COLUMN inquiry_id;
  END IF;

  DROP TABLE IF EXISTS satisfaction_feedback;
END;
$$;

CREATE INDEX IF NOT EXISTS idx_navigation_nodes_parent_id ON navigation_nodes(parent_id);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_interaction_logs_session_id ON interaction_logs(session_id);

DROP INDEX IF EXISTS idx_navigation_nodes_answer_chunk_id;
DROP INDEX IF EXISTS idx_document_chunks_document_id;
DROP INDEX IF EXISTS idx_faq_entries_node_id;

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_users_updated_at ON users;
CREATE TRIGGER trg_users_updated_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_navigation_nodes_updated_at ON navigation_nodes;
CREATE TRIGGER trg_navigation_nodes_updated_at
BEFORE UPDATE ON navigation_nodes
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_inquiries_updated_at ON inquiries;
CREATE TRIGGER trg_inquiries_updated_at
BEFORE UPDATE ON inquiries
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
