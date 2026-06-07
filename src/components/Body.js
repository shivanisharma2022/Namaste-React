import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants, cuisines or a dish..."
        />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filtered);
            console.log(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
