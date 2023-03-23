export default function CalcHowMuchDone(todos) {
    let doneTodos = todos.filter(todo => todo.done === true).length
    let allTodos = todos.length

    return { doneTodos: doneTodos, allTodos: allTodos }
}
