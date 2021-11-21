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