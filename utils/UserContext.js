import { createContext } from "react";
//making this a global variable bye Context API
const UserContext = createContext({
  isLoggedIn: "guest",
  changeUserName: (e) => setUserName(e.target.value),
});

export default UserContext;
