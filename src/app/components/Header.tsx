import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between font-mono items-center bg-[#C1D8C3] h-9">
        <div className="flex items-center">
          <i className='bx bx-search-alt-2 mr-1 pl-4'></i>
          <input 
            type="search" 
            placeholder='Search...' 
            className='text-sm bg-transparent '
          />
        </div>
        <ul className='flex justify-center items-center space-x-7 text-sm'>
          <li className='hover:underline cursor-pointer'>Home</li>
          <li className='hover:underline cursor-pointer'>Shop</li>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Contact</li>
        </ul>
        <div className='flex justify-between space-x-4 items-center ml-10'>
        <i className='bx bxs-log-in-circle text-black' ></i>
            <button className='text-xs hover:underline'>Sign In</button>
            <button className='text-xs hover:underline'>Sign Up</button>
        </div>
        <div className="flex items-center space-x-2">
          <i className='bx bxs-cart-alt '></i>
          <i className='bx bxs-user-circle pr-2'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;