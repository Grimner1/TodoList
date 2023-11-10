import { TASKS_LIST_RECIVED, CHANGE_INPUT_TEXT } from "./tasks.actions";

const initialState = {
  textInput: "",
  tasksList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECIVED: {
      return {
        textInput: "",
        tasksList: action.payload.tasksList,
      };
    }
    case CHANGE_INPUT_TEXT: {
      return {
        ...state,
        textInput: action.payload.text,
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
