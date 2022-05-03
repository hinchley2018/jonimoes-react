import { createOrder } from "../api/orders-api"

export default function CreateOrderPage(){
    const handleSubmit = async () => {
        let order = {}
        let orderResponse = await createOrder(order)
    }
    return (
        <div>
            <h1>Create Order</h1>
            <button onClick={handleSubmit}>Submit Order</button>
        </div>
    )
}