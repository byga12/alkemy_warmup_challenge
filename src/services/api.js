import axios from 'axios'

export function fetchPosts() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

export function getPostById(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

export function deletePostById(id) {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

export function editPostById(id, data) {
  return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
}


//una función para "simular" el login, devuelve una promesa que al ser resulta correctamente nos da un token.
export function login(email, password) {
  return new Promise((res, rej) => {
    if (email === "challenge@alkemy.org" && password === "react") {
      res({token: Math.round(Math.random()*1000000000)})
    } else rej();
  })
}

//Login con petición POST (no funciona en producción)
// const login = (email, password) => {
//   return axios.post('http://challenge-react.alkemy.org/', {
//     email,
//     password,
//   })
// }