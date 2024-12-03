import { ingresar } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"


export const login = (usuario) => async (dispatch) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND
    const urlUser = (`${url}usuarios/login`)
    try {
        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(usuario)
        }

        const usuarioLogueado = await handleHttp(urlUser, options)
        console.log('[login]', usuarioLogueado);
        dispatch(ingresar(usuarioLogueado))
        
    } catch (error) {
        console.error('[login]', error);
        
    }
}