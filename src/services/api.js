import axios from 'axios'

export function fetchPosts() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

export function getPostById(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}