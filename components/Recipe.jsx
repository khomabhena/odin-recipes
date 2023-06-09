import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Recipe = ({ data }) => {

  return (
    <div className=' mt-16 mb-16 md:flex gap-8'>
        <Image className=' w-full h-44 md:w-56 rounded-lg shadow-md object-cover' src={data.image} width={300} height={300} alt='/' />
        <div className=' mt-4 md:mt-0'>
            <h1 className=' text-xl md:text-2xl md:font-bold font-semibold text-slate-700'>{data.title}</h1>
            <p className=' text-slate-600 md:text-xl'>{data.description}</p>
            <Link href={`/recipes/${data.id}`}>
              <button className=' mt-4 bg-yellow-300 px-8 py-2 rounded-md font-semibold shadow-md'>More Details</button>
            </Link>
        </div>
    </div>
  )
}

export default Recipe