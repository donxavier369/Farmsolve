import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    userinfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userinfo')):null
}

const userAuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCredentials:(state,action)=>{
            state.userinfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout:(state)=>{
            state.userinfo = null;
            localStorage.removeItem('userinfo')
        }
    }
})

export const {setCredentials, logout} = userAuthSlice.actions

export default userAuthSlice.reducers;