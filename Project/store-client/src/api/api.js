import axios from 'axios'


const API = 'http://localhost:3000'

const getProducts = () => axios.get(`${API}/products/all`)
const addProduct = (product) => axios.post(`${API}/products/add`,product)
const deleteproduct = (id) => axios.delete(`${API}/products/delete/${id}`)
const addUser = (user) => axios.post(`${API}/users/add`,user)
const deleteUser = (id) => axios.delete(`${API}/users/delete/${id}`)
const addOrder = (order) => axios.post(`${API}/orders/add`,order)
const deleteOrder = (id) => axios.delete(`${API}/orders/delete/${id}`)
const getOrders = () => axios.get(`${API}/orders/all`)
const getUsers = () => axios.get(`${API}/users/all`)


const Login = (credentials) => axios.post(`${API}/auth/login`, credentials)
const Register = (credentials) => axios.post(`${API}/auth/Register`, credentials)
//const Product = (data) => axios.post(${API}/products/add, data)
export { getProducts,getOrders, getUsers,Login,addProduct,Register,deleteproduct,addUser,deleteUser,addOrder,deleteOrder }