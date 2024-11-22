import { setProducto } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"


export const getOneProduct = (id) => async (dispatch) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND 
    console.log(`${url}/productos/${id}`)
    

    try {
        const data = await handleHttp(`${url}productos/${id}`)
        console.log(data);
        

        dispatch(setProducto(data))
    } catch (error) {
        console.error("[getOneProduct]", error); 
    }
}