import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [quantity, setQuantity] = useState(1); // State to manage quantity
  const pricePerItem = 750; // Assuming the price per item is $750

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const getTotalPrice = () => {
    return quantity * pricePerItem;
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#fdccbc" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 content-cart">
          <div className="col">
            <p>
              <span className="h2">عربة التسوق</span>
              <span className="h4">
                ({quantity} مُنتج{quantity !== 1 ? "ات" : ""} في عربتك)
              </span>
            </p>

            <div className="card mb-4">
              <div className="card-body p-4">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <p className="small text-muted m-0 pb-2">المُنتج</p>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                      className="img-fluid"
                      alt="صورة توضيحية"
                    />
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">الاسم</p>
                      <p className="lead fw-normal mb-0">iPad Air</p>
                    </div>
                  </div>

                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">الكمية</p>
                      <div className="d-flex align-items-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-light me-2"
                          onClick={handleDecrement}
                        >
                          -
                        </button>
                        <p className="lead fw-normal mb-0">{quantity}</p>
                        <button
                          type="button"
                          className="btn btn-sm btn-light ms-2"
                          onClick={handleIncrement}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">السعر</p>
                      <p className="lead fw-normal mb-0">
                        {pricePerItem} دولار
                      </p>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">الإجمالي</p>
                      <p className="lead fw-normal mb-0">
                        {getTotalPrice()} دولار
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-5">
              <div className="card-body p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">
                      الإجمالي الكلي:
                    </span>{" "}
                    <span className="lead fw-normal">
                      {getTotalPrice()} دولار
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-light btn-lg me-2"
                onClick={() => {
                  // Handle continue shopping button click here
                }}
              >
                متابعة التسوق
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                  // Handle add to cart button click here
                }}
              >
                أضف إلى العربة
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
