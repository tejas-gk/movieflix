import { NextApiRequest, NextApiResponse } from "next";

import prismaDB from "@/lib/prismaDB";
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "GET") {
        res.status(405).end()
    }
    
    try {
        await serverAuth(req);
        const movies = await prismaDB.movie.findMany();
        res.status(200).json(movies);
    } catch (error) {
        
    }
}