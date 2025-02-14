import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-gray-100 w-full p-6 flex flex-row items-center justify-end gap-8'>
      <NavLink to='/'><button className='btn'>Home</button></NavLink>
      <NavLink to='/login'><button className='btn'>Login</button></NavLink>
    </div>
  );
};

export default Header;