import { useState } from "react";



const Formulario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      alert("La contraseña y la confirmación de la contraseña deben ser iguales.");
      return;
    }

    alert("¡Registro exitoso!");
  };



  return (




    <div className="container my-5" style={{ maxWidth: "450px" }}>
      
      
      <h2 className="mb-4 text-start">Registrarse</h2>
      <form onSubmit={validarDatos}>
        <div className="form-group mb-3 text-start">
          <label className="form-label">Email</label>
          
          
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        
        
        <div className="form-group mb-3 text-start">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        
        
        
        <div className="form-group mb-4 text-start">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirma contraseña"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
        
        
        
        <div className="text-start">
          <button type="submit" className="btn btn-primary px-4">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
