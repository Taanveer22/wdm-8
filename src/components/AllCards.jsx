import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const AllCards = () => {
  const { categoryType } = useParams();
  console.log(categoryType);
  const data = useLoaderData();
  console.log(data);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (
      categoryType === "Phones" ||
      categoryType === "Laptops" ||
      categoryType === "Watches"
    ) {
      const filteredData = [...data].filter(
        (cardItem) => cardItem.category === categoryType
      );
      setProducts(filteredData);
    } else if (categoryType === "All Products") {
      setProducts(data);
    } else {
      setProducts(data);
    }
  }, [data, categoryType]);
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((cardItem) => (
        <Card cardItem={cardItem} key={cardItem.product_id}></Card>
      ))}
    </div>
  );
};

export default AllCards;
