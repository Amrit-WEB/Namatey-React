import { useEffect, useState } from "react";
import { CORS_PROXY } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import Error from "./Error";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [listOfMenu, setListOfMenu] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `${CORS_PROXY}https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);
    if (json.data.cards) {
      setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
      setListOfMenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    } else {
      setRestaurantInfo({});
    }
  };

  if (restaurantInfo === null) return <ShimmerUI />;

  const {
    name,
    cuisines,
    sla,
    totalRatingsString,
    costForTwoMessage,
    avgRatingString,
  } = restaurantInfo;
  console.log(listOfMenu);
  console.log(restaurantInfo);
  return Object.keys(restaurantInfo)?.length === 0 ? (
    <Error />
  ) : (
    <div className="menu-container">
      <div className="menu-heading-container">
        <h1 className="menu-heading">{name}</h1>
        <div className="menu-detail-box">
          <p className="menu-rating">
            ⭐ {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}
          </p>
          <p>
            🍽️ <span className="menu-cuisines">{cuisines.join(", ")} </span>
          </p>
          <p className="menu-delivery">
            🚚 {sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins
          </p>
        </div>
      </div>
      <p>•------------ MENU ------------•</p>
      <ul>
        {listOfMenu?.map((menu) => (
          <li key={menu?.card?.info?.id}>
            <div className="menu-card-container">
              <div className="menu-card-left">
                <h3>{menu?.card?.info?.name}</h3>
                <h4>Rs.{menu?.card?.info?.price / 100}</h4>
                <p>
                  <span>
                    ⭐ {menu?.card?.info?.ratings?.aggregatedRating?.rating}
                  </span>{" "}
                  ({menu?.card?.info?.ratings?.aggregatedRating?.ratingCount})
                </p>
                <p>
                  {menu?.card?.info?.description?.length > 150
                    ? menu?.card?.info?.description?.slice(0, 149) + "...more"
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
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
