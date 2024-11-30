import { removeProducto } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"


export const deleteProducto = (_id) => async (dispatch) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND 
    const urlBorrado = (`${url}productos/` + _id)
    try {
        const options = {
            method: 'DELETE'
        }
        console.log(urlBorrado);
        
        const productoEliminado = await handleHttp(urlBorrado, options)
        console.log('[deleteProducto]', productoEliminado);
        dispatch(removeProducto(productoEliminado))
        
    } catch (error) {
        console.error('[deleteProducto]', error);
        
    }
}