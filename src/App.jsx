import Header from "./components/Header"
import TodoEditor from "./components/TodoEditor"
import TodoList from "./components/TodoList"
import './App.css'
import { useState, useRef } from "react"

const mockData = [
  {
    id: brithday,
    isDone: false,
    content: "생일 파티",
    date: new Date().getTime()
  },
  {
    id: married,
    isDone: false,
    content: "결혼식",
    date: new Date().getTime()
  },
  {
    id: running,
    isDone: false,
    content: "러닝",
    date: new Date().getTime()
  }
]


function App() {

  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos])
  }

  const onUpdate = (targetId, updates) => {

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == targetId
          ? { ...todo, ...updates }
          : todo
      )
    )

  }

  const onDelete=(targetId)=>{
    setTodos(todos.filter((todo)=>todo.id!==targetId))
  }
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App