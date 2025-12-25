import { createSlice, nanoid} from '@reduxjs/toolkit'

const initialState ={
    todos: [{id:1, text:"First Todo "}]
}

export const todoSlicer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state, action) => {
            const todo ={
                id : nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) =>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        updateTodo: (state, action) =>{
            const todo ={
                id: action.payload,
                text:action.payload
            }
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            state.todos.push(todo)
        }
    }
})

export const {addTodo, removeTodo} = todoSlicer.actions;
export default todoSlicer.reducer