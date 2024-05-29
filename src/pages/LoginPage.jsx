import { NavLink } from "react-router-dom"

const LoginPage = () => {
  return (
    <>
      <div className="contenedor_formularioiniciosesion">
  <a href="/home">
    <img src="/public/eshop.png" alt="eshop" />
  </a>
  <h1>Iniciar sesión</h1>
  <p>¿No tienes cuenta?<a href="/signin"> Regístrate aquí</a></p>
  <form className="formulario_iniciosesion">
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
      <div id="emailHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
      <input type="password" className="form-control" id="exampleInputPassword1" required />
    </div>
    <div className="d-grid gap-2">
      <button type="submit" className="btn btn-primary">Iniciar sesión</button>
    </div>
    <div>
      <a href="/signin">
        <p className="restaurar_contraseña">Restaurar contraseña</p>
      </a>
    </div>
  </form>
</div>


    </>
  )
}

export default LoginPage