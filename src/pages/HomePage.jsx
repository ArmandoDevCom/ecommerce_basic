import FeaturedProducts from "../components/FeaturedProducts"

const HomePage = () => {
  return (
    <>
      <main className="Main_homepage">
          <h1>TENEMOS LO QUE ESTAS BUACANDO</h1>
          <p>más de 5000 productos de diferenctes categorías a un excelente precio</p>
      </main>
      <div className="bloque_destacados">
        <h2>Productos destacados</h2>
      <FeaturedProducts />
      </div>
      <div className="bloque_descuento">
        <div className="bloque_descuentoinfo">
          <h3>$100</h3>
          <h4>de descuento en tu primera compra</h4>
          <h4>usando el código</h4>
          <h5>HDES2024</h5>
        </div>
        <div className="bloque_imgdescuento">
          <img src="/public/img/66514.jpg" alt="hombre celabrando descuento online" />
        </div>
      </div>
      <div className="bloque_newsletter">
      <h5 className="card-title text-center">Suscríbete a nuestro Newsletter</h5>
              <form className="formulario_newsletter">
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" required />
                </div>
                <button type="submit" className="btn btn-warning btn-block mt-3">Suscribirse</button>
              </form>
      </div>
    </>
  )
}

export default HomePage