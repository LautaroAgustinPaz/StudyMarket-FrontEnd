import { setUsuarios } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"

export const getOneUser = (id) => async (dispatch) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND

    try {
        const data = await handleHttp(`${url}usuarios/${id}`)
        dispatch(setUsuarios(data))
        console.log('[getOneUser]', data);
        
    } catch (error) {
        console.error("[getOneUser]", error); 
    }
}