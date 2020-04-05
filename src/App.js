import React, { useEffect, useState } from "react";
import "./App.css";
import Product from './components/product'
import Footer from './components/footer'

function App() {
  const [data, setData] = useState([]);

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
   <div style={{ position:'relative'}}>
   <div className="app-container">
      {data.map((item, index) => {
        return (
          <Product  item={item} />
          
        );
      })}
    </div>
    <Footer />
    </div>
  );
}

export default App;
