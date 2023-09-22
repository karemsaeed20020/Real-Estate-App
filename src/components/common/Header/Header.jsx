import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {nav} from '../../data/Data';
import './Header.css'
import {userState} from 'react';

const Header = () => {
    const [navlist, setnavlist] = useState(false);

  return (
    <>
        <header>
            <div className='container flex'>
                <div className='logo'>
                    <img src='https://github.com/sunil9813/Real-estate-website/blob/master/public/images/logo.png?raw=true' />
                </div>
                <div className='nav'>
                    <ul className={navlist ? "small" : "flex"}>
                        {nav.map((list, index) => (
                           <li key={index}>
                                 <Link to={list.path}>{list.text}</Link>
                           </li>
                        ))}
                    </ul>
                </div>
                <div className='button flex'>
                    <h4>
                        <span>2</span>MyList
                    </h4>
                    <button className='btn1'>
                        <i className='fa fa-sign-out'></i>Sign In
                    </button>
                </div>
                <div className='toggle'>
                    <button onClick={() => setnavlist(!navlist)}>
                        <i className='fa fa-bars'></i>
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
