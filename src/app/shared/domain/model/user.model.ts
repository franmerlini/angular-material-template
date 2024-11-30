import { Role } from './role.model';

export type User = {
  id: number;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  roles: Role[];
};
