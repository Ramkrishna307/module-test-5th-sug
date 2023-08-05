import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome,FaBookmark,FaRegUser,FaRegBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link id="link" to="/">TravelMedia.in</Link>
        </li>
        <li id='divnav'>
        <div id='innerdiv'>
      <ul>
        <li to="/" className='icon'>
          <FaHome />
          <span></span>
        </li>
        <li className='icon'>
          < FaRegBell/>
          <span></span>
        </li>
        <li className='icon'>
          <FaBookmark />
          <span></span>
        </li>
        <li className='icon'>
          <FaRegUser/>
          <span></span>
        </li>
      </ul>
    </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
