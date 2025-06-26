import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, sla } = resData.info;
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
          className="res-logo"
        />
      </div>
      <div className="res-text-container">
        <h3 className="res-name">{name}</h3>
        <p className="res-cuisine">{cuisines.join(", ")}</p>
        <div className="res-ratinganddelivery">
          <p className="res-rating">{avgRating} ⭐</p>
          <p className="res-deliverytime">{sla.deliveryTime} min</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
