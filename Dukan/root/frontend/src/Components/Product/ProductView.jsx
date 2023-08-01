import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./productdetalis.css";
import axios, { all } from "axios";
import swal from "sweetalert";

export default function ProductView() {
  const params = useParams();
  const [Products, setProduct] = useState({});
  // const [ArrayProducts, setArrayProducts] = useState([]);

  //fetch the products data using id of this product
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`/api/v1/products/${params.productId}`);
      setProduct(response.data.data.products);
    };
    console.log(getProducts());
    getProducts();
  }, []);

  const addToCart = () => {
    if (Products) {
      const allProduct = JSON.parse(sessionStorage.getItem("Products")) || [];
      allProduct.push(Products);
      sessionStorage.setItem("Products", JSON.stringify(allProduct));
    }
  };

  function InsertCart(e, ID) {
    e.preventDefault();
    if (ID.quantity) {
      axios
        .get(`http://localhost:3001/Users/${sessionStorage.getItem("id")}`)
        .then(function (response) {
          const userData = response.data;
          const isElementExists = userData.Orders.New_Cart.filter(
            (ele) => ele.id == ID.id
          );

          if (isElementExists.length) {
            swal("تمت إضافة المنتج سابقًا!", "", "error");
          } else {
            swal("تمت إضافة المنتج بنجاح", "", "success");
            userData.Orders.New_Cart.push(ID);

            // Decrement the quantity by one, ensuring it doesn't go below zero
            axios
              .get(`/api/v1/products/${ID.id}`)
              .then(function (response) {
                const productData = response.data;
                productData.quantity -= 1;
                return axios.put(
                  `http://localhost:3001/Products/${ID.id}`,
                  productData
                );
              })
              .then((response) => {})
              .catch((error) => {
                console.log(error);
              });

            return axios.put(
              `http://localhost:3001/Users/${sessionStorage.getItem("id")}`,
              userData
            );
          }
        })
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    } else {
      swal(
        swal("نفذ من المخزون، سيتوفر المنتج قريبًا", "", "error"),
        "",
        "error"
      );
    }
  }

  return (
    <>
      <section className="sectondetalsproduct">
        <div className="card-Details">
          {/* <img className="img-product" src={productDet.image} alt="" /> */}
          <div className="ContentCardProduct">
            <img
              style={{ width: "100%", height: "200px" }}
              src={Products.Image}
              alt=""
            />
            <h3>{Products.title}</h3>
            <p>{Products.description}</p>
            <p> {`السعر:${Products.price} د.أ`}</p>
          </div>
          <Link
            className="AddtoCart"
            onClick={() => {
              addToCart();
            }}
            to="/Checkout"
          >
            أضف المنتج إلى السلة{" "}
          </Link>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              src={`${Products.Image}`}
              alt={`${Products.title}`}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-lg-6">
            {/* <p className="text-bold p-2 me-3">{Products.category}</p> */}
            <h4 className="display-5 fw-bolder">{`${Products.title}`}</h4>

            <hr />
            <div className="mb-5 mt-5 text-center">
              <h3 className="fw-bolder m-0" id="price">
                {Products.price} د.أ
              </h3>
            </div>

            <button className=" btnView display-6 mb-5 ms-3 w-50 border border-0">
              <Link
                className="AddtoCart"
                onClick={() => {
                  addToCart();
                }}
                to="/Cart"
              >
                أضف المنتج إلى السلة{" "}
              </Link>
            </button>
            <br />

            {/* I used tab "bootstrap" for this style */}

            <nav className="ps-2">
              <div className="nav nav-tabs ps-2 " id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  التفاصيل
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                {Products.description}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
