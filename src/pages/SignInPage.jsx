import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import AuthContext from "../context/authcontext";

const initForm = {
  full_name: "",
  user_name: "",
  email: "",
  password: "",
};

const SignInPage = () => {
  const { user, registrarUsuario } = useContext(AuthContext);

  const [form, setForm] = useState(initForm);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await registrarUsuario(form);
      // Puedes manejar una redirección o mostrar un mensaje de éxito aquí
    } catch (error) {
      // Maneja los errores aquí
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contenedor_formularioiniciosesion">
      <NavLink to="/home">
        <img src="/public/eshop.png" alt="eshop" />
      </NavLink>
      <h1>Crea tu cuenta</h1>
      <p>¿Ya tienes cuenta? <NavLink to="/login">Inicia sesión</NavLink></p>
      <form className="formulario_iniciosesion" onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="inputFullName" className="form-label">Nombre completo</label>
          <input type="text" className="form-control" id="inputFullName" name="full_name" value={form.full_name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputUserName" className="form-label">Nombre de usuario</label>
          <input type="text" className="form-control" id="inputUserName" name="user_name" value={form.user_name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="inputEmail" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="inputPassword" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">Crear cuenta</button>
        </div>
      </form>
      <section className="row">
        <article className="col">
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </article>
      </section>
    </div>
  );
};

export default SignInPage;
