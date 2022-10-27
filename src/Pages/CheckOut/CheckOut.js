import React, { useContext } from 'react'
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'

export default function CheckOut() {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    let name;
    if (user && user.uid) name = user.displayName;
    console.log(user, name)
    console.log(course)
    return (
        <div className=' p-16'>
            <div>
                <h3 className=' text-xl mb-16 text-center '>Hi, <span className='font-bold text-green-500'> {name}!</span> Your subscription informations are given below. Please check carefully before proceed. </h3>
                <div className='flex flex-col-reverse md:flex-row items-center border shadow-red-200 shadow md:p-8 md:border-none rounded justify-around'>
                    <div className='p-8 w-full md:w-1/2'>
                        <h2 className=' font-bold text-xl'>Course Name: {course.title}</h2>
                        <p className='mt-4'>Price:{course.price}</p>
                        <p className='mt-4'>Duration: {course.course_length} weeks</p>
                        <p className='mt-4'>Instructor: {course.teacher} </p>
                        <button className='bg-green-400 p-4 px-8 hover:shadow-red-400 drop-shadow rounded font-bold mt-8 shadow cursor-pointer hover:shodow-lg'>Proceed</button>
                    </div>
                    <div className='flex items-center  rounded w-full md:w-1/2 p-8'>
                        <img src={course.img} alt="" className='w-full rounded' />
                    </div>
                </div>
            </div>
        </div>
    )


}
