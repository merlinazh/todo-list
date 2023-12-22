import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoList from './page/TodoList'

function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<TodoList></TodoList>}/>
          <Route path='/active' element={<TodoList></TodoList>}/>
          <Route path='/completed' element={<TodoList></TodoList>}/>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
