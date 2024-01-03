import {ITask} from '../../utills/types';

export const TASKS_FETCH_REQUEST = 'TASKS_FETCH_REQUEST';
export const TASKS_FETCH_SUCCESS = 'TASKS_FETCH_SUCCESS';
export const TASKS_FETCH_FAIL = 'TASKS_FETCH_FAIL';
export const TASKS_FETCH_MORE_REQUEST = 'TASKS_FETCH_MORE_REQUEST';
export const TASKS_FETCH_MORE_SUCCESS = 'TASKS_FETCH_MORE_SUCCESS';
export const TASKS_FETCH_MORE_FAIL = 'TASKS_FETCH_MORE_FAIL';
export const TASKS_FETCH_ALL = 'TASKS_FETCH_ALL';
export const TASKS_ADD_TASK = 'TASKS_ADD_TASK';
export const TASKS_REMOVE_TASK = 'TASKS_REMOVE_TASK';
export const TASKS_SET_TASK = 'TASKS_SET_TASK';

export function tasksFetchRequest() {
  return {
    type: TASKS_FETCH_REQUEST,
  };
}

export function tasksFetchSuccess(data: {tasks: ITask[]}) {
  return {
    type: TASKS_FETCH_SUCCESS,
    payload: data,
  };
}

export function tasksFetchFail() {
  return {
    type: TASKS_FETCH_FAIL,
  };
}

export function tasksFetchMoreRequest() {
  return {
    type: TASKS_FETCH_MORE_REQUEST,
  };
}

export function tasksFetchMoreSuccess(data: {tasks: ITask[]}) {
  return {
    type: TASKS_FETCH_MORE_SUCCESS,
    payload: data,
  };
}

export function tasksFetchMoreFail() {
  return {
    type: TASKS_FETCH_MORE_FAIL,
  };
}

export function tasksFetchAll() {
  return {
    type: TASKS_FETCH_ALL,
  };
}

export function tasksAddTask(data: {task: ITask}) {
  return {
    type: TASKS_ADD_TASK,
    payload: data,
  };
}

export function tasksRemoveTask(data: {taskId: string}) {
  return {
    type: TASKS_REMOVE_TASK,
    payload: data,
  };
}

export function tasksSetTask(data: {task: ITask}) {
  return {
    type: TASKS_SET_TASK,
    payload: data,
  };
}
