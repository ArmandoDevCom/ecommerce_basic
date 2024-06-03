import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductSinglePage = () => {

  const { obtenerProducto, product, addCartProduct } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    obtenerProducto(id);
  }, [obtenerProducto, id]);

  return (
    <main className="container" style={{ maxWidth: '1000px', paddingTop: '100px', paddingBottom: '100px' }}>
      {product && (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
            </div>
            <div className="col-md-8">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <h3 className="card-title">{product.price}</h3>
                <div className="mt-auto">
                  <button
                    type="button"
                    className="btn btn-primary ms-auto"
                    onClick={() => addCartProduct(product)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductSinglePage;
