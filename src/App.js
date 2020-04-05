import React, { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/product";
import Footer from "./components/footer";
import Modal from "./components/modal";

function App() {
  const [data, setData] = useState([]);
  const [cart, addToCart] = useState([]);
  const [modal , setModal] = useState(false)
  
  const handleModal = () => {
    setModal(!modal)
  }
  const handleSubmit = () => {
    addToCart([])
    setModal(!modal)
  }

  const handleAddToCart = (item, count) => {
    let total = item.price * count;
    let newItem = { ...item, count: count, total: total };
    addToCart([...cart, newItem]);
  };

  console.log(cart);
  useEffect(() => {
    async function fetchData() {
      let res = await fetch("/data.json")
        .then((res) => res.json())
        .catch((err) => {
          throw err;
        });
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className="app-container">
        {data.map((item, index) => {
          return (
            <Product
              item={item}
              handleAddToCart={handleAddToCart}
              key={index}
            />
          );
        })}
      </div>
      <Footer cart={cart} handleModal={handleModal}  />
      <Modal cart={cart}  handleModal={handleModal} modal={modal} handleSubmit={handleSubmit} />
      
    </div>
  );
}

export default App;
