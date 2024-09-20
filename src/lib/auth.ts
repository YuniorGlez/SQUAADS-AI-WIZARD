import { prisma } from './prisma';
import bcrypt from 'bcrypt';

export async function authenticateUser(username: string, password: string): Promise<boolean> {
  const user = await prisma.user.findFirst({
    where: { username: username }
  });

  if (!user) {
    console.error('User not found');
    return false;
  }

  return bcrypt.compare(password, user.password);
}