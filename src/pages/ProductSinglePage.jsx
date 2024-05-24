import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductSinglePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los detalles del producto!", error);
      });
  }, [id]);

  return (
    <div className="container">
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.title} className="" />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p><strong>Precio:</strong> ${product.price}</p>
            <p><strong>Categoría:</strong> {product.category}</p>
            <p><strong>Descripción:</strong> {product.description}</p>
            {/* Aquí puedes agregar más detalles del producto según tus necesidades */}
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ProductSinglePage;
