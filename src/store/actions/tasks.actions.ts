import {ITask} from '../../utills/types';

export const TASKS_FETCH_REQUEST = 'TASKS_FETCH_REQUEST';
export const TASKS_FETCH_SUCCESS = 'TASKS_FETCH_SUCCESS';
export const TASKS_FETCH_FAIL = 'TASKS_FETCH_FAIL';
export const TASKS_FETCH_MORE_REQUEST = 'TASKS_FETCH_MORE_REQUEST';
export const TASKS_FETCH_MORE_SUCCESS = 'TASKS_FETCH_MORE_SUCCESS';
export const TASKS_FETCH_MORE_FAIL = 'TASKS_FETCH_MORE_FAIL';
export const TASKS_FETCH_ALL = 'TASKS_FETCH_ALL';

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
