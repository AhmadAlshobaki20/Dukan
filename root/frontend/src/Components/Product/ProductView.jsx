import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./productdetalis.css";
import axios from "axios";
import swal from "sweetalert";

export default function ProductView() {
  const params = useParams();
  const [Products, setProduct] = useState([]);

  //fetch the products data using id of this product
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`/api/v1/products/${params.productId}`);
      // console.log(params);
      console.log(response.data.data.products);

      setProduct(response.data.data.products);
    };

    getProducts();
  }, []);

  // const sleeves = () => {
  //   if (Products.sleeves === null) {
  //     return "";
  //   } else if (Products.sleeves) {
  //     return (
  //       <div>
  //         <p className="fw-bolder fs-5">Sleeves</p>
  //         <p>{Products.sleeves}</p>
  //       </div>
  //     );
  //   } else {
  //     return "";
  //   }
  // };

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
      <section className="sectondetalsproduct">
        <div className="card-Details">
          {/* <img className="img-product" src={productDet.image} alt="" /> */}
          <div className="ContentCardProduct">
            <h3>{Products.title}</h3>
            <p>{Products.description}</p>
            <p> {`Price $${Products.price}`}</p>
          </div>
          <Link className="AddtoCart" to="/">
            Continue to add cart{" "}
          </Link>
        </div>
      </section>
    </>
  );
}
