import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
                <p className='pt-3 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
            </div>
            <div className=''>
                <button className='btn btn-danger d-block mx-auto w-100 my-2'>
                    <i className="fa-brands fa-google"></i>
                    <span className='px-2'>Google Sign in</span>
                </button>
                <button className='btn btn-danger d-block mx-auto w-100 my-2'>
                    <i className="fa-brands fa-facebook"></i>
                    <span className='px-2'>Facebook Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;