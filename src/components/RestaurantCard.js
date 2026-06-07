import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //const { resName, cuisines, rating, deliveryTime } = props; // in case of static data when we are passing only few data as props to restaurant card component then we can destructure the props object and use the data in restaurant card component
  const { resData } = props; // in case of real data from api when we want to use all the data instead of just few data then we can pass the whole object as props and use it in restaurant card component

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla,
    areaName,
  } = resData?.info; // destructuring the resData.info object to get the required data for restaurant card component

  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Stars</h5>
      <h5>{sla.slaString}</h5>
      <h5>{areaName}</h5>
    </div>
  );
};

export default RestaurantCard;