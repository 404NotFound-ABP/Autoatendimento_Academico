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

-- Tabela de usuários 
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role user_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de nós da árvore 
CREATE TABLE IF NOT EXISTS navigation_nodes (
    id SERIAL PRIMARY KEY,
    parent_id INT REFERENCES navigation_nodes(id) ON DELETE CASCADE, 
    title VARCHAR(255) NOT NULL,        
    content TEXT,                                            
    display_order INT DEFAULT 0,        
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    chunk_path VARCHAR(500), 
    link VARCHAR(500),
    is_active BOOLEAN NOT NULL DEFAULT TRUE 
);

-- Tabela de logs e satisfação 
CREATE TABLE IF NOT EXISTS fulfillment_logs (
  id BIGSERIAL PRIMARY KEY,
  session_id UUID NOT NULL DEFAULT gen_random_uuid(),
  navigation_flow JSONB NOT NULL DEFAULT '[]'::jsonb, 
  inquiry_ids JSONB NOT NULL DEFAULT '[]'::jsonb,
  flag satisfaction_flag,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabela de Suporte 
CREATE TABLE IF NOT EXISTS support_contacts (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,        
    message TEXT NOT NULL,              
    status inquiry_status NOT NULL DEFAULT 'ABERTA', 
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    closed_at TIMESTAMPTZ,
    answered_by UUID REFERENCES users(id) ON DELETE SET NULL 
);