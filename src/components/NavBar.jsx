import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (

<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
  <div className="container">
  <NavLink class="navbar-brand" href="#">
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
        <li className="nav-item">
          <NavLink className="nav-link" to="/miperfil">Mi Perfil</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div>
      <NavLink to="/carrito"><i class="bi bi-bag-fill"></i></NavLink>
      </div>
    </div>
  </div>
</nav>


)
}

export default NavBar