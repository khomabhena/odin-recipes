import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecipeDetails = ({ data }) => {

  return (
    <div className=' mt-16 mb-16 md:flex gap-8'>
        <Image className=' w-full h-44 md:w-56 rounded-lg shadow-md object-cover' src={data.image} width={300} height={300} alt='/' />
        <div className=' mt-4 md:mt-0'>
            <h1 className=' text-xl md:text-2xl md:font-bold font-semibold text-slate-700'>{data.title}</h1>
            <p className=' text-slate-600 md:text-xl'>{data.description}</p>
            
            <h2 className=' mt-12 text-xl font-bold text-slate-600'>Ingredients</h2>
            <ul className=' mt-4 list-disc flex flex-col gap-4 list-inside'>
              {
                data.ingredients.map((item, index) => (
                  <li key={index}>
                    <span className=' font-bold'>{item.item}: </span>
                    {item.details}
                  </li>
                ))
              }
            </ul>
            <h2 className=' mt-12 text-xl font-bold text-slate-600'>Cooking Steps</h2>
            <ul className=' mt-4 list-decimal flex flex-col gap-4 list-inside'>
              {
                data.steps.map((item, index) => (
                  <li key={index}>
                    <span className=' font-bold'>{item.step}: </span>
                    {item.details}
                  </li>
                ))
              }
            </ul>
        </div>
    </div>
  )
}

export default RecipeDetails