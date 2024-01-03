import {IAction, ITask} from '../../utills/types';
import {
  CREATE_TASK_FETCH_REQUEST,
  CREATE_TASK_FETCH_SUCCESS,
  CREATE_TASK_FETCH_FAIL,
  CREATE_TASK_RESET,
} from '../actions/createTask.actions';

export interface IState {
  requests: {
    createTaskRequest: {
      isLoading: boolean;
      isError: boolean;
      createdTask: ITask | null;
    };
  };
}

export const initialState: IState = {
  requests: {
    createTaskRequest: {
      isLoading: false,
      isError: false,
      createdTask: null,
    },
  },
};

export function reducer(state = initialState, action: IAction): IState {
  switch (action.type) {
    case CREATE_TASK_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          createTaskRequest: {
            ...state.requests.createTaskRequest,
            isLoading: true,
            isError: false,
          },
        },
      };
    case CREATE_TASK_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          createTaskRequest: {
            ...state.requests.createTaskRequest,
            isLoading: false,
            createdTask: action.payload.createdTask,
          },
        },
      };
    case CREATE_TASK_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          createTaskRequest: {
            ...state.requests.createTaskRequest,
            isLoading: false,
            isError: true,
          },
        },
      };
    case CREATE_TASK_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
