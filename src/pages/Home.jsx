import { useState, useEffect } from "react";
import Cardpizza from "../components/Cardpizza";




const Home = () => {


  const [pizzas, setPizzas] = useState([]);
  const url = "http://localhost:5000/api/pizzas";
  const getPizzas = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al conectarse a la API:", error);
    }
  };




  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="container my-4">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-12 col-md-4 mb-4" key={pizza.id}>
            <Cardpizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              desc={pizza.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
