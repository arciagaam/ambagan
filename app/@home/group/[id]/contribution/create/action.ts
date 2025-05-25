import prisma from "@/prisma/prisma";

export const getMembers = async (id: string) => {
  return await prisma.user.findMany({
    where: {
      UsersOnGroups: {
        some: {
          groupId: id
        }
      }
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
    }
  })
:
