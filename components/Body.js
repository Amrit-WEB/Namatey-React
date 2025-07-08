import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { CORS_PROXY } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        `${CORS_PROXY}https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();
      const finaldata =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(finaldata);
      setFilterRestaurants(finaldata);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body">
      <div className="search-container">
        <SearchBar
          placeholder="Search for restaurants and food"
          originalData={listOfRestaurants}
          filterRestaurantsCallback={setFilterRestaurants}
        />
      </div>
      <div className="res-container">
        {filterRestaurants.length === 0 ? (
          <ShimmerUI />
        ) : (
          filterRestaurants?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
              className="res-card-link"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
