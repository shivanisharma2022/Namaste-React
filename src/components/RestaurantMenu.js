import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const restaurantInfo = useRestaurantMenu(resid);

  //const [showIndex, setShowIndex] = useState(0); // 1st accordian will be open at default
  const [showIndex, setShowIndex] = useState(null); // all accordians will be closed at default
 
  if (!restaurantInfo) return <Shimmer />;

  const restaurant = restaurantInfo?.cards?.[2]?.card?.card?.info;

  const { name, avgRating, costForTwoMessage, cuisines, areaName, sla } = restaurant;

  const menuCards = restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [];

  //const menuItems = menuCards.flatMap((card) => card?.card?.card?.itemCards || []);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-3xl">{name}</h1>
      <p className="font-bold text-lg">
        ★ {avgRating} - {costForTwoMessage}
      </p>
      <p className="font-medium text-shadow-2xs">{cuisines?.join(", ")}</p>
      <p className="font-medium text-shadow-2xs">{areaName}</p>
      <p className="font-medium text-shadow-2xs">{sla?.slaString}</p>

      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.id}
          data={category?.card?.card}
          // ft. if 1 accordian opens, other should collpase
          // lifting the state up
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
