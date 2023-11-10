const url = "https://61856c5523a2fe0017fff620.mockapi.io/api/ToDoList";

export const fetchTasksList = (id) =>
  id
    ? fetch(`${url}/${id}`).then((data) => data.json())
    : fetch(url).then((data) => data.json());

export const createTask = (task) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(task),
  });

export const updateTaks = (task, id) =>
  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(task),
  });

export const deleteTask = (id) => fetch(`${url}/${id}`, { method: "DELETE" });
