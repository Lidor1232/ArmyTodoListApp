import {ITask, ITaskStatus} from '../../utills/types';
import {todoListAxios} from './api-config';

export interface IGetTasksResponse {
  tasks: ITask[];
}

export async function getTasks({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<IGetTasksResponse> {
  const res = await todoListAxios({
    method: 'POST',
    url: '/tasks',
    params: {
      page,
      limit,
    },
    data: {
      terms: {
        status: ITaskStatus.Created,
      },
    },
  });
  return res.data;
}

export async function createTask({
  task,
}: {
  task: {
    title: string;
    description: string;
  };
}): Promise<ITask> {
  const res = await todoListAxios({
    method: 'POST',
    url: '/task/create',
    data: {
      ...task,
    },
  });
  return res.data;
}

export async function updateTask({
  updateTaskProps,
  taskId,
}: {
  updateTaskProps: {
    title?: string;
    description?: string;
    status?: ITaskStatus;
  };
  taskId: string;
}): Promise<ITask> {
  const res = await todoListAxios({
    method: 'PATCH',
    url: `/task/${taskId}/update`,
    data: {
      ...updateTaskProps,
    },
  });
  return res.data;
}

export interface IDeleteTaskResponse {
  message: string;
}

export async function deleteTask({
  taskId,
}: {
  taskId: string;
}): Promise<IDeleteTaskResponse> {
  const res = await todoListAxios({
    method: 'DELETE',
    url: `/task/${taskId}/delete`,
  });
  return res.data;
}

export async function getTask({taskId}: {taskId: string}): Promise<ITask> {
  const res = await todoListAxios({
    method: 'GET',
    url: `/task/${taskId}/details`,
  });
  return res.data;
}
