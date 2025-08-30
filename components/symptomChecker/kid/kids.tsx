"use client"

import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { sanityClient } from "@/sanity/lib/client"   // make sure this exists
import { queries } from "@/sanity/lib/queries"      // your GROQ queries

// ✅ Schema
const FormSchema = z.object({
    answers: z.record(z.array(z.string())),
})

export default function KidsForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: { answers: {} },
    })

    const [currentQuestion, setCurrentQuestion] = useState<any | null>(null)
    const [history, setHistory] = useState<string[]>([])
    const [result, setResult] = useState<any | null>(null)

    // Load first question
    useEffect(() => {
        sanityClient.fetch(queries.rootQuestions).then((data) => {
            if (data.length > 0) {
                setCurrentQuestion(data[0])
            }
        })
    }, [])

    // Handle "Next"
    const handleNext = async (selectedIds: string[]) => {
        form.setValue(`answers.${currentQuestion._id}`, selectedIds)

        const nextId = currentQuestion.options?.find((opt: any) =>
            selectedIds.includes(opt._id)
        )?.nextQuestion

        if (nextId) {
            const next = await sanityClient.fetch(queries.questionById, { id: nextId })
            setHistory([...history, currentQuestion._id])
            setCurrentQuestion(next)
        } else {
            const res = await sanityClient.fetch(queries.resultsByQuestion, {
                questionId: currentQuestion._id,
            })
            setResult(res[0])
            setCurrentQuestion(null)
        }
    }

    // Show result
    if (result) {
        return (
            <div className="p-4 border rounded-xl space-y-4">
                <h2 className="text-xl font-bold">Result</h2>
                <p className="font-semibold">{result.title}</p>
                <p className="text-muted-foreground">{result.description}</p>
                <Button onClick={() => window.location.reload()}>Restart</Button>
            </div>
        )
    }

    if (!currentQuestion) return <p>Loading...</p>

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(() =>
                    handleNext(form.getValues(`answers.${currentQuestion._id}`) || [])
                )}
                className="space-y-6"
            >
                <FormField
                    control={form.control}
                    name={`answers.${currentQuestion._id}`}
                    render={({ field }) => (
                        <FormItem>
                            <h2 className="text-lg font-semibold">{currentQuestion.text}</h2>
                            {currentQuestion.options?.map((option: any) => (
                                <FormItem
                                    key={option._key}
                                    className="flex flex-row items-center gap-2"
                                >
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value?.includes(option._id)}
                                            onCheckedChange={(checked) => {
                                                const newValue = checked
                                                    ? [...(field.value || []), option._id]
                                                    : (field.value || []).filter((id) => id !== option._id)
                                                field.onChange(newValue)
                                            }}
                                        />
                                    </FormControl>
                                    <FormLabel>{option.label}</FormLabel>
                                </FormItem>
                            ))}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Next</Button>
            </form>
        </Form>
    )
}
