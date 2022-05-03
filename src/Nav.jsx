import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <ul>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/create-order">Create Order</Link></li>
        </ul>
    )
}