import React from 'react'
import { GiPriceTag } from 'react-icons/gi';
import { BsHourglassSplit } from 'react-icons/bs';
import { useLoaderData, useNavigate } from 'react-router-dom'
import Pdf from "react-to-pdf";

const ref = React.createRef();


export default function CourseDetails() {
    const course = useLoaderData();
    const navigate = useNavigate();



    // functions
    const handlePremiumClick = (course) => {
        navigate(`/premium/course/${course.id}`)
    }
    return (
        <>
            <Pdf targetRef={ref} filename={`course-${course.id}.pdf`} scale={0.5}>
                {({ toPdf }) => <button className=' border border-green-500 rounded shadow p-2 px-3 top-28 absolute right-6 hover:shadow-lg mt-6 drop-shadow text-green-500 font-bold ' onClick={toPdf}>Download Pdf</button>}
            </Pdf>
            <div className='px-6 md:p-8 md:px-12 mt-8' ref={ref} >
                <div className='  mb-16 flex  flex-col-reverse md:flex-row justify-center items-center md:items-start bg-gradient-to-r p-8 from-green-50 via-green-200 to-green-50'>
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
                <div className='flex flex-col  md:flex-row  md:mx-0 space-y-8 md:space-y-0   md:justify-around bg-transparent md:bg-green-200 p-4 rounded drop-shadow'>

                    <div className='flex items-center bg-green-200 p-2'>
                        <BsHourglassSplit className='text-2xl md:text-3xl mr-4'></BsHourglassSplit>
                        <div className=' '>
                            <h1 className=' font-bold text-xl'>{course.course_length} weeks</h1>
                            <small>{course.hours} Hours per week</small>
                        </div>

                    </div>
                    <div className='flex items-center bg-green-200 p-2'>
                        <BsHourglassSplit className='text-2xl md:text-3xl mr-4'></BsHourglassSplit>
                        <div className=' '>
                            <h1 className=' font-bold text-xl'>{course.pace}-paced</h1>
                            <small className=''>Progress at your own speed</small>
                        </div>

                    </div>
                    <div className='flex items-center bg-green-200 p-2'>
                        <GiPriceTag className='text-2xl md:text-3xl mr-4'></GiPriceTag>
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
                            course.topics.map((topic, index) => <li key={`fasdfad${index}`}>{topic}</li>)
                        }

                    </div>
                </div>

                {/* syllabus */}
                <div className='mt-16'>
                    <div>
                        <h1 className=' font-bold text-3xl mb-4'>Syllabus</h1>
                    </div>
                    {
                        course.syllabus.map((mod, index) => {
                            const moduleNo = index + 1;
                            return (
                                <div key={`aabc${index}`}>
                                    <h1 className=' font-bold mb-2'>
                                        Module: {moduleNo}
                                    </h1>
                                    <p className='mb-2'>
                                        {mod}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>

                <div>
                    <button onClick={() => handlePremiumClick(course)} className='w-full p-4 bg-green-400 mt-8 rounded shadow cursor-pointer hover:shadow-lg hover:shadow-red-300'>Get Premium Access</button>
                </div>

            </div>
        </>
    )
}
