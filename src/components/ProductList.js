import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length === 0)
    return (
      <h5 style={{ textTransform: "none" }}>
        No products match your search criteria...
      </h5>
    );
  if (grid_view) return <GridView products={products}></GridView>;

  return <ListView products={products} />;
};

export default ProductList;
