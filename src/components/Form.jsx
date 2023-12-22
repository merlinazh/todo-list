import React from 'react';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, cancelEdit, finishEditTodo } from '../redux/slice/todo-slice'
import './component.css'

export default function Form (props){
    const dispatch = useDispatch();
    const { id, value, isEdit } = useSelector((state) => state.todos.edit);

    const addTodos = (event) => {
        event.preventDefault();
        const inputTodo = event.target.elements.todoInput.value.trim();

        if(inputTodo) {
            if(isEdit) {
                dispatch(editTodo({ id, value: inputTodo }));
                dispatch(finishEditTodo());
                dispatch(cancelEdit());
            }else{
                dispatch(addTodo({ value: inputTodo }));
            }
            event.target.reset();
        }else{
            alert('Input cannot be empty')
        }
    };

    const handleCancelEdit = () => {
        dispatch(cancelEdit());
    }
    return (
        <>
            <div className="todo text-center mt-16 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h1 className='text-4xl'>{props.text}</h1>
                <form onSubmit={addTodos} className='flex justify-center mt-5 text-xl'>
                    <input type={props.inputType} name='todoInput' className="input-todo block w-full p-2" placeholder={props.placeholder} defaultValue={isEdit? value: props.inputValue} />
                    {isEdit ? (
                        <div className='button-edit flex'>
                            <button type='submit' className='btn-todo bg-black text-white p-2 ml-2 px-5'>Edit</button>
                            <button type='button' onClick={handleCancelEdit} className='btn-todo bg-gray-500 text-white p-2 ml-2 px-5'>Cancel</button>
                        </div>
                    ) : (
                        <button type='submit' className='btn-todo bg-black text-white p-2 ml-2 px-5'>Add</button>
                    )}
                    
                </form>
            </div>
        </>
        
        
    )
}

Form.propTypes = {
    inputValue: PropTypes.string.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    inputType: PropTypes.string,
}