import React, { useState, useEffect } from "react";
import "./assets/index.css";
import TodoForm from "./components/TodoForm/TodoForm";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
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
    const body = document.querySelector("body");
    body.classList.toggle("bg-neutral", DarkTheme);
  }, [DarkTheme]);



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
    <>
      <ThemeSwitch DarkTheme={DarkTheme} handleInputChange={handleInputChange} />
      <TodoForm
        DarkTheme={DarkTheme}
        form={form}
        handleInputChange={handleInputChange}
        handleSubmittedForm={handleSubmittedForm}
      />
      <TodoList
        handleDeleteDoneTodos={handleDeleteDoneTodos}
        handleTodoDone={handleTodoDone}
        todos={todos}
        DarkTheme={DarkTheme}
      />
    </>
  );
}

export default App;
