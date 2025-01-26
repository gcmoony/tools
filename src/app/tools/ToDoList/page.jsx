"use client"
import ToDoForm from "@/app/components/ToDoForm/ToDoForm"

export default function ToDoList() {
  return (
    <main className=' mt-8 min-h-screen max-w-screen-xl mx-auto'>
      <h2 className='text-center text-5xl pb-8'>Your To-Do List</h2>
      {/* Add your component below this line */}
      <ToDoForm />
      {/* Add your component above this line */}
    </main>
  )
}
