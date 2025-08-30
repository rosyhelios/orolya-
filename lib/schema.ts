import { z } from 'zod'

export const FormDataSchema = z.object({
    jawPain: z.boolean().optional(),
    gumPain: z.boolean().optional(),
    teethAlignment: z.boolean().optional(),
    snoring: z.boolean().optional(),
    painScale: z.string().optional(),
    bleeding: z.string().optional(),
    alignmentNotes: z.string().optional(),
    snoringNotes: z.string().optional(),
    otherNotes: z.string().optional(),
    gender: z.enum(['male', 'female']),
    ageGroup: z.enum(['adult', 'child']),
})
