"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

type Props = {
    category: {
        id: number;
        categoryName: string;
        description: string;
    };
};

const CategoryCard: React.FC<Props> = ({ category }) => {
    return (
        <Tilt scale={1.05} transitionSpeed={400}>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                {/* Icon / Placeholder Circle */}
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full mx-auto flex items-center justify-center mb-4">
          <span className="text-xl font-bold text-gray-600 dark:text-gray-300">
            {category.categoryName.charAt(0)}
          </span>
                </div>

                {/* Category Name */}
                <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-gray-100">
                    {category.categoryName}
                </h3>

                {/* Category Description */}
                <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
                    {category.description}
                </p>
            </div>
        </Tilt>
    );
};

export default CategoryCard;
