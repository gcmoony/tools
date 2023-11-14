'use client'
import Image from 'next/image'
import TicketQueue from './components/TicketQueue/TicketQueue';
import ToDoForm from './components/ToDoForm/ToDoForm';
import PomoTimer from './components/PomoTimer/PomoTimer';


export default function Home() {


  return (
    <main>
      <h1 className='text-center font-bold text-3xl'>Welcome!</h1>
      <h2  className='text-center text-xl mb-10'>Below is your work area</h2>
      <div className='outline-slate-500 outline-dashed m-3'>
        {/* Add your component below this line */}
          <PomoTimer />
        {/* Add your component above this line */}
      </div>
    </main>
  );
}