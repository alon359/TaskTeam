// Models
import { Project } from "./project.model";

export interface DataProject {
  project: Project,
  countTasks: {
    projectID: Project['_id'],
    countTasks: Number,
    doneTasks: Number
  },
}
