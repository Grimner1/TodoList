import React from "react";
import { connect } from "react-redux";
import * as tasksAction from "../tasks.actions";
import propTypes from "prop-types";

const CreateTaskInput = ({ changeInputText, createTask, textInput }) => {
  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={textInput}
        onChange={changeInputText}
      />
      <button
        className="btn create-task__btn"
        onClick={() => createTask(textInput)}
      >
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  changeInputText: propTypes.func.isRequired,
  createTask: propTypes.func.isRequired,
  textInput: propTypes.string.isRequired,
};

const mapState = (state) => {
  return {
    textInput: state.tasks.textInput,
  };
};

const mapDispatch = {
  changeInputText: tasksAction.getInputText,
  createTask: tasksAction.createTask,
};

export default connect(mapState, mapDispatch)(CreateTaskInput);
