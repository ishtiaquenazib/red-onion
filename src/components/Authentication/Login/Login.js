import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../../images/logo2.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from './../../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
            {console.log(user)}
          </div>
        );
      }

    const handleLogin = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='w-50 mx-auto p-3'>
            <div className='w-50 mx-auto  align-middle pt-3'>
                <div className='text-center pb-5'>
                    <img style={{ width: "200px" }} src={logo} alt="" />
                </div>
                <form onSubmit={handleLogin}>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='d-block w-100 my-3 p-1 rounded border border-none' type="email" placeholder='Email' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='d-block w-100 my-3 p-1 rounded border border-none' type="password" placeholder='Password' />
                    <button className='d-block w-100 my-3 p-2 bg-danger text-white border border-none rounded' type="submit" placeholder='Sign Up' >Login</button>
                </form>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;