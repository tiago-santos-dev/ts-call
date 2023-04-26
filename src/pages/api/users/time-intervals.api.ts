import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { buildNextAuthOptions } from "../auth/[...nextauth].api";

const timeIntervalsBodySchema = z.object({
  intervals: z.array(
    z.object({
      weekDay: z.number(),
      startTimeInMinutes: z.number(),
      endTimeInMinutes: z.number(),
    })
  ),
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = await getServerSession(req, res, buildNextAuthOptions(req, res));

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized', session })
  }

  const { intervals } = timeIntervalsBodySchema.parse(req.body);

  await Promise.all(intervals.map(async (timeInterval) => {
    await prisma.userTimeInterval.create({
      data: {
        week_day: timeInterval.weekDay,
        time_start_in_minutes: timeInterval.startTimeInMinutes,
        time_end_in_minutes: timeInterval.endTimeInMinutes,
        user_id: session.user.id,
      }
    })
  }))

  return res.status(201).end();
}