import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const restaurantInfo = useRestaurantMenu(resid);

  if (!restaurantInfo) return <Shimmer />;

  const restaurant = restaurantInfo?.cards?.[2]?.card?.card?.info;

  const { name, avgRating, costForTwoMessage, cuisines, areaName, sla } =
    restaurant;

  const menuCards =
    restaurantInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const menuItems = menuCards.flatMap(
    (card) => card?.card?.card?.itemCards || [],
  );

  return (
    <div className="restaurant-menu">
      <div className="restaurant-info-card">
        <div className="restaurant-info">
          <div className="restaurant-details">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")}</p>
            <p>{areaName}</p>
          </div>
          <div className="restaurant-meta">
            <p>{avgRating} stars</p>
            <p>{sla?.slaString}</p>
            <p>{costForTwoMessage}</p>
          </div>
        </div>
      </div>

      <h3>Menu</h3>
      <ul>
        {menuItems.map((item, index) => {
          const info = item?.card?.info || {};
          const {
            name: itemName,
            price,
            defaultPrice,
            description,
            imageId,
          } = info;
          const displayPrice = price || defaultPrice;
          const rating =
            info?.ratings?.aggregatedRating?.rating || info?.rating || "";

          return (
            <li key={index} className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-text">
                  <h4>{itemName}</h4>
                  {displayPrice ? (
                    <p className="menu-item-price">₹{displayPrice / 100}</p>
                  ) : null}
                  {rating ? (
                    <p className="menu-item-rating">
                      <span className="menu-item-star">★</span> {rating}
                    </p>
                  ) : null}
                  {description ? (
                    <p className="menu-item-description">{description}</p>
                  ) : null}
                </div>
                {imageId ? (
                  <img
                    className="menu-item-image"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                    alt={itemName}
                  />
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
