import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1';

const initialState = {
    userLogged: null,
    usersList: []
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserLogged: (state, action) => {
            state.userLogged = action.payload;
            // return action.payload
        },
        setUsers: (state, action) => {
            state.usersList = action.payload;
            // return action.payload
        }
    }
})

export const getUsersThunk = () => (dispatch) => {
    return axios.get(`${API_URL}/users`)
        .then(res => dispatch(setUsers(res.data.data.users)))
}

export const { setUserLogged, setUsers } = userSlice.actions;

export default userSlice.reducer;