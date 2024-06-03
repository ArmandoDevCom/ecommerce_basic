import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import { NavLink } from "react-router-dom";

const ProductListPage = () => {
  const { obtenerProductos, products, addCartProduct } = useContext(ProductContext);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  useEffect(() => {
    setVisibleProducts(products.slice(0, 4));
  }, [products]);

  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-stretch">
          {visibleProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
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
