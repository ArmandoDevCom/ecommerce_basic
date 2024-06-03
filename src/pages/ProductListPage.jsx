import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { NavLink } from "react-router-dom";

const ProductListPage = () => {
  const { obtenerProductos, products, addCartProduct } = useContext(ProductContext);

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  const truncateDescription = (description) => {
    if (description.length > 30) {
      return description.substring(0, 30) + '...';
    }
    return description;
  };

  return (
    <>
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <header className="row col">
          <h1>Catálogo de productos</h1>
        </header>
        <main>
          <article className="col">
            <p>Contenido de la página de productos</p>
          </article>
        </main>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={product.image} className="card-img-top" alt={product.title} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{truncateDescription(product.description)}</p>
                  <h3 className="card-price">{product.price}</h3>
                  <div className="mt-auto">
                    <button
                      type="button"
                      className="btn btn-primary me-2"
                      onClick={() => addCartProduct(product)}
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
