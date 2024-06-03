import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { NavLink } from "react-router-dom";

const ProductListPage = () => {
  const { obtenerProductos, products, addCartProduct } = useContext(ProductContext);

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  return (
    <>
      <div className="container">
        <header className="row col">
          <h1>Catalogo de productos</h1>
        </header>
        <main>
          <article className="col">
            <p>Contenido de la pagina de productos</p>
          </article>
        </main>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <h3 className="card-price">{product.price}</h3>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => addCartProduct(product)} // Aquí se llama a addCartProduct con el producto actual
                  >
                    Agregar al carrito
                  </button>
                  <NavLink to={`/product/${product.id}`}>
                    <button type="button" className="btn btn-warning">
                      Ver más...
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
