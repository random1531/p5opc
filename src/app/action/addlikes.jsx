"use server"

import { updateNumberOfLikes } from "../lib/prisma-db"
export default async function addlikes(id,nblike){
    return await updateNumberOfLikes(parseInt(id),parseInt(nblike+1))
}