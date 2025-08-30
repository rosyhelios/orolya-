import { defineType, defineField } from "sanity";

export const Question = defineType({
    name: "question",
    title: "Question",
    type: "document",
    fields: [
        defineField({
            name: "text",
            title: "Question Text",
            type: "string",
        }),
        defineField({
            name: "options",
            title: "Options",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "label",
                            title: "Option Label",
                            type: "string",
                        },
                        {
                            name: "nextQuestions",
                            title: "Next Questions",
                            type: "array",
                            of: [{ type: "reference", to: [{ type: "question" }] }],
                            description:
                                "Allows chaining multiple questions after selecting this option",
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: "resultText",
            title: "Result Text (optional)",
            type: "text",
            description: "Shown if this is a final node",
        }),
    ],
});
