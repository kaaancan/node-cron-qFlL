import cron from 'node-cron';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
cron.schedule(`*/1 * * * *`, async () => {
  const some = await prisma.job.findMany();
  console.log(some);
  console.log(`running your task...`);
});
