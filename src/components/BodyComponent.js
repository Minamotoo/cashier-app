import React, { useState } from "react";

import ProductLists from "../components/products/ProductLists";
import Calculator from "./monitor/Calculator";

export default function BodyComponent() {
  const products = [
    {
      id: 1,
      name: "สลัดผัก",
      price: "120",
      image: "/images/products/1.jpg",
    },
    {
      id: 2,
      name: "ไก่ทอด",
      price: "90",
      image: "/images/products/2.jpg",
    },
    {
      id: 3,
      name: "บิงซู",
      price: "200",
      image: "/images/products/3.jpg",
    },
    {
      id: 4,
      name: "เฟรนช์ฟราย",
      price: "140",
      image: "/images/products/4.jpg",
    },
    {
      id: 5,
      name: "เค้ก",
      price: "200",
      image: "/images/products/5.jpg",
    },
    {
      id: 6,
      name: "กาแฟ",
      price: "140",
      image: "/images/products/6.jpg",
    },
  ];
  const [totalPrice, setTotalPrice] = useState(0);
  const [orders, setOrders] = useState([]);

  function addOrder(product) {
    let isOrderExist = orders.find((order) => order.product.id === product.id);
    if (isOrderExist) {
      isOrderExist.quantity++;
      isOrderExist.price = parseInt(product.price) * isOrderExist.quantity;
    } else {
      setOrders([
        ...orders,
        { product: product, price: parseInt(product.price), quantity: 1 },
      ]);
    }
    setTotalPrice(totalPrice + parseInt(product.price));
  }

  function deleteOrder(recieveOrder) {
    const isFoundOrder = orders.find(
      (order) => order.product.id === recieveOrder.product.id
    );
    if (isFoundOrder) {
      const afterFilter = orders.filter(
        (order) => order.product.id !== recieveOrder.product.id
      );
      const newTotalPrice = totalPrice - recieveOrder.price;
      setTotalPrice(newTotalPrice);
      setOrders(afterFilter);
    }
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <ProductLists products={products} onAddOrder={addOrder} />
        </div>
        <div className="col-md-4">
          <Calculator
            totalPrice={totalPrice}
            orders={orders}
            onDeleteOrder={deleteOrder}
          />
        </div>
      </div>
    </div>
  );
}
