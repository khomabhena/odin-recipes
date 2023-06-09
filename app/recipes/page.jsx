'use client'
import Recipe from '@/components/Recipe'
import React, { useEffect, useState } from 'react'
import Loading from '../loading'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRecipes = async () => {
            const res = await fetch('/api/recipes')
            const data = await res.json()

            setRecipes(data)
            setLoading(false)
        }

        fetchRecipes()
    }, [])

    if (loading)
        return <Loading />

  return (
    <div>
        <h1 className=' text-xl text-slate-500'>Available Recipes</h1>
        {
            recipes.map((item, index) => (
                <Recipe key={index} data={item} />
            ))
        }
    </div>
  )
}

export default Recipes