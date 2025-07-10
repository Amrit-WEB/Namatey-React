import ShimmerUI from "./ShimmerUI";
import Error from "./Error";
import useRestaurantMenu from "../customHooks/useRestaurantMenu";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import RestaurantAccordion from "./RestaurantAccordion";

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
        {listOfMenu.map((menu, index) => (
          <RestaurantAccordion key={index + "123"} restMenu={menu} />
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
