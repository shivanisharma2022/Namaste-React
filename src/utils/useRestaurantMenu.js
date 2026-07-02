import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(RESTAURANT_URL + resId);
        const json = await data.json();
        console.log("Restaurant Menu API Response:", json);

        setRestaurantInfo(json?.data);
      } catch (error) {
        console.error("Error fetching restaurant menu:", error);
      }
    };

    fetchMenu();
  }, []);

  // Better way to fetch restaurant menu, uncomment the code if you want to test the cart component
  // useEffect(() => {
  //   if (!resId) return;
  //
  //   const fetchMenu = async () => {
  //     try {
  //       const data = await fetch(RESTAURANT_URL + resId);
  //       const json = await data.json();
  //       console.log("Restaurant Menu API Response:", json);
  //
  //       setRestaurantInfo(json?.data);
  //     } catch (error) {
  //       console.error("Error fetching restaurant menu:", error);
  //     }
  //   };
  //
  //   fetchMenu();
  // }, [resId]);

  return restaurantInfo;
};

export default useRestaurantMenu;
