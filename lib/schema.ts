import { z } from 'zod'

export const FormDataSchema = z.object({
    jawPain: z.boolean().optional(),
    gumPain: z.boolean().optional(),
    teethAlignment: z.boolean().optional(),
    snoring: z.boolean().optional(),
    toothSensitivity: z.boolean().optional(),
    badBreath: z.boolean().optional(),
    dryMouth: z.boolean().optional(),
    toothDecay: z.boolean().optional(),

    painScale: z.string().optional(),
    bleeding: z.string().optional(),
    alignmentNotes: z.string().optional(),
    snoringNotes: z.string().optional(),
    sensitivityNotes: z.string().optional(),
    breathNotes: z.string().optional(),
    dryMouthNotes: z.string().optional(),
    decayNotes: z.string().optional(),
    otherNotes: z.string().optional(),

    gender: z.enum(['male', 'female']),
    ageGroup: z.enum(['adult', 'child']),
})
