import React from 'react'
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

const AppRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalogo' element={<ProductListPage />} />
            <Route path='/miperfil' element={<ProfilePage />} />
            <Route path='/carrito' element={<CartPage />} />
            <Route path='/product/:id' element={<ProductSinglePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/checkout' element={<CheckOutPage />} />

            <Route path='/*' element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default AppRouter