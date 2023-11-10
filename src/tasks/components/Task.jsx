import React from "react";
import ClassNames from "classnames";
import * as tasksAction from "../tasks.actions";
import { connect } from "react-redux";
import propTypes from "prop-types";

const Task = ({
  text,
  done,
  id,

  updateTask,
  deleteTask,
}) => {
  return (
    <li className={ClassNames("list-item", { "list-item_done": done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => updateTask(text, done, id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => deleteTask(id)}
      ></button>
    </li>
  );
};

Task.propTypes = {
  text: propTypes.string.isRequired,
  done: propTypes.bool.isRequired,
  id: propTypes.string.isRequired,
  updateTask: propTypes.func.isRequired,
  deleteTask: propTypes.func.isRequired,
};

const mapDispatch = {
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
};

export default connect(null, mapDispatch)(Task);
