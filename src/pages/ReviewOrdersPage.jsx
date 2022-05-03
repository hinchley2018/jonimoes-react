import { useEffect, useState } from "react"
import { getOrders } from "../api/orders-api"

export default function ReviewOrdersPage(){
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetchOrders()
    },[])
    async function fetchOrders(){
        try {
            let ordersResponse = await getOrders()    
            setOrders(ordersResponse)
        } catch (error) {
            window.alert("Failed to load orders")
        }
    }
    return (
        <div>
            <h1>Review Orders</h1>
            <ul>
                {orders && orders.map(o => <li>{o}</li>)}
            </ul>
        </div>
    )
}