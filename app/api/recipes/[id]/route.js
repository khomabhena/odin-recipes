import { getDataRecipes } from "@/data/recipes";
import { NextResponse } from "next/server";

export async function GET (req, { params }) {
    const id = params.id

    const res = getDataRecipes.filter(recipe => recipe.id === id);
    
    return NextResponse.json(res)
}