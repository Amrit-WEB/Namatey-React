// import { useState } from "react";

//import Redux here for dispatching
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

const RestaurantAccordion = ({ restMenu, isOpen, setShowIndex }) => {
  const { title, itemCards } = restMenu?.card?.card;

  //uncontrolled component hai kyuki ye khud apna state manage kar raha hai (although ye koi galat code nhi hai but hamara requirement hai ki hum advance accordion banaye jisme ek expand ho to baki sab close ho jaye to ise me humen is component ko parent ke throgh controll karna parega isliye hum ise abhi uncontroll component bol rahe hai requiremnet ke hisab se)
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // };

  //ye function apne parent ke state ko change kar rahe --- lifting state up ke through
  const toggleAccordion = () => {
    setShowIndex();
  };

  //Cart Dispatching
  const dispatch = useDispatch();
  const handleAddItem = (menu) => {
    dispatch(addItem(menu));
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
      </div>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}>
        <ul>
          {itemCards.map((menu) => {
            return (
              <li key={menu?.card?.info?.id}>
                <div className="menu-card-container">
                  <div className="menu-card-left">
                    <h3>{menu?.card?.info?.name}</h3>
                    <h4>
                      Rs.
                      {menu?.card?.info?.price / 100 ||
                        menu?.card?.info?.defaultPrice / 100}
                    </h4>
                    <p>
                      <span>
                        ⭐ {menu?.card?.info?.ratings?.aggregatedRating?.rating}
                      </span>{" "}
                      (
                      {menu?.card?.info?.ratings?.aggregatedRating?.ratingCount}
                      )
                    </p>
                    <p>
                      {menu?.card?.info?.description?.length > 150
                        ? menu?.card?.info?.description?.slice(0, 149) +
                          "...more"
                        : menu?.card?.info?.description}
                    </p>
                  </div>
                  <div className="menu-card-right">
                    <div className="menu-card-image-box">
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${menu.card.info.imageId}`}
                        alt="menu-image"
                      />
                    </div>
                    <button onClick={() => handleAddItem(menu?.card?.info)}>
                      Add +
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantAccordion;
