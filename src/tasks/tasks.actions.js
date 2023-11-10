import { tasksListSelector } from "./tasks.selectors";
import * as tasksGateway from "./tasksGateway";

export const TASKS_LIST_RECIVED = "TODO/TASKS_LIST_RECIVED";
export const CHANGE_INPUT_TEXT = "TODO/CHANGE_INPUT_TEXT";

export const tasksListRecived = (tasksList) => {
  return {
    type: TASKS_LIST_RECIVED,
    payload: {
      tasksList,
    },
  };
};

export const changeInputText = (text) => {
  return {
    type: CHANGE_INPUT_TEXT,
    payload: {
      text,
    },
  };
};

export const getInputText = (inpuElem) => {
  const inputText = inpuElem.target.value;
  return function (dispatch) {
    dispatch(changeInputText(inputText));
  };
};

export const getTasksList = () => {
  return function (dispatch) {
    tasksGateway.fetchTasksList().then((list) => {
      dispatch(tasksListRecived(list));
    });
  };
};

export const createTask = (text) => {
  const newTask = {
    text: text,
    done: false,
  };
  return function (dispatch) {
    tasksGateway.createTask(newTask).then(() => dispatch(getTasksList()));
  };
};

export const updateTask = (text, done, taskId) => {
  const task = {
    text,
    done: !done,
  };

  return function (dispatch) {
    tasksGateway.updateTaks(task, taskId).then(() => dispatch(getTasksList()));
  };
};

export const deleteTask = (taskId) => {
  return function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
};
