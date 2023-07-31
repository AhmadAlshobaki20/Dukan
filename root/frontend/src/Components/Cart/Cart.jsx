import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
const ShoppingCart = () => {
  const Products = JSON.parse(sessionStorage.getItem("Products"));
  const params = useParams();

  const calculatePrice = () => {
    let totle = 0;
    Products.forEach((element) => {
      totle += element.price;
    });
    return totle;
  };

  // send data to database

  const setProductsData = async () => {
    const response = await axios.post(`/api/v1/customer/${params.customerId}`);
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <Link to="/Products" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>
                        متابعة التسوق
                      </Link>
                    </h5>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">عربة التسوق</p>
                        <p className="mb-0">لديك 4 منتجات في عربة التسوق</p>
                      </div>
                      <div>
                        <p className="mb-0">
                          <span className="text-muted">الترتيب حسب:</span>{" "}
                          <a href="#!" className="text-body">
                            السعر <i className="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* منتج 1 */}
                    {Products.map((product) => {
                      return (
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                    className="img-fluid rounded-3"
                                    alt="عنصر التسوق"
                                    style={{ width: "65px" }}
                                  />
                                </div>
                                <div className="ms-3">
                                  <h5>{product.title}</h5>
                                  <p className="small mb-0">
                                    {product.description}
                                  </p>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "50px" }}>
                                  <h5 className="fw-normal mb-0">{}</h5>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <h5 className="mb-0">{product.price}JD</h5>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <i className="fas fa-trash-alt"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="col-lg-5">
                    <div className="bebo">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4"></div>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">المجموع الفرعي</p>
                          <p className="mb-2">$4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">الشحن</p>
                          <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">الإجمالي (شامل الضرائب)</p>
                          <p className="mb-2">{calculatePrice()}</p>
                        </div>

                        <button
                          type="button"
                          className="btn btn-info btn-block btn-lg"
                        >
                          <div className="d-flex justify-content-between">
                            <span>{calculatePrice()}</span>
                            <span>
                              الدفع{" "}
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
