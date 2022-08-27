import React, { useState } from 'react';
import './Register.css'
import auth from './../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import logo from '../../../images/logo2.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    let errorElement;

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    if (error || error1) {
        errorElement = <div>
            <p>{error.massage}, {error1.message}</p>
        </div>
    }

    if (user) {
        console.log('user', user?.displayName);
    }

    if (loading || updating) {
        return <Loading />
    }



    // const handleRegitration = async (e) => {
    //     e.preventDefault()
    //     if (password === cPassword) {

    //     }
    // }
    return (
        <div className='w-50 mx-auto p-3'>

            <div className='w-50 mx-auto  align-middle pt-3'>
                <div className='text-center pb-5'>
                    <img style={{ width: "200px" }} src={logo} alt="" />
                </div>
                {errorElement}
                    <input onChange={(e) => setDisplayName(e.target.value)} className='d-block w-100 my-3 p-1 rounded border border-none' type="displayName" value={displayName} placeholder='Name' />
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='d-block w-100 my-3 p-1 rounded border border-none' type="email" placeholder='Email' />
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='d-block w-100 my-3 p-1 rounded border border-none' type="password" placeholder='Password' />
                    <input onChange={(e) => setCPassword(e.target.value)} value={cPassword} className='d-block w-100 my-3 p-1 rounded border border-none' type="password" placeholder='Confirm Password' />
                    <button onClick={async () => {
                        await createUserWithEmailAndPassword(email, password)
                        await updateProfile({ displayName: displayName })
                    }} className='d-block w-100 my-3 p-2 bg-danger text-white border border-none rounded' type="submit" placeholder='Sign Up' >Sign Up</button>
              
                <SocialLogin />
            </div>
        </div>
    );
};

export default Register;