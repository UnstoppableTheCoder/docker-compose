import { PrismaPg } from "@prisma/adapter-pg";
import express from "express";
import { PrismaClient } from "@prisma/client/extension";

const app = express();
const PORT = 3000;

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

app.get("/", async (req, res) => {
  const data = await prisma.user.findMany({});
  res.json({
    data,
  });
});

app.post("/", async (req, res) => {
  const response = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  res.json({
    response,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
