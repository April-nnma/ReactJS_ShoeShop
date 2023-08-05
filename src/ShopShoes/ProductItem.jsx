import React from "react";
import { useDispatch } from "react-redux";
import { detailProductAction } from "./shopShoes/action";

const ProductItem = ({ shoes }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-md-4 py-3">
      <div className="card h-100 border-0 shadow-sm">
        <img src={shoes.image} alt="Product" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title mb-3">{shoes.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(shoes.price)}
          </h6>
          <div className="d-flex justify-content-between align-items-center">
            <button className="custom-btn-outline">Add To Cart</button>
            <button
              className="custom-btn-details"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                dispatch(detailProductAction.handleProductDetail(shoes));
              }}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
