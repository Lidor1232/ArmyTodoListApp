import {ITask} from '../../utills/types';

export const UPDATE_TASK_FETCH_REQUEST = 'UPDATE_TASK_FETCH_REQUEST';
export const UPDATE_TASK_FETCH_SUCCESS = 'UPDATE_TASK_FETCH_SUCCESS';
export const UPDATE_TASK_FETCH_FAIL = 'UPDATE_TASK_FETCH_FAIL';
export const UPDATE_TASK_RESET = 'UPDATE_TASK_RESET';
export const UPDATE_TASK_SET_TASK_ID = 'UPDATE_TASK_SET_TASK_ID';

export function updateTaskFetchRequest() {
  return {
    type: UPDATE_TASK_FETCH_REQUEST,
  };
}

export function updateTaskFetchSuccess(data: {updatedTask: ITask}) {
  return {
    type: UPDATE_TASK_FETCH_SUCCESS,
    payload: data,
  };
}

export function updateTaskFetchFail() {
  return {
    type: UPDATE_TASK_FETCH_FAIL,
  };
}

export function updateTaskReset() {
  return {
    type: UPDATE_TASK_RESET,
  };
}

export function updateTaskSetTaskId(data: {taskId: string}) {
  return {
    type: UPDATE_TASK_SET_TASK_ID,
    payload: data,
  };
}
