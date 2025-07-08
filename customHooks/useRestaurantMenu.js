import { useEffect, useState } from "react";
import { CORS_PROXY } from "../utils/constants";

const useRestaurantMenu = (resId) => {
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

  return [listOfMenu, restaurantInfo];
};

export default useRestaurantMenu;
