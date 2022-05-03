import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL
console.log(baseUrl)
export async function getOrders(){
    let response = axios.get(`${baseUrl}/api/orders`)
    return await response.json()
}

export async function createOrder(order){
    let response = axios.post(`${baseUrl}/api/orders`, {body: order})
    return await response.json()
}