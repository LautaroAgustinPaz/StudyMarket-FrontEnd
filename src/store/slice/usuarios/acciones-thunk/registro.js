import { addUsuario } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"


export const createUsuario = (nuevoUsuario) => async (dispatch) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND

    try {
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(nuevoUsuario)
        }
        const usuarioNuevo = await (handleHttp(url, options))
        dispatch(addUsuario(usuarioNuevo))
    } catch (error) {
        console.error('[Registro acciones-thunk]', error);
        
    }
}