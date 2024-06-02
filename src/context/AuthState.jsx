import React, { useReducer } from "react";
import PropTypes from "prop-types";
import AuthContext from "./authcontext";
import authReducer from "./authreducer";
import { loginService, registerService } from "../services/authServices";

const initialState = {
    user: null,
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
        } catch (error) {
            console.log(error.response?.data?.msg || error.message);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user: globalState.user,
                iniciarSesion,
                registrarUsuario,
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
