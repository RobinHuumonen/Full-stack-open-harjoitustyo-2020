import axios from 'axios'
const baseUrl = '/api/users'

const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const getUsers = async (id) => {
  const req = await axios.get(`${baseUrl}/${id}`)
  return req.data
}

export default { getUsers, getAll }