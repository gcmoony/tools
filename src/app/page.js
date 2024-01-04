'use client'
import Item from './components/Item/Item';
import PomoTimer from './components/PomoTimer/PomoTimer';
import RegularForm from './components/RegularForm/RegularForm';


export default function Home() {


  return (
    <main className='text-white p-5 min-h-screen bg-black'>
      <h1 className='text-4xl font-semibold'><span className='inline-block p-1 bg-black text-white'>Tool</span><span className=' p-1 rounded bg-yellow-400 text-black inline-block'>Hub</span></h1>
      <h2 className='text-sm mb-8'>Just what you&apos;re looking for</h2>
      <div className='flex items-center flex-col '>
        <header className='underline text-xl'>Tools</header>
        <ul className='flex flex-col'>
          <li><a className='p-2 block hover:text-yellow-400' href='/tools/Pomo'>Pomodoro Timer</a></li>
          <li><a className='p-2 block hover:text-yellow-400' href='/tools/PasswordGenerator'>Password Generator</a></li>
          {/* <li><a className='p-2 block hover:text-yellow-400' href='#'>To Do List</a></li> */}
        </ul>
      </div>
    </main>
  );
}