export type Result = {
    title: string
    possibleCause: string
    suggestedAction: string
}

// -------------------
// Adult rules
// -------------------
export const adultRules: Record<string, Result> = {
    jawPain: {
        title: 'Jaw Pain or Discomfort',
        possibleCause: 'TMJ disorder, stress, or teeth grinding.',
        suggestedAction: 'Consult dentist/orthodontist; use mouthguard if grinding is suspected.',
    },
    gumPain: {
        title: 'Red or Swollen / Bleeding Gums',
        possibleCause: 'Gingivitis or early gum disease.',
        suggestedAction: 'Improve brushing/flossing, see dentist for professional cleaning.',
    },
    teethAlignment: {
        title: 'Teeth Alignment Issues',
        possibleCause: 'Malocclusion (bite issues), untreated orthodontic needs.',
        suggestedAction: 'Orthodontist consultation for braces, aligners, or bite correction.',
    },
    snoring: {
        title: 'Breathing / Snoring',
        possibleCause: 'Airway obstruction, sleep apnea, or nasal congestion.',
        suggestedAction: 'See dentist/ENT; lifestyle changes or oral appliance therapy.',
    },
    toothSensitivity: {
        title: 'Tooth Sensitivity',
        possibleCause: 'Worn enamel, gum recession, cavities, or cracked teeth.',
        suggestedAction: 'Use sensitivity toothpaste, avoid acidic foods, consult dentist.',
    },
    badBreath: {
        title: 'Bad Breath (Halitosis)',
        possibleCause: 'Poor oral hygiene, gum disease, dry mouth, or underlying conditions.',
        suggestedAction: 'Brush/floss regularly, use antibacterial mouthwash, see dentist if persistent.',
    },
    dryMouth: {
        title: 'Dry Mouth (Xerostomia)',
        possibleCause: 'Medication side effects, dehydration, or salivary gland issues.',
        suggestedAction: 'Stay hydrated, chew sugar-free gum, consult dentist if chronic.',
    },
    toothDecay: {
        title: 'Cavities / Tooth Decay',
        possibleCause: 'Plaque buildup, sugary diet, poor brushing habits.',
        suggestedAction: 'Get fillings from dentist; improve oral hygiene and reduce sugar intake.',
    },
}

// -------------------
// Pediatric rules
// -------------------
export const childRules: Record<string, Result> = {
    jawPain: {
        title: 'Jaw Pain or Discomfort',
        possibleCause: 'Teeth grinding, jaw misalignment, or stress.',
        suggestedAction: 'Consult pediatric dentist or orthodontist for evaluation.',
    },
    gumPain: {
        title: 'Tender or Bleeding Gums',
        possibleCause: 'Gingivitis or poor brushing habits.',
        suggestedAction: 'Improve oral hygiene, use soft-bristle brush, consult dentist.',
    },
    teethAlignment: {
        title: 'Misaligned or Crooked Teeth',
        possibleCause: 'Developmental orthodontic issues.',
        suggestedAction: 'Visit orthodontist for early evaluation (braces/aligners).',
    },
    snoring: {
        title: 'Snoring / Breathing Pauses',
        possibleCause: 'Enlarged tonsils, nasal obstruction, or pediatric sleep apnea.',
        suggestedAction: 'Referral to pediatric ENT or dentist for airway assessment.',
    },
    toothSensitivity: {
        title: 'Tooth Sensitivity',
        possibleCause: 'Enamel hypoplasia, cavities, or dietary acids.',
        suggestedAction: 'Limit acidic foods, use kids’ sensitivity toothpaste, see pediatric dentist.',
    },
    badBreath: {
        title: 'Bad Breath (Halitosis)',
        possibleCause: 'Poor brushing, cavities, or tonsil/adenoid issues.',
        suggestedAction: 'Improve oral hygiene, monitor tonsils, dentist/ENT checkup.',
    },
    dryMouth: {
        title: 'Dry Mouth (Xerostomia)',
        possibleCause: 'Mouth breathing, dehydration, or medications.',
        suggestedAction: 'Encourage water intake, address mouth breathing, consult dentist if persistent.',
    },
    toothDecay: {
        title: 'Tooth Decay / Cavities',
        possibleCause: 'Sugary diet, bottle-feeding at night, poor brushing.',
        suggestedAction: 'Pediatric dentist for fillings, fluoride treatment, reduce sugar.',
    },
}