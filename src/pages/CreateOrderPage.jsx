import { createOrder } from "../api/orders-api"

export default function CreateOrderPage(){
    const handleSubmit = async () => {
        let order = {}
        try {
            let orderResponse = await createOrder(order)
            window.alert("Order successful")    
        } catch (error) {
            window.alert("Order failed")
        }
        
        
    }
    return (
        <div>
            <h1>Create Order</h1>
            <button onClick={handleSubmit}>Submit Order</button>
        </div>
    )
}