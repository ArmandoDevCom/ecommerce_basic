import { useContext, useState, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import AuthContext from "../context/authcontext";
import { Link } from "react-router-dom";
import PayPalButton from "../components/PayPalButtons";

const CartPage = () => {
  const { cart, deleteCartProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  const [total, setTotal] = useState(0);

  const handleDeleteCartProduct = (id) => {
    deleteCartProduct(id);
  };

  useEffect(() => {
    const totalAcumulado = cart.reduce((acc, product) => acc + product.price, 0);
    setTotal(totalAcumulado);
  }, [cart]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <main className="container">
        <article className="col">
          {cart.map((item) => (
            <div key={item.id} className="card m-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} className="img-fluid rounded-start" alt={item.title} style={{ objectFit: 'cover', width: '200px', height: '200px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <h3 className="card-text" style={{ color: 'red' }}>
                      {item.price}
                    </h3>
                    <div className="d-flex justify-content-end">
                      <button type="button" className="btn btn-danger" onClick={() => handleDeleteCartProduct(item.id)}>
                        Eliminar del carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </article>
      </main>
      <div className="container mt-auto d-flex justify-content-end">
        <section className="row pb-5 ">
          <article className="col ">
            {cart.length > 0 ? (
              <>
                <h3 className="fs-1">Total</h3>
                <p className="fs-2">${total}</p>
                {user.user_name ? (
                  <PayPalButton currency="USD" amount={total} showSpinner={false}  />
                ) : (
                  <div>
                    <Link to="/login" className="btn btn-success">
                      Iniciar sesión
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <p className="fs-1" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: '80px' }}>No hay productos en el carrito</p>
            )}
          </article>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
