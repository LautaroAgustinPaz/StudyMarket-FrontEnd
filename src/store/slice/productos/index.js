import { createSlice } from "@reduxjs/toolkit";

// Slice productos
export const ProdcutosSlice = createSlice(  //  recibe un OBJ cpn su config con:
    {
        name: 'productos',
        initialState: {
            productos: null // la lista de productos
        }
    }
)

// Exportamos el reducer como funcionalidad principal de este modulo
export default ProdcutosSlice.reducer