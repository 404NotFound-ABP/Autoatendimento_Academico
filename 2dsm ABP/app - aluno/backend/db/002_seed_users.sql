-- Seed: usuários iniciais para desenvolvimento
-- Senhas geradas com bcrypt (salt rounds = 10)
-- Para regenerar: npx ts-node src/utils/hashPassword.ts <senha>

INSERT INTO users (email, password_hash, role, name) VALUES
(
  'admin@fatec.sp.gov.br',
  '$2a$10$Hyvnb8gLK2ZH0hg9TnYWG..B09Jel1wk7Iw35PXGKK9OaPihy4SUS',
  'ADMIN',
  'Administrador'
),
(
  'secretaria@fatec.sp.gov.br',
  '$2a$10$9/VqMoYJkrug8kox6vNsYeZF0ByG/QCucky0DMQTMTysS/L/X35La',
  'SECRETARIA',
  'Secretaria Acadêmica'
)
ON CONFLICT (email) DO NOTHING;
