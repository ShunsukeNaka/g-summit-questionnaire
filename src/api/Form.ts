import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function GET() {
    const forms = await getAllforms();
    return NextResponse.json(forms);
}


async function getAllforms() {
    const forms = await prisma.user.findMany();
    return forms
}