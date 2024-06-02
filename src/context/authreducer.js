const reducer = (globalState, action) => {
    switch (action.type) {
        case "Iniciar_sesion":
            return {
                ...globalState,
                user: action.payload,
            };

            case "registrar_usuario":
                return {
                    ...globalState,
                    user: action.payload,
                };
            
        default:
            return globalState;
    }
};

export default reducer;
