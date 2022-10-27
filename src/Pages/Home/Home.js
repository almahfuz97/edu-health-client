import React from 'react'
import { useNavigate } from 'react-router-dom';
import bg2 from '../../assets/bg2.jpg'

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/courses')
    }
    return (
        <div className='flex  h-screen justify-center md:justify-evenly bg-green-300'>
            <div className=' mt-16 md:mt-32'>
                <h1 className=' drop-shadow text-5xl md:text-7xl text-center text-white font-bold'>Welcome to Edu Health</h1>
                <div className='flex justify-center'>
                    <p className='w-2/3 text-white drop-shadow mt-4 text-center text-3xl'>Start learning from the world's best institutions</p>
                </div>

                <div className='flex justify-center mt-16'>
                    <button onClick={handleClick} className='bg-red-400 p-4 px-6 shadow font-bold rounded-md text-white hover:shadow-lg cursor-pointer'>Get Started</button>
                </div>

            </div>

        </div>
    )
}
