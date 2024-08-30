import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
// import { useSelector } from "react-redux";

function Menu() {
  const menu = useLoaderData();
  // const username = useSelector((state) => state.user.username);
  // console.log(username);

  // if (username === "") return null;

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
