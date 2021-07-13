import { useEffect, useState } from "react";

const Card = () => {
  const [items, setItems] = useState([
    {
      name: "mango jucie",
      cal: 56,
    },
    {
      name: "dosa",
      cal: 100,
    },
    {
      name: "beer",
      cal: 250,
    },
    {
      name: "Brownie",
      cal: 180,
    },
    {
      name: "lassi",
      cal: 300,
    },
    {
      name: "pav bhaji",
      cal: 200,
    },
  ]);

  const del = (i) => {
    const newItems = items.filter((e, index) => index !== i);
    setItems(newItems);
  };

  useEffect(() => {
    if (items.length === 0) {
      alert("Its empty");
    }
  }, [items]);

  return (
    <>
      <div className="container">
        <div className="card">
          {items.map((ele, index) => {
            return (
              <div key={index} className="info">
                <div className="names">
                  <h1>{ele.name}</h1>
                  <button className="btn" onClick={() => del(index)}>Delete</button>
                </div>
                <h2 className="att">you have consumed {ele.cal} calorie</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;