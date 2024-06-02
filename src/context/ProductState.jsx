import { useReducer, useCallback } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer"
import { obtenerProductosServices, obtenerProductoService } from "../services/productsServices"

const initialState = {
    products: [],
    product: {},
}

const ProductState = ({ children }) => {

    const [globalState, dispatch] = useReducer(ProductReducer, initialState)

    const obtenerProductos = useCallback( async () => {
      const resp = await obtenerProductosServices()
      console.log(resp.data.data)
      dispatch({
        type: "OBTENER_PRODUCTOS",
        payload: resp.data.data,
        })
    }, [])

    const obtenerProducto = useCallback( async (id) => {
      const resp = await obtenerProductoService(id)
      console.log(resp.data.data)
      dispatch({
        type: "OBTENER_PRODUCTO",
        payload: resp.data.data,
      })
    }, [])

  return <ProductContext.Provider 
  value={{
    products:globalState.products,
    product: globalState.product,
    obtenerProductos,
    obtenerProducto,
  }}>
    {children}
    </ProductContext.Provider>;
};

ProductState.propTypes = {
  children: PropTypes.node,
};

export default ProductState;
