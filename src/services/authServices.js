import axios from "axios"

const loginService = async (form) => {

    // const form = {
    //     user_name: "Falso123",
    //     password: "Falso123"
    // }

   const resp = await axios.post("https://ecommerce-basic-api.onrender.com/auth/iniciar_sesion", form)

   return resp;
}

const registerService = async (form) => {

   const resp = await axios.post("https://ecommerce-basic-api.onrender.com/auth/registrar_usuario", form)

   return resp;
}

const renovarTokenService = async () => {
   const resp = await axios.get("https://ecommerce-basic-api.onrender.com/auth/validar_usuario", {
      headers: {
         "x-token": localStorage.getItem("token"),
      }
   })
   return resp;
}

export { loginService, registerService, renovarTokenService }