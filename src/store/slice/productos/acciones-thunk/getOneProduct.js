import { setProducto } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"


export const getOneProduct = (id) => async (dispatch) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND 

    try {
        const data = await handleHttp(`${url}productos/${id}`)
        
        dispatch(setProducto(data))
    } catch (error) {
        console.error("[getOneProduct]", error); 
    }
}