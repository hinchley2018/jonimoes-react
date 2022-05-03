import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL
console.log(baseUrl)
export async function getOrders(){
    axios.get(`${baseUrl}/api/orders`)
}

export async function createOrder(order){
    axios.post(`${baseUrl}/api/orders`, {body: order})
}