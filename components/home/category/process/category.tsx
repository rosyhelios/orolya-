"use client"

import React from "react";
import SessionHeading from "@/components/home/category/sessionHeading";
import CategoryCard from "@/components/home/category/process/category_card";

const categoryData = [
    {
        id: 1,
        categoryName: "ASSESMENT",
        description:
            "In the first step, the user is asked to select the symptoms they are experiencing from a checklist. The assessment stage is simple and user-friendly so that anyone can complete it quickly. This information forms the foundation.",
    },
    {
        id: 2,
        categoryName: "CHECKING",
        description:
            "After collecting the inputs, the system processes them using a rule-based algorithm. Each symptom is mapped to a corresponding piece of advice or caution level. This ensures that the responses are consistent and not random guesses.",
    },
    {
        id: 3,
        categoryName: "AI",
        description:
            "After collecting the inputs, the system processes them using a gemini api. Each symptom is carefully evaluated.",
    },
    {
        id: 4,
        categoryName: "RESULTS",
        description:
            "The results stage provides the user with a summary of the symptoms they selected. Along with this, the system highlights a caution level such as mild, moderate, or urgent. Actionable advice is also presented in simple language.",
    },
];

export const Category = () => {
    return (
        <div className="pt-16 pb-16">
            <SessionHeading heading="THE PROCESS" subHeading="Detailed overview of the process" />

            <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryData.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default Category;
