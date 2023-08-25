import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request: Request) {

    const session = await getServerSession(authOptions);

    if (session) {

        const users = await prisma.user.findMany();
        
        console.log(users);

        return NextResponse.json(users);
    }

}