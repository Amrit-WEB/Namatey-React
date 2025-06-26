import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="Bhojnalay Logo" src={LOGO_URL} />
        <h1 className="logo-text">Bhojanalay</h1>
      </div>
      <div className="nav-items">
        <ul className="nav">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
