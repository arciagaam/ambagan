import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const groups = await prisma.group.create({
    data: {
      name: "Group 1",
    }
  })
  console.log({ groups })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
