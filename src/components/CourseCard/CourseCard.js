import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CourseCard({ course }) {
    const navigate = useNavigate();
    // functions 
    const handleClick = () => {
        navigate(`/course/${course.id}`)
    }
    return (
        <div className='shadow  drop-shadow hover:shadow-xl rounded-lg'>
            <div className='relative'>
                <img src={course.img} alt="" className='w-full rounded-t-lg' />
                <div className='bg-white shadow rounded p-10 absolute z-10 -translate-y-3/4 translate-x-5 '>
                    <h1 className=' font-bold text-green-400'>Edu Health</h1>
                </div>
            </div>
            <div className='mt-10 p-4 pb-32'>
                <h1 className=' font-bold text-xl'>{course.title} </h1>
                <small>Instructor: {course.teacher}</small>
            </div>
            <button onClick={handleClick} className='w-full rounded-b-lg text-slate-700 p-4 bg-green-500 font-bold hover:shadow-lg hover:bg-green-600 cursor-pointer'>See Details</button>
        </div>
    )
}
