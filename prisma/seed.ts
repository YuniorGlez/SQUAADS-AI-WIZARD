import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('password', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@squaads.com' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@squaads.com',
      password: hashedPassword,
    },
  })

  const initialRepo = await prisma.repository.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: admin.id,
      name: 'SQUAADS-AI-WIZARD',
      url: 'https://github.com/YuniorGlez/SQUAADS-AI-WIZARD',
    },
  })

  console.log({ admin, initialRepo })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })