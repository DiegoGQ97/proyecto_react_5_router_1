import React, { useState } from 'react';
import { pizzaCart } from '../pizzas';





function Cart() {
  
  const [cart, setCart] = useState(pizzaCart);

  
  const aumentarCantidad = (id) => {
    const nuevoCarrito = cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCart(nuevoCarrito);
  };

  
  const disminuirCantidad = (id) => {
    const nuevoCarrito = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
      .filter((item) => item.count > 0);
    
    setCart(nuevoCarrito);
  };

  
  const totalCompra = cart.reduce((acumulado, item) => acumulado + (item.price * item.count), 0);


  
  return (
    <div className="container mt-5 p-5 bg-white rounded shadow-sm" style={{ maxWidth: "600px" }}>
      <h4 className="fw-bold mb-4">Detalles del pedido:</h4>
      
      {cart.map((item) => (
        <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
          <div className="d-flex align-items-center">
            <img 
              src={item.img} 
              alt={item.name} 
              style={{ width: "60px", height: "60px", objectFit: "cover" }} 
              className="rounded me-3" 
            />
            <h6 className="mb-0 fw-bold text-capitalize">Pizza {item.name}</h6>
          </div>
          
          <div className="d-flex align-items-center">
            <span className="me-3 fw-bold text-muted">
              ${(item.price * item.count).toLocaleString('es-CL')}
            </span>
            <button 
              className="btn btn-outline-danger btn-sm px-2 py-0 fw-bold"
              style={{ width: "30px" }}
              onClick={() => disminuirCantidad(item.id)}
            >
              -
            </button>
            <span className="mx-3 fw-bold">{item.count}</span>
            <button 
              className="btn btn-outline-primary btn-sm px-2 py-0 fw-bold"
              style={{ width: "30px" }}
              onClick={() => aumentarCantidad(item.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4 pt-2">
        <h3 className="fw-bold text-dark">Total: ${totalCompra.toLocaleString('es-CL')}</h3>
        <button className="btn btn-dark w-100 mt-3 py-2 fw-bold">Pagar 💳</button>
      </div>
    </div>
  );
}

export default Cart;

