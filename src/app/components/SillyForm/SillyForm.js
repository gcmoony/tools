export default function SillyForm() {
  return (
  <form className='border-2 border-cyan-800 p-3 flex flex-col gap-5'>

        <fieldset className='border-2 p-5 flex flex-col gap-3'>
          <h2 className="text-center text-xl">About you</h2>

        <div className='flex justify-between'>
          <label for="name">What is your name?</label>
          <input className='bg-slate-600' id='name' type="text" />
        </div>

        <div className='flex justify-between'>
          <label for="age">What is your age?</label>
          <input className='bg-slate-600' id='age' type="number" min={13} max={200}/>
        </div>
        </fieldset>

        <fieldset className='border-2 p-5 flex flex-col gap-3'>
          <h2 className=" text-center text-xl">Your interests</h2>
          <div className='flex flex-col gap-5'>
            <label className='text-center block' for="likes">Pick things you like doing (up to 3).</label>
            <fieldset className='grid grid-cols-4 gap-y-3'>
              <input className="col-span-1" id='problem-solving' type='checkbox' />
              <label className='col-span-3' for="problem-solving">Problem Solving</label>

              <input className="col-span-1" id='communication' type='checkbox' />
              <label className='col-span-3' for="communication">Communication</label>

              <input className="col-span-1" id='team-building' type='checkbox' />
              <label className='col-span-3' for="team-building">Team-building</label>

              <input className="col-span-1" id='planning' type='checkbox' />
              <label className='col-span-3' for="planning">Planning</label>

              <input className="col-span-1" id='sleeping' type='checkbox' />
              <label className='col-span-3' for="sleeping">Sleeping</label>
            </fieldset>
            
        </div>
        </fieldset>
        
      </form>
  );
}