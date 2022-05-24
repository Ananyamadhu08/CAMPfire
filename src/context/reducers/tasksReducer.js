import { taskActions } from "../constants";

export const tasksReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case taskActions.GET_TASKS:
      return {
        ...state,
        tasks: payload,
      };
    case taskActions.CREATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task._id !== payload._id),
          payload,
        ],
      };
    case taskActions.UPDATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task._id !== payload._id),
          payload,
        ],
      };
    case taskActions.DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task._id !== payload._id)],
      };
    default:
      return state;
  }
};
