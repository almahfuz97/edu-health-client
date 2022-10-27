import React from 'react'

export default function ErroPage() {
    return (
        <div className='flex justify-center'>
            <div className='mt-16 mx-4 '>
                <div className='p-5 flex justify-center'>
                    <h1 className=' font-bold text-red-500 text-9xl'>404</h1>
                </div>
                <div className='bg-green-200 p-5 text-3xl text-red-500 font-bold rounded'>
                    <h1 className='p-2'>This is not the <br /> web page you are <br /> looking for.</h1>
                </div>
            </div>

        </div>
    )
}
