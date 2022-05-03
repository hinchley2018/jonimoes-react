import { useEffect, useState } from "react"
import { getOrders } from "../api/orders-api"
import PizzaRow from "../components/PizzaRow"

export default function ReviewOrdersPage() {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetchOrders()
    }, [])
    async function fetchOrders() {
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

            {orders && orders.map(o => <OrderRow key={o.orderId} {...o}>{o}</OrderRow>)}

        </div>
    )
}

const OrderRow = ({ orderId, pizzas, customerPhoneNumber }) => (
    <div>
        <h3>Order: {orderId}</h3>
        <h4>Phone: {customerPhoneNumber}</h4>
        <ul>
            {pizzas.map((p, index) => <li key={`pizza-${index}`}>
                <PizzaRow {...p}/>
            </li>)}
        </ul>
    </div>
)