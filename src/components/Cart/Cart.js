import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items } = useSelector((state) => state.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{ ...item, title: item.name, total: item.totalPrice }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
