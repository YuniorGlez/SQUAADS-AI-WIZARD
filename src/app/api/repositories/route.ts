import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    // TODO: Obtener el userId del usuario autenticado
    const userId = 1; // Por ahora, usaremos un ID fijo

    const repositories = await prisma.repository.findMany({
      where: { userId: userId },
      select: { id: true, name: true, url: true }
    });

    return NextResponse.json(repositories);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}