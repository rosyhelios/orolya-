export type Result = {
    title: string
    possibleCause: string
    suggestedAction: string
}

// Adult rules
export const adultRules: Record<string, Result> = {
    jawPain: {
        title: 'Jaw Pain or Discomfort',
        possibleCause: 'TMJ disorder, stress, or teeth grinding.',
        suggestedAction: 'Dentist/orthodontist consultation; use mouthguard if grinding is suspected.',
    },
    gumPain: {
        title: 'Red or Swollen / Bleeding Gums',
        possibleCause: 'Gingivitis, early gum disease.',
        suggestedAction: 'Improve brushing/flossing, see dentist for cleaning.',
    },
    teethAlignment: {
        title: 'Teeth Alignment Issues',
        possibleCause: 'Malocclusion (bite issues), past untreated orthodontic needs.',
        suggestedAction: 'Orthodontist consultation for braces, aligners, or bite correction.',
    },
    snoring: {
        title: 'Breathing / Snoring',
        possibleCause: 'Gum disease, infection, or poor oral hygiene.',
        suggestedAction: 'Maintain oral hygiene, use antibacterial mouthwash, consult dentist.',
    },
}

// Pediatric rules
export const childRules: Record<string, Result> = {
    jawPain: {
        title: 'Jaw Pain or Discomfort',
        possibleCause: 'Teeth grinding, jaw misalignment, or stress.',
        suggestedAction: 'Consult a pediatric dentist or orthodontist for evaluation.',
    },
    gumPain: {
        title: 'Tender or Bleeding Gums',
        possibleCause: 'Gingivitis or poor brushing habits.',
        suggestedAction: 'Improve oral hygiene, use a soft-bristle brush, and consult a dentist.',
    },
    teethAlignment: {
        title: 'Misaligned or Crooked / Gapped / Overbite / Underbite / Crowded',
        possibleCause: 'Developmental orthodontic issues.',
        suggestedAction: 'Visit an orthodontist for braces or aligners evaluation.',
    },
    snoring: {
        title: 'Snoring / Shallow Breathing / Breathing Pauses',
        possibleCause: 'Enlarged tonsils, nasal obstruction, or sleep apnea.',
        suggestedAction: 'Pediatric ENT or dentist referral for airway assessment.',
    },
}
