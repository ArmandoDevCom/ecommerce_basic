import React from 'react'
import { Routes, BrowserRouter as Router, Route, Navigate, } from "react-router-dom"
import HomePage from '../pages/HomePage'
import NavBar from '../components/NavBar'
import ProductListPage from '../pages/ProductListPage'
import ProfilePage from '../pages/ProfilePage'
import CartPage from '../pages/CartPage'
import Footer from '../components/Footer'

const AppRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/catalogo' element={<ProductListPage />} />
            <Route path='/miperfil' element={<ProfilePage />} />
            <Route path='/carrito' element={<CartPage />} />

            <Route path='/*' element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default AppRouter