import React from "react";
import shoesList from "./data.json";
import ProductList from "./ProductList";
import ShoesDetail from "./ShoesDetail";

const ShopShoes = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4" style={styles.heading}>
        ShopShoes
      </h1>
      <ProductList shoesList={shoesList} />
      <ShoesDetail />
    </div>
  );
};

const styles = {
  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
    fontFamily: "Great Vibes, cursive",
    textTransform: "uppercase",
    letterSpacing: "2px",
    background:
      "-webkit-linear-gradient(45deg, #FFC700, #FFEE00, #0FFF00, #00FFB7, #00FFFF, #0055FF, #BE00FF, #FF00DC, #FF0042)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "rainbow 5s linear infinite",
  },
};

export default ShopShoes;
