import {ITask} from '../../utills/types';

export const CREATE_TASK_FETCH_REQUEST = 'CREATE_TASK_FETCH_REQUEST';
export const CREATE_TASK_FETCH_SUCCESS = 'CREATE_TASK_FETCH_SUCCESS';
export const CREATE_TASK_FETCH_FAIL = 'CREATE_TASK_FETCH_FAIL';
export const CREATE_TASK_RESET = 'CREATE_TASK_RESET';

export function createTaskFetchRequest() {
  return {
    type: CREATE_TASK_FETCH_REQUEST,
  };
}

export function createTaskFetchSuccess(data: {createdTask: ITask}) {
  return {
    type: CREATE_TASK_FETCH_SUCCESS,
    payload: data,
  };
}

export function createTaskFetchFail() {
  return {
    type: CREATE_TASK_FETCH_FAIL,
  };
}

export function createTaskReset() {
  return {
    type: CREATE_TASK_RESET,
  };
}
