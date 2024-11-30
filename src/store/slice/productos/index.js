import { createSlice } from "@reduxjs/toolkit";

export const productosSlice = createSlice(  
    {
        name: 'productos',
        initialState: {
            producto: null,
            productos: []
        },
        reducers: {
            setProductos: (state, action) => {
                state.productos = action.payload
            },
            setProducto: (state, action) => {
                state.producto = action.payload
            },
            addProducto: (state, action) => {
                state.productos = [...state.productos, action.payload]
            },
            removeProducto: (state, action) => {
                const id = action.payload._id
                const nuevoEstadoProductos = state.productos.filter(prod => prod._id !== id)
                state.productos = nuevoEstadoProductos
            }
        }
    }
)

export const {
    setProductos,
    setProducto,
    addProducto,
    removeProducto
} = productosSlice.actions


export default productosSlice.reducer