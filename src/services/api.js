const URL = "http://localhost:3000/api";

async function login({ username, password }) {
  return await fetch(`${URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }
      return data;
    })
    .catch((error) => error);
}
function register({ username, email, passordConfirm, password }) {
  return fetch(`${URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      üsername: username,
      email: email,
      passwordConfirm: passordConfirm,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 200) {
        return data;
      }
    })
    .catch((error) => error);
}

function logout() {
  localStorage.removeItem("accessToken");
}

function getUser() {
  return fetch(`${URL}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => error);
}

function getTasks() {
  return fetch(`${URL}/tasks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => error);
}
function createTask({
  title,
  description,
  dueDate,
  priority,
  status,
  assignedUserId,
  assignedById,
}) {
  return fetch(`${URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      status: status,
      assignedUserId: assignedUserId,
      assignedById: assignedById,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => error);
}
function markTaskComplete(id) {
  return fetch(`${URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      status: "completed",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => error);
}

function getAllTasks() {
  return fetch(`${URL}/tasks/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => error);
}
export default {
  login,
  logout,
  register,
  getUser,
  getTasks,
  createTask,
  markTaskComplete,
  getAllTasks,
};
