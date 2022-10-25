import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CourseCard from '../../../components/CourseCard/CourseCard';

export default function AllCourse() {
    const courses = useLoaderData();

    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-12'>
                <div className=' col-span-3 flex justify-center'>
                    <div className=' w-full text-center'>
                        <div>
                            <h1 className='mt-4 font-bold'>All Courses</h1> <hr />
                        </div>
                        {
                            courses.map(course => {
                                return (
                                    <div key={course.title} className='  mb-2 p-4' >
                                        <h1 >{course.title}</h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className=' col-span-9'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-8'>
                        {
                            courses.map(course => <CourseCard key={course.title} course={course} />)
                        }
                    </div>

                </div>
            </div>
        </div >
    )
}
