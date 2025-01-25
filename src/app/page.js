"use client"
import Item from "./components/Item/Item"
import PomoTimer from "./components/PomoTimer/PomoTimer"
import RegularForm from "./components/RegularForm/RegularForm"

export default function Home() {
  return (
    <main className=' p-5 min-h-screen'>
      <div className='flex items-center flex-col '>
        <header className='underline text-xl'>Tools</header>
        <ul className='flex flex-col'>
          <li>
            <a
              className='p-2 block hover:text-yellow-400'
              href='/tools/Pomo'
            >
              Pomodoro Timer
            </a>
          </li>
          <li>
            <a
              className='p-2 block hover:text-yellow-400'
              href='/tools/PasswordGenerator'
            >
              Password Generator
            </a>
          </li>
          {/* <li><a className='p-2 block hover:text-yellow-400' href='#'>To Do List</a></li> */}
        </ul>
      </div>
    </main>
  )
}
