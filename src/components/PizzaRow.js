export default function PizzaRow({size, toppings}) {
    return (
        <div>
            <b>{size}</b>
            <br />
            Toppings: {toppings && toppings.length > 0 ? toppings.join(' ') : 'No toppings'}
        </div>
    )
}