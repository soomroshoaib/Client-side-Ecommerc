import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const { id } = useParams("");
  // console.log(id);

  const [inddata, setinddata] = useState([]);
  console.log(inddata);



  useEffect(() => {
    const addgetinddata = async () => {
      const res = await fetch(`/getproductsone/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if(res.status !== 201){
        console.log("data is avaiable ")
      }else{
        console.log("getdata")
        setinddata(data)
  
      }
    };

    addgetinddata();
  }, [id]);

  return (

    <div className="cart_section">
      {inddata && Object.keys(inddata).length &&
      <div className="cart_container">
        <div className="left_cart">
          <img
            src={inddata.detailUrl}
            alt=""
          />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3> {inddata.title.shortTitle} </h3>
          <h4>{inddata.title.longTitle}</h4>
          <Divider />
          <p className="mrp"> M.R.P. : {inddata.price.mrp}</p>
          <p>
            Deal of the Day : <span style={{ color: "#b12704" }}>{inddata.price.cost}</span>{" "}
          </p>
          <p>
            You save : : <span style={{ color: "#b12704" }}> {inddata.price.mrp - inddata.price.cost} </span>{" "}
          </p>
          <div className="discount_box">
            <h5 className="">
              {" "}
              Discount : <span style={{ color: "#111" }}>{inddata.discount}</span>
            </h5>
            <h4>
              Free Delivery :{" "}
              <span style={{ color: "#111", fontWeight: 600 }}>
                : Oct 8 -22
              </span>{" "}
              : Details
            </h4>
            <p>
              fastest delivery :{" "}
              <span style={{ color: "#111", fontWeight: 600 }}>
                Tomorrow 11 am{" "}
              </span>
            </p>
          </div>
          <p className="description">
            About the Iteam{" "}
            <span
              style={{
                color: "#565959",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.4px",
              }}
            >
              {inddata.description}
            </span>
          </p>
        </div>
      </div>
}
    </div>
  );
};

export default Cart;
