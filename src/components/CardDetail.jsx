import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CardDetail = () => {
  const data = useLoaderData();
  // console.log(data);
  const { id } = useParams();
  // console.log(id);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const foundProduct = data.find(
      (productItem) => productItem.product_id == id
    );
    setProduct(foundProduct);
  }, [data, id]);
  console.log(product);
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-500">Loading product details...</p>
      </div>
    );
  }
  const {
    rating,
    price,
    product_image,
    product_title,
    specification,
    description,
    availability,
  } = product;

  return (
    <>
      <section className="min-h-screen">
        <div className="hero bg-purple-500 text-white rounded-lg pb-10 lg:pb-32">
          <div className="hero-content text-center">
            <div className="max-w-5xl">
              <h1 className="text-2xl sm:text-4xl font-bold">
                Product Details
              </h1>
              <p className="py-4 text-base font-normal">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
        {/* =============dynamic section============ */}
        <div className="flex justify-center px-5 mb-10 -mt-16 lg:-mt-32">
          <div className="hero bg-base-200 w-full max-w-5xl rounded-lg shadow-xl">
            <div className="hero-content flex-col lg:flex-row gap-6 lg:gap-10 p-6 lg:p-10">
              <img
                src={product_image}
                className="w-full sm:w-3/4 md:w-1/2 max-w-sm rounded-lg shadow-2xl"
              />
              <div className="space-y-3">
                <h1 className="text-2xl lg:text-3xl font-bold">
                  {product_title}
                </h1>
                <p>Price : {price}</p>
                <button className="btn btn-success btn-sm">
                  {availability ? "In Stock" : "Out Of Stock"}
                </button>
                <p>{description}</p>
                <h1>Specification :</h1>
                {/* <ul>
                  {specification &&
                    specification.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                </ul> */}
                <p>1. {specification[0]}</p>
                <p>2. {specification[1]}</p>
                <p>3. {specification[2]}</p>
                <p>4. {specification[3]}</p>
                <h1>Rating</h1>
                <div className="flex gap-5 items-center">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="5 star"
                    />
                  </div>
                  <p>{rating}</p>
                </div>

                <div className="flex gap-5 items-center">
                  <button className="flex gap-3 items-center btn btn-primary rounded-full">
                    <h1 className="">Add To Cart</h1>
                    <div className="p-3 rounded-full border-2 border-gray-300">
                      <AiOutlineShoppingCart></AiOutlineShoppingCart>
                    </div>
                  </button>
                  <div className="p-3 rounded-full border-2 border-gray-300">
                    <FaRegHeart></FaRegHeart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardDetail;
