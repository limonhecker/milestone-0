import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@threadtrace.local' },
    update: {},
    create: {
      email: 'admin@threadtrace.local',
      passwordHash: 'placeholder_hash_for_milestone_0',
      status: 'ACTIVE',
    },
  });

  const org = await prisma.organization.upsert({
    where: { code: 'DEMO-BRAND' },
    update: {},
    create: {
      code: 'DEMO-BRAND',
      name: 'Demo Brand Inc.',
      country: 'BD',
      status: 'ACTIVE',
    },
  });

  console.log('Seeded:', { admin: admin.email, org: org.code });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });