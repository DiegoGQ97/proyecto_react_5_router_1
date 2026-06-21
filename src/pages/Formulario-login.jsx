import { useState } from "react";






const FormularioLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarLogin = (e) => {
    e.preventDefault();




    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    


    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }




    alert("Authentication successful!");
  };

  return (
    <div className="container my-5" style={{ maxWidth: "450px" }}>
      <h2 className="mb-4 text-start">Iniciar Sesión</h2>
      <form onSubmit={validarLogin}>
        <div className="form-group mb-3 text-start">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="prueba@prueba.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group mb-4 text-start">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="text-start">
          <button type="submit" className="btn btn-primary px-4">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioLogin;
