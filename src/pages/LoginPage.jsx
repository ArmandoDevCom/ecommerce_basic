// import { loginService } from "../services/authServices"
import { useState, useContext } from "react";
import AuthContext from "../context/authcontext"

const initForm = {
  user_name: "",
  password: "",
}

const LoginPage = () => {
  const [form, setForm] = useState(initForm)
  const {user, iniciarSesion} = useContext(AuthContext)
  // const [user, setUser] = useState({})

  const handleIniciarSesion = async (e) => {
    e.preventDefault()

    await iniciarSesion(form)

    // console.log(form)

    // try {
    //   const resp = await loginService(form)
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
    {/* <div>
      <a href="/signin">
        <p className="restaurar_contraseña">Restaurar contraseña</p>
      </a>
    </div> */}
  </form>
  {/* <section className="row">
          <article className="col">
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </article>
        </section> */}
</div>


    </>
  )
}

export default LoginPage