import { NavLink } from "react-router-dom"
import { registerService } from "../services/authServices"
import { useState, useContext } from "react"
import AuthContext from "../context/authcontext"

const initForm = {
  full_name: "",
  user_name: "",
  email: "",
  password: "",
}

const SignInPage = () => {

  const {user, registrarUsuario} = useContext(AuthContext)

  const [form, setForm] = useState(initForm)
  // const [user, setUser] = useState({})

  const handleRegister = async (event) => {
    event.preventDefault()

    await registrarUsuario(form)

    // try {
    //   const resp = await registerService(form)
    //   console.log(resp.data.data)
    //   setUser(resp.data.data)

    // } catch (error) {
    //     console.log(error.response.data.msg)
    // }
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
        <h1>Crea tu cuenta</h1>
        <p>¿Ya tienes cuenta?<a href="/login"> Inicia sesión</a></p>
        <form className="formulario_iniciosesion" onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="inputFullName" className="form-label">Nombre completo</label>
            <input type="text" className="form-control" id="inputFullName" name="full_name" value={form.full_name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="inputUserName" className="form-label">Nombre de usuario</label>
            <input type="text" className="form-control" id="inputUserName" name="user_name" value={form.user_name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="inputEmail" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="inputPassword" name="password" value={form.password} onChange={handleChange} required />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Crear cuenta</button>
          </div>
        </form>
        <section className="row">
          <article className="col">
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </article>
        </section>
      </div>
      
    </>
  )
}

export default SignInPage
