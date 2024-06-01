import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (

<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
  <div className="container">
  <NavLink class="navbar-brand" to="/">
      <img src="/public/eshop.png" alt="eShop" width={30} height={30} />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
   
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/catalogo">Catálogo</NavLink>
        </li>
      </ul>
      <div className="boton_carrito">
      <NavLink to="/carrito"><i class="bi bi-bag-fill"></i></NavLink>
      </div>
      <div className="dropdown boton_sesion">
  <button className="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Mi cuenta
  </button>
  <ul className="dropdown-menu">
    <li><NavLink className="dropdown-item" to="/miperfil">Mi Perfil</NavLink></li>
    <li><NavLink className="dropdown-item" to="/login">Iniciar sesión</NavLink></li>
    <li><NavLink className="dropdown-item" to="/signin">Registrarse</NavLink></li>
  </ul>
</div>

    </div>
  </div>
</nav>


)
}

export default NavBar