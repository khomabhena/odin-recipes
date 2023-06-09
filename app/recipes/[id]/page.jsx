"use client"
import Loading from '@/app/loading'
import RecipeDetails from '@/components/RecipeDetails'
import React, { useEffect, useState } from 'react'

const Recipe = ({ params: { id } }) => {
    const [recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await fetch(`/api/recipes/${id}`)
            const data = await res.json()

            setRecipe(data)
            setLoading(false)
        }

        fetchRecipe()
    }, [id])

    if (loading) 
      return <Loading />

  return (
    <div>
      <RecipeDetails data={recipe[0]} />
    </div>
  )
}

export default Recipe