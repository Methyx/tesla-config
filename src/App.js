import "./App.css";
import Category from "./components/Category";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [vehiculePrice, setVehiculePrice] = useState(0);
  const [colorPrice, setColorPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Tesla Config</h1>
      </header>
      <main>
        <Category
          name={data[0].name}
          title={data[0].title}
          options={data[0].options}
          categoryPrice={setVehiculePrice}
        />
        <Category
          name={data[1].name}
          title={data[1].title}
          options={data[1].options}
          categoryPrice={setColorPrice}
        />
        {totalPrice !== vehiculePrice + colorPrice &&
          setTotalPrice(vehiculePrice + colorPrice)}
        <h3>{`Prix Total = ${totalPrice} €`}</h3>
      </main>
    </div>
  );
}

export default App;
