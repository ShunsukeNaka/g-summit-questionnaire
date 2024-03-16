import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    switch (req.method) {

        case 'POST':
            const newContent = await req.body.content
            if (newContent == null) {
                res.status(400).json({ message: 'content is required' })
                break
            }

            if (newContent === '') {
                res.status(400).json({ message: 'content is empty' })
                break
            }

            try {
                const newPost = await prisma.posts.create({
                    data: {
                        content: newContent,
                    }
                })
            } catch(error) {
                res.status(500).json({})
            }
    }
}