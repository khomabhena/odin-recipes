import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className=' flex flex-col md:flex-row gap-8 justify-between'>
        <div className=' flex-1 mt-24'>
            <h1 className=' text-6xl text-slate-600 font-extrabold'>Enjoy our home cooked meals</h1>
            <p className=' mt-4 text-slate-500 text-lg'>These healthy recipes shake up your food favorites by adding more veggies and swapping out the cooking method</p>
            <Link href="/recipes">
                <button className=' bg-yellow-300 shadow-lg px-8 py-4 mt-12 rounded-lg font-extrabold'>View Recipes</button>
            </Link>
        </div>
        {/* <div className=' flex-1 bg-emerald-400'> */}
            <Image className='flex-1 rounded-br-3xl rounded-bl-3xl rounded-tl-3xl' width={400} height={400} src="/stew.avif" alt='Logo' />
        {/* </div> */}
    </div>
  )
}

export default Hero