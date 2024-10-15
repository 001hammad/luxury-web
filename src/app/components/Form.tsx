'use client'
import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [Submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    }
  return (
    <main className='flex  justify-center mt-2 mb-2 font-mono items-center  text-black '>
        <div className='bg-transparent p-2 rounded-2xl border-2 border-black   w-3/12'>
            <h1 className='text-center text-sm'>CONTACT ME</h1>
            {Submitted ? ( <div className='text-center text-xl'>
                <h1>Submitted Sucessfully</h1>
            </div>):(
            <form onSubmit={handleSubmit} data-aos="fade-up">
                <div className='flex flex-col mb-4 '>
                    <label htmlFor="name" className='text-xs mb-2'>First name*</label>
                    <input type="text" className='rounded-2xl bg-neutral-300 text-black ' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="name" className='text-xs mb-2'>Last name*</label>
                    <input type="email" className='rounded-2xl bg-neutral-300 text-black' value={lastname} onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="name" className='text-xs mb-2'>Email*</label>
                    <input type="age" className='rounded-2xl bg-neutral-300 text-black' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col mb-4'>
                <label htmlFor="name" className='text-xs mb-2'>Subject*</label>
                <input type="age" className='rounded-2xl bg-neutral-300 text-black' value={subject} onChange={(e)=>setSubject(e.target.value)} />
                </div>
                <div className='flex flex-col mb-4 '>
                  <label htmlFor="message" className='text-xs mb-2'>Message*</label>
                  <textarea name="message" id="message" className='rounded-2xl bg-neutral-300 text-black' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <div className='flex flex-col mb-4'>
                    <button className='bg-[#C1D8C3] rounded-2xl text-white hover:bg-black text-sm'>Submit</button>
                </div>
            </form>
  )}
        </div>
    </main>
  )
}

export default Form;
