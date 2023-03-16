import { NextApiRequest, NextApiResponse } from "next";

import prismaDB from "@/lib/prismaDB";
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") return res.status(405).end();
    try {
        await serverAuth(req);
        const movieCount = await prismaDB.movie.count();
        const random = Math.floor(Math.random() * movieCount);

        const randomMovie = await prismaDB.movie.findMany({
            skip: random,
            take: 1,
        });

       return res.status(200).json(randomMovie[0]);
    }catch(err){
        console.log(err)
        return res.status(401).end();
    }
}