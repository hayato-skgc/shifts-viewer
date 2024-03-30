import { z } from 'zod'
import { procedure, router } from '../trpc'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { ShiftTimelineProps } from '@/components/ShiftTimeline'
import { YYYYMMDD } from '@/utils/atoms'

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string().max(10),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      }
    }),
  user: procedure.input(z.object({ email: z.string().email() })).query(async ({ input }) => {
    const prismaUser = await prisma.users.findUnique({
      where: { email: input.email },
    })
    return prismaUser
  }),
  dates: procedure.query(async () => {
    const prismaDates = await prisma.dates.findMany()
    const formatedDates = prismaDates.map((originDate) => {
      const formatedDate = originDate.date.toLocaleDateString('sv-SE') as YYYYMMDD
      return {
        id: originDate.id,
        date: formatedDate,
      }
    })
    return formatedDates
  }),
  shiftList: procedure.input(z.object({ email: z.string().email() })).query(async ({ input }) => {
    const prismaUser = await prisma.users.findUnique({
      where: { email: input.email },
      include: {
        Shifts: {
          include: {
            shiftSchedule: {
              include: {
                shiftType: true,
              },
            },
          },
        },
      },
    })
    return prismaUser!.Shifts.map((shift): ShiftTimelineProps => {
      return {
        title: shift.shiftSchedule.shiftType.name,
        locate: shift.shiftSchedule.shiftType.location,
        esaNumber: shift.shiftSchedule.shiftType.esaNumber,
        startTime: shift.shiftSchedule.startTime,
        endTime: shift.shiftSchedule.endTime,
        isLeader: shift.isLeader,
        dateId: shift.shiftSchedule.dateID,
      }
    })
  }),
})

export type AppRouter = typeof appRouter
