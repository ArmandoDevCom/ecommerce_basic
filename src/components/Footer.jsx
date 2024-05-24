import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <footer className='contenedor_footer'>
            <div className='container'>
                <div className="nav-item subcontenedor_footer">
                    <NavLink className="" to="/">
                        <img src="/public/eshop.png" alt />
                    </NavLink>
                    <div className="contenedor_iconos">
                        <a href="https://www.facebook.com"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com"><i class="bi bi-instagram"></i></a>
                        <a href="https://www.twitter.com"><i class="bi bi-twitter-x"></i></a>
                        <a href="https://www.tiktok.com"><i class="bi bi-tiktok"></i></a>
                    </div>
                </div>
                <div className='container contenedor_cr'><h5>Proyecto desarrollado por Hugo Duran</h5></div>
            </div>
        </footer>
        <div></div>
    </>
  )
}

export default Footer