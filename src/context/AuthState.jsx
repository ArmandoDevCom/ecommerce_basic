import React, { useCallback, useReducer } from "react";
import PropTypes from "prop-types";
import AuthContext from "./authcontext";
import authReducer from "./authreducer";
import { loginService, registerService, renovarTokenService } from "../services/authServices";

const initialState = {
    user: {},
};

const AuthState = ({ children }) => {
    const [globalState, dispatch] = useReducer(authReducer, initialState);

    // console.log("AuthState rendered", globalState);

    const iniciarSesion = async (form) => {
        try {
            const resp = await loginService(form);
            // console.log("Login successful", resp.data.data);
            dispatch({
                type: "Iniciar_sesion",
                payload: resp.data.data,
            });

            localStorage.setItem("token", resp.data.token)
        } catch (error) {
            console.log(error.response?.data?.msg || error.message);
        }
    };

    const registrarUsuario = async (form) => {
        try {
            const resp = await registerService(form);
            dispatch({
                type: "registrar_usuario",
                payload: resp.data.data,
            });

            localStorage.setItem("token", resp.data.token)

        } catch (error) {
            console.log(error.response?.data?.msg || error.message);
        }
    };

    const renovarToken = useCallback ( async () => {
        try {
            const resp = await renovarTokenService();
            // console.log("Login successful", resp.data.data);
            dispatch({
                type: "Iniciar_sesion",
                payload: resp.data.data,
            });

            localStorage.setItem("token", resp.data.token)

        } catch (error) {
            console.log(error.response?.data?.msg || error.message);
        }
    }, [])

    const logout = () => {
        dispatch({
          type: "LOGOUT",
        });
    
        localStorage.removeItem("token");
      };

    return (
        <AuthContext.Provider
            value={{
                user: globalState.user,
                iniciarSesion,
                registrarUsuario,
                renovarToken,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthState.propTypes = {
    children: PropTypes.node,
};

export default AuthState;
