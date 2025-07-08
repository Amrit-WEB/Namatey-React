import ShimmerUI from "./ShimmerUI";
import Error from "./Error";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [listOfMenu, restaurantInfo] = useRestaurantMenu(resId);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", margin: "1rem" }}>
        Looks like you are offline, please check your internet connection.
      </h1>
    );

  if (restaurantInfo === null) return <ShimmerUI />;

  const {
    name,
    cuisines,
    sla,
    totalRatingsString,
    costForTwoMessage,
    avgRatingString,
  } = restaurantInfo;

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
