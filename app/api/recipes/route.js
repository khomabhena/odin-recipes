import { getDataRecipes } from "@/data/recipes";
import { NextResponse } from "next/server";

export async function GET (req) {
    return NextResponse.json(getDataRecipes)
}