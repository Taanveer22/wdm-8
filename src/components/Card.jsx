import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

const Card = ({
  cardItem,
  showDeleteIcon = false,
  handleRemoveFromCart,
  handleRemoveFromWishList,
}) => {
  const { price, product_image, product_title, product_id } = cardItem;
  return (
    <div className="card bg-base-100 shadow-sm relative">
      <figure className="px-5 pt-5 ">
        <img src={product_image} className="rounded-md w-11/12 h-44" />
      </figure>
      <div className="card-body items-start text-center">
        <h2 className="card-title">{product_title}</h2>
        <p>Price : {price} $</p>
        <div className="card-actions">
          <Link to={`/cardDetail/${product_id}`}>
            <button className="btn btn-outline text-violet-700 rounded-full border-2 border-violet-700">
              View Details
            </button>
          </Link>
        </div>
      </div>
      {showDeleteIcon && (
        <div
          onClick={() => {
            if (handleRemoveFromCart) handleRemoveFromCart(product_id);
            else if (handleRemoveFromWishList)
              handleRemoveFromWishList(product_id);
          }}
          className="absolute -top-5 -right-5 text-red-600 cursor-pointer"
        >
          <TiDelete size={40}></TiDelete>
        </div>
      )}
    </div>
  );
};

export default Card;
