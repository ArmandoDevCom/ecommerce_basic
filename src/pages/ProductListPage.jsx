import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los productos!", error);
      });
  }, []);

  return (
    <div className="container catalogo">
      <div className="contenedor_prduct_catalogo">
        {products.map(product => (
          <div className="subcontenedor_prduct_catalogo" key={product.id}>
            <div className="card catalogo_producto" style={{ width: '18rem' }}>
              {/* Envuelve la imagen y el título del producto en un enlace */}
              <Link to={`/product/${product.id}`}>
                <img src={product.image} className="" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                </div>
              </Link>
              <div className="card-body">
                <p className="card-text"><strong>${product.price}</strong></p>
                <a href="#" className="btn btn-warning w-100">Añadir al carrito</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
