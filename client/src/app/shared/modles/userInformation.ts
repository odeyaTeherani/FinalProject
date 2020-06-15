import {SubRole} from './sub-role';

export interface UserInformation {
  id: string;
  subRole: SubRole;
  userName: string;
  email: string;
  password: string;
  image: string;
  confirmPassword: string;
  role: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  carNumber: string;
  selected: boolean;
  birthDate: Date;
}
