import { createSlice } from "@reduxjs/toolkit";

const getIntialTheme = () => {
    const theme = window.localStorage.getItem('todoTheme');
    if (theme) {
        return theme
    }
    window.localStorage.setItem('todoTheme', 'light');
    return 'light'
};

const initialValue = {
    todoTheme: getIntialTheme()
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialValue,
    reducers: {
        updateTheme: (state, action) => {
            if (action.payload === 'light') {
                window.localStorage.setItem('todoTheme', 'dark')
                state.todoTheme = 'dark';
            } else {
                window.localStorage.setItem('todoTheme', 'light')
                state.todoTheme = 'light';
            }
        }
    }
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;