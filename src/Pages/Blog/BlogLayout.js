import React from "react";

export default function BlogLayout({ ques }) {
    const { question, ans } = ques;
    return (
        <div className="p-4 border shadow m-2 mx-8 mb-4 rounded shadow-green-500 drop-shadow">
            <h1 className=" font-bold text-green-500 text-xl mb-2">{question} </h1>
            <p className=" opacity-70">
                <strong>Ans:</strong> {ans}{" "}
            </p>
        </div>
    );
}