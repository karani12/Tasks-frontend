const URL = "http://localhost:3000/api/auth";


async function login({
  username, password
}) {
  return await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      username,
      password
    }),
  })
    .then((response) => response.json())
    .then((data) => {
        console.log(data.data.accessToken)
      if (data.data.accessToken) {
        localStorage.setItem("access_token",data.data.accessToken);
      }
      return data;
    })
    .catch((error) => error);

}
function register({
  username,
  email,
  passordConfirm,
  password,
}) {
  return fetch(`${URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      username,
      email,
      passordConfirm,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
     if(data.status === 200){
        return data;
     }
    })
    .catch((error) => error);
}



function logout() {
  localStorage.removeItem("accessToken");
}

export default {
  login,
  logout,
  register
}