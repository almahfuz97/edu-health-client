import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div>
            <div className=' mt-16 flex justify-center '>
                <div className=' inline-block border md:w-3/5 lg:w-1/3 p-8 mx-4 bg-slate-50 rounded-lg shadow-sm shadow-green-400 drop-shadow'>
                    <h2 className='font-bold text-2xl text-green-500'>Register</h2>
                    <form className='mt-8'>
                        <label htmlFor="fullname" className='flex'>Full Name</label>
                        <input type="text" name="fullname" className='border rounded p-3 flex w-full mb-2' />

                        <label htmlFor="email" className='flex'>Email</label>
                        <input type="email" name="email" className='border rounded p-3 flex w-full mb-2' />
                        <label htmlFor="password" className='flex'>Password</label>
                        <input type="password" name="password" className='border rounded p-3 flex w-full mb-2' />
                        <label htmlFor="password" className='flex'>Confirm Password</label>
                        <input type="password" name="password" className='border rounded p-3 flex w-full mb-2' />
                        <button type='submit' className='border w-full bg-green-500 p-2 rounded mt-8 drop-shadow font-bold text-slate-700 hover:bg-green-400'>Sign In</button>

                    </form>
                    <div>

                        <small className='mt-2'>Already have an account? <span className='text-red-400 hover:drop-shadow-lg hover:text-red-500'> <Link to='/login'> Log In Here </Link> </span></small>

                    </div>

                </div>

            </div>
        </div>
    )
}
