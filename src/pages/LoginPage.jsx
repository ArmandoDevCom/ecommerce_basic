import { NavLink } from "react-router-dom"
import { loginService } from "../services/authServices"
import { useState } from "react"

const initForm = {
  user_name: "",
  password: "",
}

const LoginPage = () => {
  const [form, setForm] = useState(initForm)

  const handleIniciarSesion = async (event) => {
    event.preventDefault()

    // console.log(form)

    try {
      const resp = await loginService(form)
      console.log(resp.data.data)

    } catch (error) {
        console.log(error.response.data.msg)
    }
  }

    const handleChange = (e) => {
      console.log(e.target.name)
      console.log(e.target.value)

      setForm(
        {
          ...form,
          [e.target.name]: e.target.value
        }
      )

    }

  return (
    <>
      <div className="contenedor_formularioiniciosesion">
  <a href="/home">
    <img src="/public/eshop.png" alt="eshop" />
  </a>
  <h1>Iniciar sesión</h1>
  <p>¿No tienes cuenta?<a href="/signin"> Regístrate aquí</a></p>
  <form className="formulario_iniciosesion" onSubmit={handleIniciarSesion}>
    <div className="mb-3">
      <label htmlFor="imputUserName" className="form-label">User name</label>
      <input type="text" className="form-control" id="imputUserName" aria-describedby="emailHelp" name="user_name" value={form.user_name} onChange={handleChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="inputPassword" className="form-label">Password</label>
      <input type="password" className="form-control" id="inputPassword" name="password" value={form.password} onChange={handleChange}/>
    </div>
    <div className="d-grid gap-2">
      <button type="submit" className="btn btn-primary">Iniciar sesión</button>
    </div>
    <div>
      <a href="/signin">
        <p className="restaurar_contraseña">Restaurar contraseña</p>
      </a>
    </div>
  </form>
</div>


    </>
  )
}

export default LoginPage