import React from 'react'
import TodoNameInput from './Inputs/TodoNameInput'
import PriorityInput from './Inputs/PriorityInput'

function TodoInput({ handleInputChange, inputValue, priority, handleSubmittedForm }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSubmittedForm()
  }

  return (
    <>
      <form className='form-control md:w-[70%] w-full m-auto' onSubmit={(e) => handleSubmit(e)}>

        <h1 className="mt-4 text-center text-success text-2xl">Wprowadź swojego Todosa</h1>
        <div className='mt-4 flex md:flex-row flex-col md:justify-evenly items-center'>
          <div className='mt-4'>
            <TodoNameInput handleInputChange={handleInputChange} inputValue={inputValue} />
          </div>
          <div className='mt-4'>
            <PriorityInput
              priority={priority}
              handleInputChange={handleInputChange}
            >
              Ważny
            </PriorityInput>
          </div>
          <div className='mt-4'>
            <button className="btn btn-outline btn-success w-full">Zapisz</button>
          </div>

        </div>





        <div className="mt-4">

        </div>

      </form>
      <div className='divider'></div>
    </>
  )
}

export default TodoInput