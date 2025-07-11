import { useContext } from "react";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

//import that context Object
import UserContext from "../utils/UserContext";

//import Redux Subscriber for reading the data from appStore
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  //SUbscriber for Redux
  const cartNumber = useSelector((store) => store.cartItems);
  console.log(cartNumber);

  //consume that context in a variable
  const loggedInUser = useContext(UserContext);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="Bhojnalay Logo" src={LOGO_URL} />
        <h1 className="logo-text">Bhojanalay</h1>
      </div>
      <div className="nav-items">
        <ul className="nav">
          <li>Online Staus : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="links">
              <span className="cart-span">{cartNumber.length}</span>
              Cart
            </Link>
          </li>
          <li>Hi, {loggedInUser.isLoggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
