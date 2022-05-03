import { useState } from "react"
import { createOrder } from "../api/orders-api"
import PizzaRow from "../components/PizzaRow"

export default function CreateOrderPage() {
    const [pizzas, setPizzas] = useState([])
    const handleSubmit = async () => {
        let order = {
            customerName: "Jon Snow",
            customerPhoneNumber: "123-456-7890",
            pizzas
        }
        try {
            let orderResponse = await createOrder(order)
            console.log(orderResponse)
            window.alert("Order successful")
        } catch (error) {
            window.alert("Order failed")
        }
    }

    const handleAddPizza = (pizza) => {
        
        setPizzas(prev => [...prev, pizza])
    }
    return (
        <div>
            <PizzaAddForm onAdd={handleAddPizza}/>
            <div>
                <h1>Your Current Order</h1>
                {pizzas && pizzas.map((p,index) => <PizzaRow key={`pizzarow-${index}`} {...p}/> )}
                <button onClick={handleSubmit}>Submit Order</button>
            </div>

        </div>
    )
}
const toppingsList = [
    'Ham',
    'Beef ',
    'Salami',
    'Pepperoni',
    'Italian Sausage',
    'Premium Chicken ',
    'Bacon',
    'Philly Steak',
    'Hot Buffalo Sauce',
    'Jalapeno Peppers',
    'Onions',
    'Banana Peppers',
    'Diced Tomatoes',
    'Black Olives',
    'Mushrooms',
]

const PizzaAddForm = ({onAdd}) => {
    let [toppings, setToppings] = useState([])
    const handleOnChange = (e) => {
        let {value, checked} = e.target
        console.log(e)
        if(checked){
            setToppings([...toppings, value])
        }
        else{
            setToppings(prev => prev.filter(x => x !== value))
        }
        
    }

    const handleAdd =() => {
        console.log(toppings)
        let pizza = {
            toppings: toppings
        }
        setToppings([])
        onAdd(pizza)
    }
    return (
        <div>
            <h1>Add a Pizza to Your Order</h1>
            <h3>Toppings</h3>
            <div>
                {toppingsList.map(t => 
                <div key={t}>
                    <input
                        type='checkbox'
                        name='topping'
                        value={t}
                        onChange={handleOnChange}
                    />
                    <label>{t}</label>
                </div>
            )}
            </div>
            
            <button onClick={handleAdd}>Add Pizza to Order</button>
        </div>
    )
}