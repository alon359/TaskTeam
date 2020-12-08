import { User } from './user.model';

export interface Task {
  _id: string;
  owner: User[];
  title: string;
  description: string;
  subTasks: Task[];
  isSubTask: boolean;
}
