export interface Member {
  _id?: string;
  userID: any;
  projectID: any;
  permission: 'normal' | 'admin';
}
