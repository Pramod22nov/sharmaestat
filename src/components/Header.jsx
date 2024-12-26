import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link, Links } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between item-center max-w-6xl mx-auto p-3'>
       <Link to="/">
       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Sharma</span>
            <span className='text-slate-800'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-24'></input>
            <FaSearch className='text-slate-500'></FaSearch>
        </form>
        <ul className='flex gap-4 '>
            <Link to='/home'><li className='hideen sm:inline text-slate-700 hover:underline p-3'>Home</li></Link>
            <Link to="/about"><li className='hideen sm:inline text-slate-700 hover:underline p-3'>About</li></Link>
            <Link to="/singin"><li className='hideen sm:inline text-slate-700 hover:underline p-3'>Singin</li></Link>
        </ul>
        </div>
    </header>
  )
}
