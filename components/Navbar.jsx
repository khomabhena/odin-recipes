import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-24 bg-slate-100 flex justify-between items-center'>
        <Link href='/'>
          <h1 className=' text-3xl md:text-4xl text-red-500 font-bold'>Mnandi Meals</h1>
        </Link>
        <div className=' flex gap-12 items-center'>
            <ul className=' hidden md:flex gap-4 text-lg text-slate-600 font-semibold'>
                <li><Link href='/recipes'>Recipes</Link></li>
            </ul>
            <button className=' hidden md:block bg-yellow-300 px-8 py-2 rounded-md shadow-md font-bold'>Login</button>
        </div>
    </div>
  )
}

export default Navbar