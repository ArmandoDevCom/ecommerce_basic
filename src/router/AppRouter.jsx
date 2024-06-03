import { Routes, BrowserRouter as Router, Route, Navigate, } from "react-router-dom"
import HomePage from '../pages/HomePage'
import NavBar from '../components/NavBar'
import ProductListPage from '../pages/ProductListPage'
import ProfilePage from '../pages/ProfilePage'
import CartPage from '../pages/CartPage'
import Footer from '../components/Footer'
import ProductSinglePage from '../pages/ProductSinglePage'
import LoginPage from '../pages/LoginPage'
import SignInPage from '../pages/SignInPage'
import CheckOutPage from '../pages/CheckOutPage'
import { useContext, useEffect } from "react"
import AuthContext from '../context/authcontext'

const AppRouter = () => {

  const {renovarToken, user} = useContext(AuthContext)

  useEffect(() => {
    renovarToken()
  }, [renovarToken])
  

  return (
    <Router>
        <NavBar />
        <Routes>
          {/* Rutas publicas y prvadas */}
            <Route path='/' element={<HomePage />} />
            <Route path='/catalogo' element={<ProductListPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/product/:id' element={<ProductSinglePage />} />

              {user.user_name ? (
                <>
                {/* Rutas privadas */}
                  <Route path='/miperfil' element={<ProfilePage />} />
                </>
              ) : (
                <>
                {/* Rutas publicas */}
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/signin' element={<SignInPage />} />
                </>
              )
            }


            <Route path='/checkout' element={<CheckOutPage />} />

            <Route path='/*' element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default AppRouter