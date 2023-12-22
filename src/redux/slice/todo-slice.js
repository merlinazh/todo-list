import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    edit: {
      id: null,
      value: '',
      isEdit: false,
    },
    inputValue: '',
  },
  reducers: {
    addTodo(state, action) {
      const { value } = action.payload;
      const newTodo = {
        id: Date.now(),
        value,
        completed: false,
      }
      state.todos = [...state.todos, newTodo];
    },
    deleteTodo(state, action) {
      const { payload } = action;
      state.todos = state.todos.filter((todo) => todo.id !== payload)
    },
    editTodo(state, action) {
      const { id, value } = action.payload;
      state.edit.id = id;
      state.edit.value = value;
    },
    startEditTodo(state, action) {
      const { id, value } = action.payload;
      state.edit.id = id;
      state.edit.value = value;
      state.edit.isEdit = true;
    },
    finishEditTodo(state) {
      const { id, value } = state.edit;
      const editedTodo = state.todos.find((todo) => todo.id === id);
      if(editedTodo) {
        editedTodo.value = value;
        state.edit.id = null;
        state.edit.value = '';
      }
    },
    setIsEdit(state, action) {
      state.edit.isEdit = action.payload;
    },
    cancelEdit(state){
      state.edit.id = null;
      state.edit.value = '';
      state.edit.isEdit = false;
    },
    completeTodo(state, action) {
      const { id } = action.payload;
      const todoComplete = state.todos.find((todo) => todo.id === id);
      if (todoComplete) {
        todoComplete.completed = !todoComplete.completed;
      }
    },
    inputLength(state, action) {
      state.inputLength = action.payload;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    }
  },
});

export const { addTodo, deleteTodo, editTodo, startEditTodo, finishEditTodo, setIsEdit, cancelEdit, completeTodo, inputLength, setInputValue } = todoSlice.actions;
export default todoSlice.reducer;
