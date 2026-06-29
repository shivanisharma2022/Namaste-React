import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-medium">{item.card.info.name}</span>
              <span className="font-medium">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 text-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
            />

            <button className="mt-2 px-6 py-2 rounded-lg bg-pink-100 text-pink-500 font-bold shadow-lg">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
