// schemas/question.ts
import { defineType, defineField } from "sanity";

export const question = defineType({
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
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: ["single", "multiple"],
            },
        }),
        defineField({
            name: "options",
            title: "Options",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "label", title: "Label", type: "string" },
                        {
                            name: "nextQuestion",
                            title: "Next Question",
                            type: "reference",
                            to: [{ type: "question" }],
                        },
                    ],
                },
            ],
        }),

        // 👇 NEW SLUG FIELD
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "text", // auto-generate slug from the question text
                maxLength: 96,
            },
        }),

        // optional parent field if you want nested questions
        defineField({
            name: "parent",
            title: "Parent Question",
            type: "reference",
            to: [{ type: "question" }],
        }),
    ],
});
