import { User } from "./user.model";

export interface Project {
  _id?: string;
  title: string;
  description?: string;
  createDate?: Date;
  projectOwner: string;
}
