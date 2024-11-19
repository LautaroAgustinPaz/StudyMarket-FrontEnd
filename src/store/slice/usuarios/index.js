import { createSlice } from "@reduxjs/toolkit";

export const usuariosSlice = createSlice(
    {
        name:'usuarios',
        initialState: {
            usuarios: null,
        },
        reducers: {
            setUsuarios: (state, action) => {
                state.usuarios = action.payload
            },
            addUsuario: (state, action) => {
                state.usuarios = action.payload
            }
        }
    }
)

export const {setUsuarios, addUsuario} = usuariosSlice.actions
export default usuariosSlice.reducer