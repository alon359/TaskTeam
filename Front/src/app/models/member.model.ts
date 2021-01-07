import { Project } from './project.model';
import { User } from './user.model';
export interface Member {
  _id?: string;
  userID: any;
  projectID: any;
  permission: 'normal' | 'admin';
}
