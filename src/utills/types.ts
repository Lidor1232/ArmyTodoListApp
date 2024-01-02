export interface ITask {
  _id: string;
  title: string;
  description: string;
  status: ITaskStatus;
  createdAt: string;
  updatedAt: string;
}

export enum ITaskStatus {
  Created = 'created',
  Completed = 'completed',
  Deleted = 'deleted',
}

export interface UpdateTask {
  title?: string;
  description?: string;
  status?: ITaskStatus;
}

export interface IAction {
  type: string;
  payload?: any;
}
