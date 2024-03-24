import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <Button type="round">+</Button>
    </div>
  );
}

export default UpdateItemQuantity;
