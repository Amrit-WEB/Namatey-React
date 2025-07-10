import { useState } from "react";

const RestaurantAccordion = ({ restMenu }) => {
  const { title, itemCards } = restMenu?.card?.card;

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
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
                    <h4>Rs.{menu?.card?.info?.price / 100}</h4>
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
                    <button>Add</button>
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
