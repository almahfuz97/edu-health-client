import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseCard from '../../../components/CourseCard/CourseCard';

export default function CourseDetails() {
    const course = useLoaderData();
    return (
        <div>
            <CourseCard course={course} />
        </div>
    )
}
