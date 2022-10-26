import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGoogle, FaGithub, FaSpinner } from 'react-icons/fa';
import React, { useContext, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useForm } from 'react-hook-form';

const googleProvider = new GoogleAuthProvider();
const gighubProvider = new GithubAuthProvider();

export default function Login() {
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || location?.state?.from || '/';

    // use form
    const { register, watch, formState: { errors }, handleSubmit } = useForm();

    // from Auth context
    const { providerSignIn, githubSignIn, user, loading, signIn } = useContext(AuthContext)

    // functions

    // sign in with email and pass
    const onSubmit = (data) => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err)
                setError('User Not Found');
            })
    }

    // sign in with google
    const handleGoogle = () => {
        providerSignIn(googleProvider)
            .then(result => {
                navigate(from, { replace: true })

            })
            .catch(err => { console.error(err) })
    }

    // sign in with github
    const handleGithub = () => {
        providerSignIn(gighubProvider)
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(err => { console.error(err) })
    }


    if (user?.uid) {
        return <Navigate to={from} replace={true} />
    }

    if (!loading) {
        return (<div className=' text-3xl text-center font-bold mt-16 flex justify-center animate-spin'> <FaSpinner></FaSpinner> </div>)
    }

    return (
        <div>
            <div className=' mt-16 mb-16 flex justify-center '>
                <div className=' inline-block border p-8 mx-4 md:w-3/5 lg:w-1/3 bg-slate-50 rounded-lg shadow-sm shadow-green-400 drop-shadow'>
                    <h2 className='font-bold text-2xl text-green-500'>Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
                        {/* error meesage */}
                        <p className=' text-red-500 drop-shadow mb-2'>{error}</p>
                        {/* email input */}
                        <label htmlFor="email" className='flex'>Email</label>
                        <input type="email" {...register('email', { required: true })} className='border rounded p-3 flex w-full mb-8' />

                        {/* password inpur*/}
                        <label htmlFor="password" className='flex'>Password</label>
                        <input type="password" {...register('password', { reqquired: true })} className='border rounded p-3 flex w-full mb-8' />
                        {/* errormessage */}

                        <input type="submit" className='border w-full bg-green-500 p-2 rounded flex place-content-center drop-shadow font-bold text-slate-700 hover:bg-green-400' value="Sign In" />
                    </form>

                    <div>
                        <small className='mt-2'>Don't have an account? <span className='text-red-400 hover:drop-shadow-lg hover:text-red-500'> <Link to='/register' state={{ from2: from }} replace> Register Here </Link> </span></small>

                        <button onClick={handleGoogle} className='border w-full p-2 mt-8 rounded hover:shadow-md shadow-green-400 drop-shadow text-slate-400 font-bold '>
                            <span className=' flex justify-center mb-1 text-red-400'> <FaGoogle /></span>  Continue with Google</button>
                        <button onClick={handleGithub} className='border w-full p-2 mt-4 rounded hover:shadow-md shadow-green-400 drop-shadow text-slate-400 font-bold'>
                            <span className=' flex justify-center mb-1 text-red-400'> <FaGithub /></span>
                            Continue with GitHub</button>

                    </div>

                </div>

            </div>
        </div>
    )
}
