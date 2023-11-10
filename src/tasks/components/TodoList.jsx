import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { useEffect } from "react";
import CreateTaskInput from "./CreateTaskInput";
import Task from "./Task";
import { sortedTasksListSelector } from "../tasks.selectors";

import * as tasksList from "../tasks.actions";

const TodoList = ({ tasks, getTasksList }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <div id="root">
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput />

        <ul className="list">
          {tasks.map((el) => (
            <Task key={el.id} text={el.text} done={el.done} id={el.id} />
          ))}
        </ul>
      </main>
    </div>
  );
};

TodoList.propTypes = {
  tasks: propTypes.arrayOf(propTypes.shape()),
  getTasksList: propTypes.func.isRequired,
};

const mapState = (state) => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksList.getTasksList,
};

export default connect(mapState, mapDispatch)(TodoList);
