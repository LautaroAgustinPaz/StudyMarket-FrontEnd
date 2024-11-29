import { addProducto } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"

export const createProducto = (nuevoProducto) => async (dispatch) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND
    const urlProduct = (`${url}productos/cargar-producto`)
    /* delete nuevoProducto.precio */

    try {
        const options = {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(nuevoProducto)
        }

        const productoNuevo = await handleHttp(urlProduct, options)
        console.log('[createProducto]', productoNuevo);
        

        dispatch(addProducto(productoNuevo))
    } catch (error) {
        console.error('[CreateProducto]', error); 
        throw new Error("CreateProducto");
        
    }
}