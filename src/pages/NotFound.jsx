import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 style={{ fontSize: '6rem' }}>🍕 404</h1>
      <h2>¡Oh no! La pizza que buscas no existe.</h2>
      <p className="lead">Esta página no está en nuestro menú. ¡Volvamos a la cocina!</p>
      <Link to="/" className="btn btn-primary mt-3">Volver al Inicio 🏠</Link>
    </div>
  );
};
export default NotFound;
