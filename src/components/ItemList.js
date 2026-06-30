import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const info = item?.card?.info || item;

        return (
          <div
            key={info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-medium">{info.name}</span>
                <span className="font-medium">
                  - ₹
                  {info.price ? info.price / 100 : info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{info.description}</p>
            </div>
            <div className="w-3/12 p-4 text-center">
              <img src={CDN_URL + info.imageId} className="w-full rounded-lg" />

              <button
                className="mt-2 px-6 py-2 rounded-lg bg-pink-100 text-pink-500 font-bold shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
