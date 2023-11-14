import { useState } from 'react';
import RegularButton from '../RegularButton/RegularButton';

export default function RegularForm() {
  const [formVal, setFormVal] = useState("N/A");
  const [formSub, setFormSub] = useState("");

  function handleState(event) {
    if(event.target.value == "")
      setFormVal("N/A")
    else
      setFormVal(event.target.value)
  }

  function updateState(event) {
    event.preventDefault();
    setFormSub(formVal);
  }
  
  return (
    <div>
      <div className=''>
        <span className='block'>This is the current input:</span>
        <span>{formVal}</span>
      </div>

      <form 
        className='p-5 flex flex-row gap-2 items-center'
        onSubmit={updateState} >
        <input className='text-lg text-black p-1'  onChange={handleState}/>
        <RegularButton type='submit' buttonText="Wow"/>
      </form>

      

      <div>
        <span className='block'>This is what you have submitted:</span>
        <span>{formSub}</span>
      </div>
    </div>
  );
}