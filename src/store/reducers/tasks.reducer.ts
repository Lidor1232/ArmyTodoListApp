import {IAction, ITask} from '../../utills/types';
import {
  TASKS_ADD_TASK,
  TASKS_FETCH_ALL,
  TASKS_FETCH_FAIL,
  TASKS_FETCH_MORE_FAIL,
  TASKS_FETCH_MORE_REQUEST,
  TASKS_FETCH_MORE_SUCCESS,
  TASKS_FETCH_REQUEST,
  TASKS_FETCH_SUCCESS,
  TASKS_REMOVE_TASK,
  TASKS_SET_TASK,
} from '../actions/tasks.actions';

export interface IState {
  requests: {
    tasksRequest: {
      isLoading: boolean;
      isError: boolean;
      tasks: ITask[];
      page: number;
      isLoadingMore: boolean;
      isErrorLoadingMore: boolean;
      isFetchAll: boolean;
    };
  };
}

export const initialState: IState = {
  requests: {
    tasksRequest: {
      isLoading: false,
      isError: false,
      tasks: [],
      page: 1,
      isLoadingMore: false,
      isErrorLoadingMore: false,
      isFetchAll: false,
    },
  },
};

export function reducer(state = initialState, action: IAction) {
  switch (action.type) {
    case TASKS_FETCH_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          tasksRequest: {
            ...state.requests.tasksRequest,
            isLoading: true,
            isError: false,
          },
        },
      };

    case TASKS_FETCH_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          tasksRequest: {
            ...state.requests.tasksRequest,
            isLoading: false,
            tasks: action.payload.tasks,
          },
        },
      };

    case TASKS_FETCH_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          tasksRequest: {
            ...state.requests.tasksRequest,
            isLoading: false,
            isError: true,
          },
        },
      };

    case TASKS_FETCH_MORE_REQUEST:
      return {
        ...state,
        requests: {
          ...state.requests,
          tasksRequest: {
            ...state.requests.tasksRequest,
            page: state.requests.tasksRequest.page + 1,
            isLoadingMore: true,
            isErrorLoadingMore: false,
          },
        },
      };

    case TASKS_FETCH_MORE_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          tasksRequest: {
            ...state.requests.tasksRequest,
            isLoadingMore: false,
            tasks: [
              ...state.requests.tasksRequest.tasks,
              ...action.payload.tasks,
            ],
          },
        },
      };

    case TASKS_FETCH_MORE_FAIL:
      return {
        ...state,
        requests: {
          ...state.requests,
          tasksRequest: {
            ...state.requests.tasksRequest,
            isLoadingMore: false,
            isErrorLoadingMore: true,
          },
        },
      };

    case TASKS_FETCH_ALL:
      return {
        ...state,
        requests: {
          ...state.requests,
          tasksRequest: {
            ...state.requests.tasksRequest,
            isFetchAll: true,
          },
        },
      };

    case TASKS_ADD_TASK:
      return {
        ...state,
        requests: {
          ...state.requests,
          tasksRequest: {
            ...state.requests.tasksRequest,
            tasks: [...state.requests.tasksRequest.tasks, action.payload.task],
          },
        },
      };

    case TASKS_REMOVE_TASK:
      return {
        ...state,
        requests: {
          ...state.requests,
          tasksRequest: {
            ...state.requests.tasksRequest,
            tasks: state.requests.tasksRequest.tasks.filter(
              task => task._id !== action.payload.taskId,
            ),
          },
        },
      };

    case TASKS_SET_TASK:
      return {
        ...state,
        requests: {
          ...state.requests,
          tasksRequest: {
            ...state.requests.tasksRequest,
            tasks: state.requests.tasksRequest.tasks.map(task =>
              task._id === action.payload.task._id ? action.payload.task : task,
            ),
          },
        },
      };

    default:
      return state;
  }
}
