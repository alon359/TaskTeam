import { User } from './user.model';

export interface Task {
  _id?: string;
  projectID: any;
  owner: any;
  title: string;
  description?: string;
  priority: 'high' | 'medium' | 'low';
  status: 'on hold' | 'working on it' | 'waiting for response' | 'blocked' | 'done' | 'not started yet';
  startDate: Date;
  endDate?: Date;
}
