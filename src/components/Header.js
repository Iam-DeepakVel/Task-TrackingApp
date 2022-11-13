import React from 'react'

const Header = ({onAdd,text}) => {
  return (
    <div className='flex w-full h-20 bg-cyan-300 items-center justify-between'>
       <h1 className='font-bold text-3xl font-Roboto ml-4'>Task Tracker</h1>
       <button onClick={onAdd} className='bg-black  hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-xl mr-4 md:mr-12 '>
       {
        text ?  'Close' : 'Add Task'}
        </button>
    </div>
  )
}

export default Header
