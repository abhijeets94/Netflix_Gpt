import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        addUser: (state, actions)=> {
            state.user = actions.payload
        },
        removeUser: (state)=> {
            state.user = null
        }
    }
})

export const {addUser, removeUser} =  user.actions
export default user.reducer