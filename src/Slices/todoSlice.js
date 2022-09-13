import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
    const localTodoList = window.localStorage.getItem('todoList');
    if (localTodoList) {
        return JSON.parse(localTodoList)
    }
    window.localStorage.setItem('todoList', JSON.stringify([]));
    return [];
};

const getIntialTheme = () => {
    const theme = window.localStorage.getItem('todoTheme');
    if (theme) {
        return theme
    }
    window.localStorage.setItem('todoTheme', 'light');
    return 'light'
};

const initialValue = {
    todoList: getInitialTodo(),
    todoFilter: 'all',
    todoTheme: getIntialTheme()
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            const todoList = window.localStorage.getItem('todoList');
            if (todoList) {
                const todoListArr = JSON.parse(todoList)
                todoListArr.push({
                    ...action.payload,
                });
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr))
            } else {
                window.localStorage.setItem('todoList', JSON.stringify([{...action.payload}]))
            }
        },
        deleteTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todoList');
            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach((item, index)=>{
                    if (item.id === action.payload) {
                        todoListArr.splice(index, 1);
                    }
                });
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
                state.todoList = todoListArr;
            }
        },
        updateTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todoList')
            if (todoList) {
                const todoListArr = JSON.parse(todoList)
                todoListArr.forEach((item, index)=>{
                    if (item.id === action.payload.id) {
                        todoListArr[index] = action.payload;
                    }
                });
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr))
                state.todoList = todoListArr;
            }
        },
        updateFilter: (state, action) => {
            state.todoFilter = action.payload;
        },
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

export const { addTodo, deleteTodo, updateTodo, updateFilter, updateTheme } = todoSlice.actions;
export default todoSlice.reducer;