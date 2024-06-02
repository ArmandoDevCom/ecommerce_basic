import React from "react"
import AppRouter from "./router/AppRouter"
import AuthState from "./context/AuthState"
import ProductState from "./context/ProductState"

const App = () => {
  return (
    
      <AuthState>
        <ProductState>
          <AppRouter />
        </ProductState>
      </AuthState>
   
  )
}

export default App