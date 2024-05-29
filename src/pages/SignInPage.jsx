const SignInPage = () => {
  return (
    <>
    <div className="contenedor_formularioiniciosesion">
  <a href="/home">
    <img src="/public/eshop.png" alt="eshop" />
  </a>
  <h1>Crea tu cuenta</h1>
  <p>¿Ya tienes cuenta?<a href="/login"> Inicia sesión</a></p>
  <form className="formulario_iniciosesion">
  <div className="mb-3">
      <label htmlFor="exampleInputName" className="form-label">Nombre completo</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
      <div id="emailHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
      <div id="emailHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
      <input type="password" className="form-control" id="exampleInputPassword1" required />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Confirma tu contraseña
</label>
      <input type="password" className="form-control" id="exampleInputPassword1" required />
    </div>
    <div className="d-grid gap-2">
      <button type="submit" className="btn btn-primary">Crear cuenta</button>
    </div>
  </form>
</div>
    </>
  )
}

export default SignInPage