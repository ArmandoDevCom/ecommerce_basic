import axios from "axios";

const URL = "https://ecommerce-basic-api.onrender.com/productos";

const obtenerProductosServices = async () => {
    const resp = await axios.get(URL)

    return resp
}

const obtenerProductoService = async (id) => {
    const resp = await axios.get(`${URL}/${id}`)

    return resp
}

export {obtenerProductosServices, obtenerProductoService}