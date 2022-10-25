import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGoogle, FaGithub } from 'react-icons/fa';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider()

export default function Login() {
    // from Auth context
    const { googleSignIn } = useContext(AuthContext)

    // functions
    const handleGoogle = () => {
        googleSignIn(googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => { console.error(err) })
    }
    return (
        <div>
            <div className=' mt-16 flex justify-center '>
                <div className=' inline-block border p-8 mx-4 bg-slate-50 rounded-lg shadow-sm shadow-green-400 drop-shadow'>
                    <h2 className='font-bold text-2xl text-green-500'>Login</h2>
                    <form className='mt-8 space-y-2'>
                        <label htmlFor="email" className='flex'>Email</label>
                        <input type="email" name="email" className='border rounded p-3 flex w-full' />
                        <label htmlFor="password" className='flex'>Password</label>
                        <input type="password" name="password" className='border rounded p-3 flex w-full' />

                    </form>
                    <div>
                        <button className='border w-full bg-green-500 p-2 rounded mt-8 drop-shadow font-bold text-slate-700 hover:bg-green-400'>Sign In</button>
                        <small className='mt-2'>Don't have an account? <span className='text-red-400 hover:drop-shadow-lg hover:text-red-500'> <Link to='/register'> Register Here </Link> </span></small>

                        <button onClick={handleGoogle} className='border w-full p-2 mt-8 rounded hover:shadow-md shadow-green-400 drop-shadow text-slate-400 font-bold '>
                            <span className=' flex justify-center mb-1 text-red-400'> <FaGoogle /></span>  Continue with Google</button>
                        <button className='border w-full p-2 mt-4 rounded hover:shadow-md shadow-green-400 drop-shadow text-slate-400 font-bold'>
                            <span className=' flex justify-center mb-1 text-red-400'> <FaGithub /></span>
                            Continue with GitHub</button>

                    </div>

                </div>

            </div>
        </div>
    )
}