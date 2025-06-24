import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Bhojnalay Logo"
          src="https://img.freepik.com/premium-vector/letter-s-with-spoon-fork-logo-tableware-logo-fast-food-restaurant-logo_65373-25.jpg?semt=ais_items_boosted&w=740"
        />
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

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg"
          className="res-logo"
        />
      </div>
      <div className="res-text-container">
        <h3 className="res-name">Meghna Foods</h3>
        <p className="res-cuisine">Pizzas, Italian, Pastas, Desserts</p>
        <div className="res-ratinganddelivery">
          <p className="res-rating">4.5 ⭐</p>
          <p className="res-deliverytime">25 min</p>
        </div>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search Bar</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());
