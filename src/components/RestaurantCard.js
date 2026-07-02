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
    <div 
    data-testid="restaurant-card" 
    className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-md"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-2xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{costForTwo}</h5>
      <h5>{avgRating} Stars</h5>
      <h5>{sla.slaString}</h5>
      <h5>{areaName}</h5>
    </div>
  );
};

// Higher Order Component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Newly Opened
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
