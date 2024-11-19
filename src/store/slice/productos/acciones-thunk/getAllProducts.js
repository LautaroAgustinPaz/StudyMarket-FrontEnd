import { setProductos } from ".."
// import handleHttp from "../../../../utils/handle-peticionhttp"
import data from "../../../../data/data.json"
import { pedirDatos } from "../../../../helpers/pedirDatos"

export const getAllProducts = () => async ( dispatch ) => {
    const url = data

    console.log(data)

    try {
        // Arreglo de bug productos (elegir)
        // const data = await handleHttp(url)
        const data = await pedirDatos(url)
        dispatch(setProductos(data))
        
    } catch (error) {
        console.error("[getAllProducts]", error);  
    }
}
