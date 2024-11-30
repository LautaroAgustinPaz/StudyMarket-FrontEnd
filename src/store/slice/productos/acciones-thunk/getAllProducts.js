import { setProductos } from ".."
import handleHttp from "../../../../utils/handle-peticionhttp"
//import data from "../../../../data/data.json"
//import { pedirDatos } from "../../../../helpers/pedirDatos"

export const getAllProducts = () => async ( dispatch ) => {
    const url = import.meta.env.VITE_ENDPOINT_BACKEND 

    
    try {
        // Arreglo de bug productos (elegir)
         const data = await handleHttp(url + "productos/")
        /* const data = await pedirDatos(url) */
        dispatch(setProductos(data))
        //console.log("[getAllProducts]", data);
        
        
    } catch (error) {
        console.error("[getAllProducts]", error);  
    }
}
