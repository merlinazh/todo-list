import React from "react"
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, startEditTodo, completeTodo } from "../redux/slice/todo-slice";

export default function Item (props) {
    const dispatch = useDispatch();
    const editedTodo = useSelector((state) =>  state.todos.todos.find((todo) => todo.id === props.id))
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    }
    const handleEditTodo = (id, value) => {
        dispatch(startEditTodo({ id, value }));
    }

    const handleComplete = (id) => {
        dispatch(completeTodo({id}));
    }
    return(
        <div className="todo-content mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="item-todo bg-white mt-5 w-full flex items-center">
                <label className="flex items-center ml-5">
                    <input className="completed" type="checkbox" checked={props.completed} onChange={() => handleComplete(props.id, props.complete)}/>
                    <span></span>
                </label>     
                <p className="p-4" style={{
                    textDecoration: props.completed ? 'line-through' : 'none',
                    textDecorationThicakness: props.completed ? '3px' : 'initial',
                    }}>{editedTodo ? editedTodo.value : props.value}</p>
                <div className="icon-items flex justify-end flex-grow mr-4">
                    <button onClick={() => handleEditTodo (props.id, props.value)}><i className="material-icons mr-4" style={{display: props.completed ? 'none' : 'block'}}>edit</i></button>
                    <button onClick={() => handleDeleteTodo(props.id)}><i className="material-icons">delete</i></button>
                </div>
            </div>
        </div>
        
    )
}

Item.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired
}