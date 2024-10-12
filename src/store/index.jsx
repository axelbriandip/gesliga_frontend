import { configureStore } from '@reduxjs/toolkit';
import userLoggedSlice from './slices/userLogged.slice';

export default configureStore({
    reducer: {
        userLogged: userLoggedSlice
    }
})