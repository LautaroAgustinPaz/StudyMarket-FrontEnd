import { addUsuario } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"

export const createUsuario = (nuevoUsuario) => async (dispatch) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND
    const urlUser = (`${url}usuarios/register`)
    //delete nuevoUsuario.id
    console.log(urlUser);
    

    try {
        const options = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(nuevoUsuario)
        }
        
        const usuarioNuevo = await handleHttp(urlUser, options)
        console.log(usuarioNuevo);

        dispatch(addUsuario(usuarioNuevo))
    } catch (error) {
        console.error('[CreateUsuario]', error); 
        
    }
}