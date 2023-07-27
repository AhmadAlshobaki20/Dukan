import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Product.css";
import axios from "axios";
import swal from "sweetalert";

export default function ProductView() {
  const { id } = useParams();
  const [Products, setProduct] = useState([]);

  //fetch the products data using id of this product
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`http://localhost:3001/Products/${id}`);
      setProduct(await response.json());
    };

    getProducts();
  }, []);

  const sleeves = () => {
    if (Products.sleeves === null) {
      return "";
    } else if (Products.sleeves) {
      return (
        <div>
          <p className="fw-bolder fs-5">Sleeves</p>
          <p>{Products.sleeves}</p>
        </div>
      );
    } else {
      return "";
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
              .get(`http://localhost:3001/Products/${ID.id}`)
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
      {/* display products details */}
      <div className="container mt-3 mb-5">
        <div className="mb-3">
          <NavLink to={`/Products/`} className="card-link mb">
            <i
              className="fa-solid fa-arrow-left fa-xl"
              style={{ color: "#374151" }}
            ></i>
            {/* navigate from the img to product view component */}
          </NavLink>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              src={Products.image}
              alt={Products.title}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-lg-6">
            <h4 className="display-5 fw-bolder">{Products.title}</h4>
            <p className="text lead fs-6">{Products.description}</p>

            <hr />
            <div className="mb-5 mt-5 text-center">
              <h3 className="fw-bolder m-0" id="price">
                ${Products.price} JOD
              </h3>
            </div>

            <button className=" btnView display-6 mb-5 ms-3 w-100 border border-0">
              <a
                href="#"
                className="fw-semibold text-white"
                onClick={(e) =>
                  InsertCart(e, {
                    id: Products.id,
                    title: Products.title,
                    price: Products.price,
                    image: Products.image,
                    quantity: Products.quantity,
                  })
                }
              >
                أضف إلى السلة
              </a>
            </button>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
