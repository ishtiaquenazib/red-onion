import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
const Header = () => {
    return (
        <div className='container p-2'>
            <nav className='d-flex justify-content-between'>
                <div>
                   <Link to="/"> <img style={{ width: "130px" }} src={logo} alt="" /></Link>
                </div>
                <div className='gap-3'>
                    <Link className='text-decoration-none' to="/login"><button className='mx-2 btn'><i className="fa-solid fa-cart-plus"></i></button></Link>
                    <Link className='text-decoration-none' to="/login"><button className='mx-2 btn'>Login</button></Link>
                    <Link className='text-decoration-none' to="/register"><button className='mx-2 btn btn-danger rounded'>Sign up</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;