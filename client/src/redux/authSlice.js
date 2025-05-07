import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            localStorage.setItem('token', action.payload.token);
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload.user;
            state.error = null;
        },
        loginFail: (state, action) => {
            localStorage.removeItem('token');
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.user = null;
            state.error = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem('token');
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.user = null;
            state.error = null;
        },
        userLoaded: (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        },
        authError: (state, action) => {
            localStorage.removeItem('token');
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.user = null;
            state.error = action.payload;
        }
    }
});

export const { loginSuccess, loginFail, logout, userLoaded, authError } = authSlice.actions;

export default authSlice.reducer; 