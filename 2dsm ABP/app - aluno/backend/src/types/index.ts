export type UserRole = 'ADMIN' | 'SECRETARIA';

export interface JwtPayload {
  id:    string;
  email: string;
  role:  UserRole;
  name:  string;
}

export interface UserRow {
  id:            string;
  email:         string;
  password_hash: string;
  role:          UserRole;
  name:          string;
  created_at:    Date;
  updated_at:    Date;
}
