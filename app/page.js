"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitBtn = (e) => {
    // console.log('ho gya');
    e.preventDefault();   // page reload hone se rokta hai
    //  console.log(title);
    //  console.log(desc);
    setmainTask([...mainTask, { title, desc }]);  // using spread operator
    settitle("");
    setdesc("");
    //console.log(mainTask);

  }
  const DeleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1);
    setmainTask(copyTask);

  }
  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between w-2/3'>
            <h5 className='text-2xl text-black font-semibold'>{t.title}</h5>
            <h5 className='text-xl font-semibold'>{t.desc}</h5>
          </div>
          <button onClick={() => {
            DeleteHandler(i)
          }} className='bg-black text-white font-bold text-xl px-2 py-1 rounded'>Delete</button>
        </li>   // here deletehandler automatically  delete kr de rha tha so esliye arrow function use kiya
      );
    });
  }
  return (
    <>
      <h1 className='bg-black font-bold text-white text-5xl py-4 px-4 text-center'>My Todo List</h1>
      <form onSubmit={submitBtn} className='flex flex-col'>
        <input type='text'
          className='m-8 px-4 py-6 text-3xl border-zinc-800 border-4 w-1/2'
          placeholder='Enter Title here'
          value={title}
          onChange={(e) =>
            //console.log(e.target.value)
            settitle(e.target.value)
          }
        />
        <input type='text'
          className='m-8 px-4 py-6 text-3xl border-zinc-800 border-4 w-1/2'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) =>
            //console.log(e.target.value)
            setdesc(e.target.value)
          }
        />

        <button className='m-8 px-4 py-3 text-3xl border-4 bg-black text-white font-bold rounded w-40'>Submit Task</button>

      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page