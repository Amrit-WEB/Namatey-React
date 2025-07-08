import useOnlineStatus from "../customHooks/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const onlineStatus = useOnlineStatus();
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
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
