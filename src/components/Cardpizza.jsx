import React from 'react';



function CardPizza({ name, price, ingredients, img, desc }) {
  return (
    <div className="card h-100 shadow-sm w-100">
   <img 
  src={`http://localhost:5000${pizza.img}`} 
  className="card-img-top" 
  alt={pizza.name} 
/>


      
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-bold text-dark text-capitalize mb-2">Pizza {name}</h5>
          <p className="card-text text-muted small border-bottom pb-3">{desc}</p>
          
          <p className="card-text text-muted mb-1 small fw-bold">🍕 Ingredientes:</p>
          
          <ul className="text-secondary ps-3 mb-3 text-capitalize">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="small">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <hr />
          <h4 className="text-center text-dark fw-bold my-3">
            Precio: ${price.toLocaleString('es-CL')}
          </h4>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-dark btn-sm w-50 fw-bold">Ver Más</button>
            <button className="btn btn-dark btn-sm w-50 fw-bold">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;



