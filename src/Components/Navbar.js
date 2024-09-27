import React from 'react';

function Navbar() {
  return (
    // <div className="fixed w-full z-10">
    <div className="bg-blue-400 text-white p-4 fixed shadow-md flex transition-all duration-300 h-24 w-full z-50">
      <div className="mx-[550px] my-auto flex">
        <h1 className=" font-poppins font-light text-3xl">
          WELCOME TO FOODIE STREAM{' '}
        </h1>{' '}
      </div>{' '}
    </div>
  );
}

export default Navbar;
