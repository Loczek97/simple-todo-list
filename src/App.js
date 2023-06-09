import React, { useState, useEffect } from "react";
import "./assets/index.css";
import GetCurrentDate from "./utils/GetCurrentDate";
import chooseTheme from "./utils/chooseTheme";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { v4 as uuidv4 } from 'uuid'
import GetCurrentHour from "./utils/GetCurrentHour";



function App() {
  const [form, setForm] = useState({
    name: "",
    priority: false,
    date: GetCurrentDate(),
    time: GetCurrentHour(),
  });
  const [todos, setTodos] = useState([])
  const [DarkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body")
    body.classList.toggle("bg-gray-100", !DarkTheme)
    body.classList.toggle("bg-black", DarkTheme)
  }, [DarkTheme])


  const handleInputChange = (e) => {
    const { name, value } = e.target
    const { priority } = form

    if (name === "priority") {
      let newForm = { ...form, priority: !priority }
      setForm(newForm)
    }
    else if (name === "name") {
      let newForm = { ...form, name: value }
      setForm(newForm)
    }
    else if (name === "date") {
      let newForm = { ...form, date: value }
      setForm(newForm)
    }
    else if (name === "time") {
      let newForm = { ...form, time: value }
      setForm(newForm)
    }
    else if (name === "themeToggle") {
      setDarkTheme(!DarkTheme)
    }

  };

  const handleSubmittedForm = () => {
    const currDate = GetCurrentDate()
    const { name, priority, date, time } = form

    if (name.length > 0 && date >= currDate) {
      let newTodo = { id: uuidv4(), name, priority, date, currDate, time, done: false }
      let newTodos = [...todos, newTodo]
      setTodos(newTodos)
      setForm({ name: "", priority: false, date: GetCurrentDate(), time: GetCurrentHour(), done: false })
    }
    else {
      alert("Wprowadź poprawne dane")
    }
  };

  const handleTodoDone = (todo) => {
    const { id } = todo
    let newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      }
      return todo
    })
    setTodos(newTodos)
  }


  const handleDeleteDoneTodos = () => {
    let newTodos = todos.filter((todo) => !todo.done)
    setTodos(newTodos)
  }

  const colorTheme = chooseTheme(DarkTheme)

  return (
    <div className="min-h-screen">
      <TodoForm
        DarkTheme={DarkTheme}
        themeColors={colorTheme}
        form={form}
        handleInputChange={handleInputChange}
        handleSubmittedForm={handleSubmittedForm}
        handleDeleteDoneTodos={handleDeleteDoneTodos}
      />
      <TodoList
        handleTodoDone={handleTodoDone}
        todos={todos}
        DarkTheme={DarkTheme}
        themeColors={colorTheme}
      />
    </div>
  );
}

export default App;
