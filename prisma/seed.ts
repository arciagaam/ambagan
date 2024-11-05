import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await createUser();
  await createGroup();
  await createContributionType();
  await createContribution();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function createGroup() {
  await prisma.group.create({
    data: {
      name: "Group 1",
    },
  });
}

async function createUser() {
  const users: Pick<User, "email" | "first_name" | "last_name">[] = [
    {
      email: "user1@example.com",
      first_name: "John",
      last_name: "Doe",
    },
    {
      email: "user2@example.com",
      first_name: "Jane",
      last_name: "Doe",
    },
  ];

  await prisma.user.createMany({
    data: users,
  });
}

async function createContributionType() {
  const contributionTypes = [{ name: "owner" }, { name: "member" }];

  await prisma.contributionType.createMany({
    data: contributionTypes,
  });
}

async function createContribution() {
  const contributions = [
    {
      name: "Outing 1",
      groupId: 1,
    },
    {
      name: "Outing 2",
      groupId: 1,
    },
  ];

  await prisma.contribution.createMany({
    data: contributions,
  });
}
