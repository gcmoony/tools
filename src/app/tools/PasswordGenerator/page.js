"use client"

import { useState } from "react"
const tempPass = "Don't Use This As A Password LOL"

export default function PasswordGeneratorPage() {
  const [passLen, setPassLen] = useState(15)
  const [validCheck, setValidCheck] = useState(true)
  const [genPass, setGenPass] = useState(tempPass)

  function handleChange(e) {
    setPassLen(e.target.value)
  }

  function generatePasswordHelper(passType, passLen, charList) {
    let newPass = ""
    for (let i = 0; i < passLen; i++) {
      newPass += charList[Math.floor(Math.random() * charList.length)]
    }
    setGenPass(newPass)
  }

  function generatePassword(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())

    let charList = ""
    if (formJson.numbers) {
      charList += formJson.numbers
    }
    if (formJson.atoz) {
      charList += formJson.atoz
    }
    if (formJson.AtoZ) {
      charList += formJson.AtoZ
    }
    if (formJson.symbols) {
      charList += formJson.symbols
    }

    if (charList.length > 1) {
      setValidCheck(true)
      generatePasswordHelper(formJson.pwType, formJson.passlen, charList)
    } else {
      setValidCheck(false)
    }
  }

  async function copyToClip() {
    try {
      await navigator.clipboard.writeText(genPass)
    } catch (e) {}
  }

  return (
    <main className='p-10  min-h-screen '>
      <h1 className='text-center font-semibold text-4xl'>Password Generator</h1>
      <h2 className='mb-5 text-center opacity-75'>
        Secure your accounts with stronger passwords.
      </h2>
      <div className=' text-center bg-slate-800 rounded mb-4 text-slate-500 break-words text-2xl p-4'>
        {genPass != tempPass ? genPass : "Generate a password"}
      </div>
      <form
        className='flex flex-col gap-2 sm:gapy-4 sm:grid sm:grid-cols-2'
        method='post'
        onSubmit={generatePassword}
      >
        <div className='hidden flex justify-center'>
          <fieldset>
            <legend className='text-xl'>Type of password</legend>
            <div className='mb-4'>
              <input
                defaultChecked={true}
                type='radio'
                name='pwType'
                id='password'
                value='password'
                required
              />
              <label
                className='pl-2'
                htmlFor='password'
              >
                Password
              </label>
              <br className='m-2' />
              <input
                type='radio'
                name='pwType'
                id='passphrase'
                value='passphrase'
              />
              <label
                className='pl-2'
                htmlFor='passphrase'
              >
                Passphrase
              </label>
            </div>
          </fieldset>
        </div>

        <div className=' flex justify-center'>
          <fieldset className=''>
            <legend className='text-lg '>Types of characters</legend>
            <div className={validCheck ? "hidden" : "bg-red-200"}>
              Please choose an option below:
            </div>
            <div className=''>
              <input
                className=' justify-self-end'
                defaultChecked={true}
                name='numbers'
                type='checkbox'
                id='numbers'
                value={"0123456789"}
              />
              <label
                className='pl-2 justify-self-start'
                htmlFor='numbers'
              >
                0 - 9
              </label>
              <br />
              <input
                className=' justify-self-end'
                defaultChecked={true}
                name='atoz'
                type='checkbox'
                id='atoz'
                value={"abcdefghijklmnopqrstuvwxyz"}
              />
              <label
                className='pl-2'
                htmlFor='atoz'
              >
                a - z
              </label>
              <br />
              <input
                className=' justify-self-end'
                defaultChecked={true}
                name='AtoZ'
                type='checkbox'
                id='AtoZ'
                value={"abcdefghijklmnopqrstuvwxyz".toUpperCase()}
              />
              <label
                className='pl-2'
                htmlFor='AtoZ'
              >
                A - Z
              </label>
              <br />
              <input
                className=' justify-self-end'
                defaultChecked={true}
                name='symbols'
                type='checkbox'
                id='symbols'
                value={"!@#$%^&*"}
              />
              <label
                className='pl-2'
                htmlFor='symbols'
              >
                !@#$%^&*
              </label>
            </div>
          </fieldset>
        </div>
        <div className=' flex flex-col justify-center items-center '>
          <label
            className=' text-xl'
            htmlFor='passlen'
          >
            Password Length
          </label>
          <input
            type='range'
            id='passlen'
            name='passlen'
            min='4'
            step={1}
            value={passLen}
            placeholder={passLen}
            onChange={handleChange}
            max='128'
          />
          <div className=''>{passLen} characters</div>
        </div>
        <div className='hidden'></div>
        <button
          type='submit'
          className='block p-3 bg-yellow-300 rounded hover:bg-yellow-400 text-black'
        >
          Create password{" "}
        </button>
        <button
          type='button'
          onClick={copyToClip}
          className='block p-3 bg-blue-300 rounded hover:bg-blue-400 text-black'
        >
          Copy 📋
        </button>
      </form>
    </main>
  )
}
