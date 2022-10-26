import React from 'react'
import { GiBassetHoundHead, GiPriceTag } from 'react-icons/gi';
import { BsHourglassSplit } from 'react-icons/bs';
import { NavLink, useLoaderData } from 'react-router-dom'
import CourseCard from '../../../components/CourseCard/CourseCard';

export default function CourseDetails() {
    const course = useLoaderData();
    return (
        <div className='p-2 md:p-8'>
            <div className='mt-16 mb-16 flex  flex-col-reverse md:flex-row justify-center items-center md:items-start bg-gradient-to-r p-8 from-green-50 via-green-200 to-green-50'>
                <div className='w-full md:w-1/2 mr-2 text-center md:text-start'>
                    <h1 className='font-bold text-3xl mb-4'> {course.title} </h1>
                    <p>
                        {course.description}
                    </p>
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <img src={course.img} alt="" className='md:w-3/4 mb-4' />
                </div>
            </div>

            {/* hours/ pace/ price */}
            <div className='flex flex-col md:flex-row items-center mx-16 md:mx-0 space-y-8 md:space-y-0  justify-center md:justify-around bg-green-200 p-4 rounded drop-shadow'>
                <div className='flex items-center'>
                    <BsHourglassSplit className=' text-3xl mr-4'></BsHourglassSplit>
                    <div className=' '>
                        <h1 className=' font-bold text-xl'>{course.course_length} weeks</h1>
                        <small>{course.hours} Hours per week</small>
                    </div>

                </div>
                <div className='flex items-center'>
                    <BsHourglassSplit className=' text-3xl mr-4'></BsHourglassSplit>
                    <div className=' '>
                        <h1 className=' font-bold text-xl'>{course.pace}-paced</h1>
                        <small>Progress at your own speed</small>
                    </div>

                </div>
                <div className='flex items-center'>
                    <GiPriceTag className=' text-3xl mr-4'></GiPriceTag>
                    <div className=' '>
                        <h1 className=' font-bold text-xl'>${course.price}</h1>
                        <small> Full access</small>
                    </div>

                </div>
            </div>

            {/* about */}
            <div className='flex justify-center mt-16'>
                <div>
                    <h1 className=' text-2xl mb-2 font-bold'>About This course</h1>
                    <p>
                        {
                            course.about
                        }
                    </p>
                </div>
            </div>


            {/* what you'll learn */}
            <div className=' mt-16'>
                <div>
                    <h1 className=' text-2xl mb-2 font-bold'>What You Will Learn</h1>

                    {
                        course.topics.map((topic, index) => <li key={topic}>{topic}</li>)
                    }

                </div>
            </div>

        </div>
    )
}
