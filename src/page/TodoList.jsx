import './TodoList.css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Form from '../components/Form'
import Filter from '../components/Filter'
import Item from '../components/Item'

export default function TodoList(){
    const todos = useSelector(state => state.todos.todos);
    const [filter, setFilter] = useState('All');

    const filterTodos = todos.filter((todo) => {
        if (filter === 'Active') {
            return !todo.completed;
        }
        if (filter === 'Completed') {
            return todo.completed;
        }
        return true
    });

    return (
        <div>
            <Form text="What’s the plan for today?" inputType="text" placeholder="What to do" inputValue='' maxLength={20}></Form>  
            <div className="todo-list mt-7 ">
                <Filter setFilter={setFilter}></Filter>
                {filterTodos.map(todo => (
                    <Item key={todo.id} id={todo.id} value={todo.value} completed={todo.completed}></Item>
                ))}
            </div>
        </div>
    )
}