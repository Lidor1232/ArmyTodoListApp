import {IAction, ITask} from '../../utills/types';
import {
  UPDATE_TASK_FETCH_REQUEST,
  UPDATE_TASK_FETCH_SUCCESS,
  UPDATE_TASK_FETCH_FAIL,
  UPDATE_TASK_RESET,
  UPDATE_TASK_SET_TASK_ID,
  UPDATE_TASK_GET_TASK_FETCH_REQUEST,
  UPDATE_TASK_GET_TASK_FETCH_SUCCESS,
  UPDATE_TASK_GET_TASK_FETCH_FAIL,
} from '../actions/updateTask.actions';

export interface IState {
  taskId: string | null;
  requests: {
    updateTaskRequest: {
      isLoading: boolean;
      isError: boolean;
      updatedTask: ITask | null;
    };
    getTaskRequest: {
      isLoading: boolean;
      isError: boolean;
      task: ITask | null;
    };
  };
}

export const initialState: IState = {
  taskId: null,
  requests: {
    updateTaskRequest: {
      isLoading: false,
      isError: false,
      updatedTask: null,
    },
    getTaskRequest: {
      isLoading: false,
      isError: false,
      task: null,
    },
  },
};

export function reducer(state = initialState, action: IAction): IState {
  switch (action.type) {
    case UPDATE_TASK_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          updateTaskRequest: {
            ...state.requests.updateTaskRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case UPDATE_TASK_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          updateTaskRequest: {
            ...state.requests.updateTaskRequest,
            isLoading: false,
            updatedTask: action.payload.updatedTask,
          },
        },
      };

    case UPDATE_TASK_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          updateTaskRequest: {
            ...state.requests.updateTaskRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case UPDATE_TASK_RESET:
      return {
        ...initialState,
      };

    case UPDATE_TASK_SET_TASK_ID:
      return {
        ...state,
        taskId: action.payload.taskId,
      };

    case UPDATE_TASK_GET_TASK_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          getTaskRequest: {
            ...state.requests.getTaskRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case UPDATE_TASK_GET_TASK_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          getTaskRequest: {
            ...state.requests.getTaskRequest,
            isLoading: false,
            task: action.payload.task,
          },
        },
      };

    case UPDATE_TASK_GET_TASK_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          getTaskRequest: {
            ...state.requests.getTaskRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    default:
      return state;
  }
}
