// Importamos la data -> data.json
import data from "../data/data.json";

export const pedirDatos = () => {   // exportamos y resolvemos, si se resuelve esta promesa, quen os devuelva la data(info)

    return new Promise((resolve, reject) =>  {
        resolve(data)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {

        const item = data.find((elemento) => elemento.id === id ); // Busca el elemento que coincida con su id

        if (item) {
            resolve(item) // Nos devuelva el item (Elemento con el ID Seleccionado)
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}