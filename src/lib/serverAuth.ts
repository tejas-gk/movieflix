import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prismaDB from "@/lib/prismaDB";

export default async function handler(req: NextApiRequest) {
    const session = await getSession({ req });
    if(!session?.user?.email) {
       throw new Error("You must be signed in to access this page");
    }
    const currentUser = await prismaDB.user.findUnique({
        where: {
            email: session.user.email,
        },
    });
    if (!currentUser) {
        throw new Error("User not found");
    }
    return {
        currentUser,
    }
}