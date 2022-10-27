import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogLayout from "./BlogLayout";

export default function Blog() {
    const questionAns = useLoaderData();
    return (
        <div className="mt-8">
            <h1 className=" font-bold text-2xl text-center mb-8 p-2 text-purple-500 bg-gradient-to-r from-transparent via-green-200 to-transparent">
                Questions:
            </h1>
            {questionAns.map((qA) => (
                <BlogLayout key={qA.id} ques={qA} />
            ))}
        </div>
    );
}