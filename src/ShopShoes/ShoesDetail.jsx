import React from "react";
import { useSelector } from "react-redux";

const ShoesDetail = () => {
  const { shoesDetail } = useSelector((state) => state.shopShoes);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h2 className="modal-title">Product Details</h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <img
                  src={shoesDetail.image}
                  alt="Product"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-6 mt-3">
                <h4 className="fw-bold fs-5 mb-3">{shoesDetail.name}</h4>
                <p className="mb-2">{shoesDetail.description}</p>
                <p className="fw-bold mb-0">Price: {shoesDetail.price}$</p>
                <p className="mb-2">Quantity: {shoesDetail.quantity}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary rounded-pill"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary rounded-pill"
              style={{ backgroundColor: "#007bff" }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesDetail;
