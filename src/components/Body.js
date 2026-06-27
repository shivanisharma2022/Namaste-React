import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("Rendering Body component");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        //https://corsproxy.io/?
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.2219957&lng=78.0027831&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const json = await data.json();

      console.log("API Response:", json);

      const restaurantsCard =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.id === "restaurant_grid_listing_v2",
        ) ||
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        );

      const restaurants =
        restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      console.log("Restaurants:", restaurants);

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connection.
      </h1>
    );

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex items-center m-4 p-4 gap-4">
        <div className="search flex items-center gap-4">
          <input
            type="text"
            className="border border-solid border-black px-3 py-2"
            placeholder="Search for restaurants....."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-4 py-2 bg-blue-200 rounded-lg"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase()),
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.2,
            );

            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
          >
            {restaurant.info.isNewlyOnboarded ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
