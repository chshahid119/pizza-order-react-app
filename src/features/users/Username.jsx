import { useSelector } from "react-redux";
import { updateName } from "./userSlice";

function Username() {
  const username=useSelector(state=>state.user.username);
  

  
  if(!username) return null;

  return (
    <div className="hidden md:block text-sm font-semibold md:text-2xl">
      {username}
    </div>
  );
}

export default Username;
