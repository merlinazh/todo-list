import React from 'react';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, cancelEdit, finishEditTodo, inputLength, setInputValue } from '../redux/slice/todo-slice'
import './component.css'

export default function Form (props){
    const dispatch = useDispatch();
    const { id, value, isEdit } = useSelector((state) => state.todos.edit);
    const lengthInput = useSelector((state) => state.todos.inputLength) || 0;

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
            dispatch(inputLength(0));
        }else{
            alert('Input cannot be empty')
        }
    };

    const handleCancelEdit = () => {
        dispatch(cancelEdit());
        dispatch(setInputValue(''));
        dispatch(inputLength(0))
    }

    const handleInputLength = (event) => {
        const inputText = event.target.value;
        dispatch(inputLength(inputText.length))
    }
    return (
        <>
            <div className="todo text-center mt-16 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h1 className='text-4xl'>{props.text}</h1>
                <form onSubmit={addTodos} className='flex justify-center mt-5 text-xl'>
                    <input type={props.inputType} name='todoInput' className="input-todo block w-full p-2" 
                    placeholder={props.placeholder} defaultValue={isEdit ? value : props.inputValue}
                    onChange={handleInputLength}
                    maxLength={20} />
                    {isEdit ? (
                        <div className='button-edit flex'>
                            <button type='submit' className='btn-todo bg-black text-white p-2 ml-2 px-5'>Edit</button>
                            <button type='button' onClick={handleCancelEdit} className='btn-todo bg-gray-500 text-white p-2 ml-2 px-5'>Cancel</button>
                        </div>
                    ) : (
                        <button type='submit' className='btn-todo bg-black text-white p-2 ml-2 px-5'>Add</button>
                    )}
                    
                </form>
                <div className='text-left text-sm text-gray-500 pt-2'>
                    <p>{lengthInput}/{props.maxLength}</p> 
                </div>
            </div>
        </>
    )
}

Form.propTypes = {
    inputValue: PropTypes.string.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    inputType: PropTypes.string,
    maxLength: PropTypes.number
}