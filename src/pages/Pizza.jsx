import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  const getPizza = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  if (!pizza) return <p className="text-center my-5">Cargando...</p>;

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card" style={{ width: "30rem" }}>
                <img 
          src={`http://localhost:5000${pizza.img}`} 
          className="card-img-top" 
          alt={pizza.name} 
        />

        <div className="card-body">
          <h2 className="card-title text-capitalize fw-bold mb-3">{pizza.name}</h2>
          <p className="card-text text-muted">{pizza.desc}</p>
          <hr />
          <h6>Ingredientes:</h6>
          <ul className="list-unstyled d-flex flex-wrap gap-2 my-3">
            {pizza.ingredients.map((ing, i) => (
              <li key={i} className="badge bg-light text-dark border p-2 text-capitalize">
                🍕 {ing}
              </li>
            ))}
          </ul>
          <hr />
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h3>Precio: ${pizza.price.toLocaleString("es-CL")}</h3>
            <button className="btn btn-dark">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
