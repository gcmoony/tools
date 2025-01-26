import { Children, useState } from "react"

export default function ToDoForm() {
  const [children, setChildren] = useState([
    {
      id: 12,
      activity: "Sleep",
    },
    {
      id: 32,
      activity: "Nap",
    },
    {
      id: 2,
      activity: "Sleep again",
    },
  ])

  return (
    <div className='bg-slate-800'>
      {children.map((child) => {
        return (
          <ToDoItem
            key={child.id}
            title={child.activity}
          />
        )
      })}
    </div>
  )
}

function DeleteItem(event) {
  event.target.parentNode.remove()
}

function EditItem(event) {
  const inputItem = event.target.parentNode.children[1]
  inputItem.disabled = false
  inputItem.focus()
}

function stopEdit(event) {
  event.target.disabled = true
}

function markAsCompleted(event) {
  const checkbox = event.target
  const listItem = checkbox.parentNode
  const listItemText = listItem.children[1]
  const markComplete = () => {
    listItem.classList.add("bg-slate-900")
    listItemText.classList.add("line-through")
  }
  const markIncomplete = () => {
    listItem.classList.remove("bg-slate-900")
    listItemText.classList.remove("line-through")
  }
  checkbox.checked ? markComplete() : markIncomplete()
}

function onChange(event) {
  // TODO: update state
}

function ToDoItem(prop) {
  return (
    <div className='grid grid-cols-10 gap-2 opacity-80 hover:outline-t-blue-300 hover:outline hover:opacity-100 py-2 items-center'>
      <input
        className='col-span-1 h-5'
        type='checkbox'
        onClick={(e) => markAsCompleted(e)}
      />
      <input
        type='text'
        placeholder={prop.title}
        disabled
        className='col-span-7 bg-transparent'
        onChange={(e) => onChange(e)}
        onBlur={(e) => stopEdit(e)}
        onKeyDown={(e) => e.key === "Enter" && (e.target.disabled = true)}
      />
      <ItemButton
        itemText='✏️'
        fun={(e) => EditItem(e)}
      />
      <ItemButton
        itemText='🗑️'
        fun={(e) => DeleteItem(e)}
      />
    </div>
  )
}

function ItemButton(props) {
  return (
    <button
      className='w-max rounded-full p-2 hover:bg-blue-600'
      onClick={props.fun}
    >
      {props.itemText}
    </button>
  )
}
