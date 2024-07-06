import {z} from "zod"

export const CreatReferral = z.object({
    referrer_email: z.string().email(),
    referee_email: z.string().email(),
    referee_name: z.string().optional(),
    referrer_name: z.string().optional(),
    course_id: z.number(),
})