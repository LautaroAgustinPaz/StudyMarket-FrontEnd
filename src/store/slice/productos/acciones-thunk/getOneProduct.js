import { setProducto } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"


export const getOneProduct = (_id) => async (dispatch) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND 
    //console.log('getOneProduct => id', _id);
    
    try {
        const data = await handleHttp(`${url}productos/${_id}`)
        
        dispatch(setProducto(data))
    } catch (error) {
        console.error("[getOneProduct]", error); 
    }
}