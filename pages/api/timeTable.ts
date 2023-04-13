import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const timeTable = await prisma.timeTable.findMany();
    res.status(200).json(timeTable);
  } else if (req.method === "POST") {
    const { Monday, Tuesday, Wendsday, Thursday, Friday } = req.body;
    const timeTable = await prisma.timeTable.create({
      data: {
        Monday,
        Tuesday,
        Wendsday,
        Thursday,
        Friday,
      },
    });
    res.status(201).json(timeTable);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
