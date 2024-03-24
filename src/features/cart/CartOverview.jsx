import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div
      className="flex items-center justify-between bg-stone-800 text-stone-200 px-4 py-4 
      text-sm md:text-base sm:px-6 uppercase p-4
    "
    >
      <p className="font-semibold  text-stone-300 space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
