import React from 'react'
import { FaHandPointRight } from 'react-icons/fa';
import { GiCelebrationFire } from 'react-icons/gi';
import { NavLink, useLoaderData } from 'react-router-dom'
import CourseCard from '../../../components/CourseCard/CourseCard';

export default function AllCourse() {
    const courses = useLoaderData();

    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-12'>
                <div className=' col-span-3 flex justify-center'>
                    <div className=' w-full text-center'>
                        <div className='flex items-center  justify-center mt-4 mb-4 bg-gradient-to-l from-transparent via-red-50 to-transparent'>
                            <GiCelebrationFire className=' text-2xl text-green-500'></GiCelebrationFire>
                            <h1 className='mt-4 text-green-500 text-xl mx-2 font-bold pb-4'>All Courses</h1>
                            <GiCelebrationFire className=' text-2xl text-green-500'></GiCelebrationFire>
                        </div>
                        {
                            courses.map((course, index) => {
                                return (
                                    <NavLink key={course.id} to={`/course/${course.id}`}>
                                        <div className='hover:shadow flex items-center justify-center space-x-2 text-green-500 rounded drop-shadow mb-2 p-4' >
                                            <FaHandPointRight className=' text-xl'></FaHandPointRight>
                                            <h1 className=' text-xl text-green-500 '>{course.title}</h1>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
                <div className=' col-span-9'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-8'>
                        {
                            courses.map((course, index) => <CourseCard key={`${course.title}${index}`} course={course} />)
                        }
                    </div>

                </div>
            </div>
        </div >
    )
}
