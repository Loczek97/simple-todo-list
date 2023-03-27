import React, { useState, useEffect } from "react";
import "./assets/index.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import PickColor from "./utils/PickColor";
import { v4 as uuidv4 } from 'uuid'
import GetCurrentDate from "./utils/GetCurrentDate";


function App() {
  const [form, setForm] = useState({
    name: "",
    priority: false,
    date: GetCurrentDate()
  });
  const [todos, setTodos] = useState([])
  const [DarkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body")
    body.classList.toggle("bg-gray-100", !DarkTheme)
    body.classList.toggle("bg-black", DarkTheme)
  }, [DarkTheme])


  const chooseThemeColors = () => {
    const themeColors = {
      light: {
        cardColor: "bg-gray-500",
        input: 'bg-white border-info placeholder:text-gray-500 focus:outline-info',
        checkbox: 'checkbox-info',
        textPrimary: "text-info",
        textSecondary: "text-black",
        badge: 'bg-info text-black'
      },
      dark: {
        cardColor: "bg-gray-700/[0.825]",
        checkbox: 'checkbox-success',
        input: 'bg-transparent border-success text-white focus:outline-success',
        textPrimary: "text-success",
        textSecondary: "text-white",
        badge: 'badge-success'
      }
    }
    if (DarkTheme) return themeColors.dark
    return themeColors.light
  }

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
    else if (name === "todoDateValue") {
      let newForm = { ...form, date: value }
      setForm(newForm)
    }
    else if (name === "themeToggle") {
      setDarkTheme(!DarkTheme)
    }

  };

  const handleSubmittedForm = () => {
    const currDate = GetCurrentDate()
    const { name, priority, date } = form

    if (name.length > 0 && date >= currDate) {
      let styles = PickColor()
      let newTodo = { id: uuidv4(), name, priority, date, currDate, done: false, styles }
      let newTodos = [...todos, newTodo]
      setTodos(newTodos)
      setForm({ name: "", priority: false, date: GetCurrentDate(), done: false })
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

  return (
    <div className="flex flex-col h-screen relative">
      <TodoForm
        DarkTheme={DarkTheme}
        themeColors={chooseThemeColors()}
        form={form}
        handleInputChange={handleInputChange}
        handleSubmittedForm={handleSubmittedForm}
        handleDeleteDoneTodos={handleDeleteDoneTodos}
      />
      <TodoList
        handleTodoDone={handleTodoDone}
        todos={todos}
        DarkTheme={DarkTheme}
        themeColors={chooseThemeColors()}
      />
    </div>
  );
}

export default App;
