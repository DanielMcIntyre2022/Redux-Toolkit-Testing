import CartItem from "./CartItem";
import { useSelector} from 'react-redux';

function CartContainer() {

const {cartItems, total, amount} = useSelector((store) => store.cart)

  return (
    <div>CartContainer</div>
  )
}

export default CartContainer;