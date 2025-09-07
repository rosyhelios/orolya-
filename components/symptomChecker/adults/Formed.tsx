'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod'
import { FormDataSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { adultRules, childRules, Result } from '@/lib/rules'

type Inputs = z.infer<typeof FormDataSchema> & {
    gender: 'male' | 'female'
    ageGroup: 'adult' | 'child'
    // new fields
    toothSensitivity?: boolean
    badBreath?: boolean
    dryMouth?: boolean
    toothDecay?: boolean
    sensitivityNotes?: string
    breathNotes?: string
    dryMouthNotes?: string
    decayNotes?: string
}

const steps = [
    { id: 'Step 0', name: 'Patient Info', fields: ['gender', 'ageGroup'] },
    {
        id: 'Step 1',
        name: 'Symptoms',
        fields: [
            'jawPain',
            'gumPain',
            'teethAlignment',
            'snoring',
            'toothSensitivity',
            'badBreath',
            'dryMouth',
            'toothDecay',
        ],
    },
    {
        id: 'Step 2',
        name: 'Details',
        fields: [
            'painScale',
            'bleeding',
            'alignmentNotes',
            'snoringNotes',
            'sensitivityNotes',
            'breathNotes',
            'dryMouthNotes',
            'decayNotes',
            'otherNotes',
        ],
    },
    { id: 'Step 3', name: 'Complete', fields: [''] },
]

export default function Formed() {
    const [previousStep, setPreviousStep] = useState(0)
    const [currentStep, setCurrentStep] = useState(0)
    const [results, setResults] = useState<Result[]>([])
    const delta = currentStep - previousStep

    const { register, handleSubmit, reset, trigger } = useForm<Inputs>({
        resolver: zodResolver(FormDataSchema),
    })

    const processForm: SubmitHandler<Inputs> = (data) => {
        const rules = data.ageGroup === 'child' ? childRules : adultRules
        const matchedResults: Result[] = Object.keys(rules)
            .filter((key) => data[key as keyof Inputs])
            .map((key) => rules[key])

        setResults(matchedResults)

        const previousSubmissions = JSON.parse(localStorage.getItem('submissions') || '[]')
        localStorage.setItem(
            'submissions',
            JSON.stringify([...previousSubmissions, { ...data, result: matchedResults }])
        )

        reset()
    }

    type FieldName = keyof Inputs

    const next = async () => {
        const fields = steps[currentStep].fields
        const valid = await trigger(fields as FieldName[], { shouldFocus: true })
        if (!valid) return

        if (currentStep < steps.length - 1) {
            if (currentStep === steps.length - 2) {
                await handleSubmit(processForm)()
            }
            setPreviousStep(currentStep)
            setCurrentStep((step) => step + 1)
        }
    }

    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep)
            setCurrentStep((step) => step - 1)
        }
    }

    return (
        <section className="relative min-h-screen flex flex-col justify-between p-8 bg-gray-50">
            {/* Progress nav */}
            <nav aria-label="Progress" className="mb-8">
                <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                    {steps.map((step, index) => (
                        <li key={step.name} className="md:flex-1">
                            <div
                                className={`flex flex-col py-2 pl-4 md:pt-4 ${
                                    currentStep > index
                                        ? 'border-l-4 md:border-t-4 border-sky-600 text-sky-600'
                                        : currentStep === index
                                            ? 'border-l-4 md:border-t-4 border-sky-600 text-sky-600'
                                            : 'border-l-4 md:border-t-4 border-gray-200 text-gray-500'
                                }`}
                                aria-current={currentStep === index ? 'step' : undefined}
                            >
                                <span className="text-sm font-medium">{step.id}</span>
                                <span className="text-sm font-medium">{step.name}</span>
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Form content */}
            <form className="flex-1" onSubmit={handleSubmit(processForm)}>
                {/* Step 0: Gender & Age */}
                {currentStep === 0 && (
                    <motion.div
                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-lg font-semibold text-gray-900">Patient Information</h2>
                        <div className="mt-6 space-y-4">
                            <label>
                                Gender:
                                <select {...register('gender')} className="ml-2 border rounded">
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>
                            <label>
                                Age group:
                                <select {...register('ageGroup')} className="ml-2 border rounded">
                                    <option value="">Select</option>
                                    <option value="adult">Adult</option>
                                    <option value="child">Child</option>
                                </select>
                            </label>
                        </div>
                    </motion.div>
                )}

                {/* Step 1: Symptoms */}
                {currentStep === 1 && (
                    <motion.div
                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-lg font-semibold text-gray-900">What symptoms are you experiencing?</h2>
                        <div className="mt-6 space-y-4">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" {...register('jawPain')} />
                                <span>Jaw Pain</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" {...register('gumPain')} />
                                <span>Gum Pain</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" {...register('teethAlignment')} />
                                <span>Teeth Alignment Issues</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" {...register('snoring')} />
                                <span>Breathing / Snoring</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" {...register('toothSensitivity')} />
                                <span>Tooth Sensitivity (hot/cold/pressure)</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" {...register('badBreath')} />
                                <span>Bad Breath</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" {...register('dryMouth')} />
                                <span>Dry Mouth</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" {...register('toothDecay')} />
                                <span>Visible Cavities / Tooth Decay</span>
                            </label>
                        </div>
                    </motion.div>
                )}

                {/* Step 2: Details */}
                {currentStep === 2 && (
                    <motion.div
                        initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-lg font-semibold text-gray-900">More Details</h2>
                        <div className="mt-6 space-y-4">
                            <label>
                                Pain scale (1–10):
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    {...register('painScale')}
                                    className="ml-2 w-20 border rounded"
                                />
                            </label>
                            <br />
                            <br />
                            <label>
                                Is it bleeding?
                                <input type="text" {...register('bleeding')} className="ml-2 border rounded" />
                            </label>
                            <br />
                            <br />
                            <label>
                                Teeth alignment notes:
                                <input
                                    type="text"
                                    {...register('alignmentNotes')}
                                    className="ml-2 border rounded"
                                />
                            </label>
                            <br />
                            <br />
                            <label>
                                Snoring notes:
                                <input
                                    type="text"
                                    {...register('snoringNotes')}
                                    className="ml-2 border rounded"
                                />
                            </label>
                            <br />
                            <br />
                            <label>
                                Sensitivity details:
                                <input
                                    type="text"
                                    {...register('sensitivityNotes')}
                                    className="ml-2 border rounded"
                                />
                            </label>
                            <br />
                            <br />
                            <label>
                                Bad breath details:
                                <input type="text" {...register('breathNotes')} className="ml-2 border rounded" />
                            </label>
                            <br />
                            <br />
                            <label>
                                Dry mouth notes:
                                <input
                                    type="text"
                                    {...register('dryMouthNotes')}
                                    className="ml-2 border rounded"
                                />
                            </label>
                            <br />
                            <br />
                            <label>
                                Tooth decay notes:
                                <input type="text" {...register('decayNotes')} className="ml-2 border rounded" />
                            </label>
                            <br />
                            <br />
                            <label>
                                Other things we should be aware of:
                                <textarea {...register('otherNotes')} className="ml-2 w-full border rounded" />
                            </label>
                        </div>
                    </motion.div>
                )}

                {/* Step 3: Results */}
                {currentStep === 3 && results.length > 0 && (
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-gray-900">Your Results</h2>
                        {results.map((res, i) => (
                            <div key={i} className="p-2 border rounded bg-white shadow-sm">
                                <p>
                                    <strong>Symptom:</strong> {res.title}
                                </p>
                                <p>
                                    <strong>Possible Cause:</strong> {res.possibleCause}
                                </p>
                                <p>
                                    <strong>Suggested Action:</strong> {res.suggestedAction}
                                </p>
                            </div>
                        ))}
                        <p className="mt-4 text-sm text-gray-600">(Your submission has been saved.)</p>
                    </div>
                )}
            </form>

            {/* Navigation */}
            <div className="mt-8 pt-5">
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={prev}
                        disabled={currentStep === 0}
                        className="rounded bg-white px-3 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:opacity-50"
                    >
                        Back
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        disabled={currentStep === steps.length - 1}
                        className="rounded bg-white px-3 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    )
}
