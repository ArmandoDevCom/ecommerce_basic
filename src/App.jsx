import React from "react"
import AppRouter from "./router/AppRouter"
import AuthState from "./context/AuthState"
import ProductState from "./context/ProductState"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

const App = () => {
  return (
    
      <AuthState>
        <PayPalScriptProvider options={{clientId: "AedOVjjE0ntq-uE05N3SUxZDL0UTrVgsihawFKgH_EZk1lnIObbJqYdGhmcwhgkOCQVS2_tWV-rk8HbX"}}>
        <ProductState>
          <AppRouter />
        </ProductState>
        </PayPalScriptProvider>
      </AuthState>
   
  )
}

export default App