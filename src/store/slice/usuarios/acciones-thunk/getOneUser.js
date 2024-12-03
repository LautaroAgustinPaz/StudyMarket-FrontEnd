import { setUsuarios } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"

export const getOneUser = (id) => async (dispatch) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND
    //console.log('[getOneUser] url', url);

    try {
        const data = await handleHttp(`${url}usuarios/getone/${id}`)
        //console.log('[getOneUser] data', data);
        dispatch(setUsuarios(data))
        
    } catch (error) {
        console.error("[getOneUser]", error); 
    }
}