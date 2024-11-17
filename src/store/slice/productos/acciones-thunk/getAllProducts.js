import { setProductos } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"

export const getAllProducts = () => async ( dispatch ) => {
    const url = import.meta.env.VITE_ENDOPOINT_BACKEND

    try {
        const data = await handleHttp(url)
        dispatch(setProductos(data))
        
    } catch (error) {
        console.error("[getAllProducts]", error);  
    }
}