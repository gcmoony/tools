import { Children, useState } from 'react';

export default function ToDoForm(){
  const [children, setChildren] = useState(
    [{
      id: 12,
      activity: "Pee",
    },
    {
      id: 32,
      activity: "Poop",
    },
    {
      id: 2,
      activity: "Sleep",
    }]
  
  );


  return (
    <div className='bg-slate-800'>
      {
        children.map( child => {
          // if(child.id != children[0].id)
          return <ToDoItem key={child.id} title={child.activity} />
        })
      }
    </div>
  )
}

function DeleteItem(event) {
  alert("You clicked delete")
}

function EditItem(event) {
  alert("You clicked edit");
}


function ToDoItem(prop) {
  
  return (
    
    <div className='grid grid-cols-10 gap-2 opacity-80 hover:outline-t-blue-300 hover:outline hover:opacity-100 py-2 px-2 items-center'>
      <input className='col-span-1 h-5' type='checkbox' />
      <h2 className='col-span-7 text-xl'>{prop.title}</h2>
      <ItemButton itemText="✏️" fun={EditItem}/>
      <ItemButton itemText="🗑️" fun={DeleteItem}/>
    </div>
  )
}

function ItemButton(props) {
  return <button className='w-max rounded-full p-2 hover:bg-blue-600' onClick={props.fun}>{props.itemText}</button>
}