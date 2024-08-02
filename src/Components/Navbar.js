import React from "react";

function Navbar() {
  return (
    <div className="fixed w-full z-10">
      <div className="bg-blue-200">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-[#d9d9d9]">
            <div className="bg-blue-300 h-20 justify-between items-center mx-auto px-4 flex">
              <h1 className="ml-96 font-poppins font-light text-3xl">
                WELCOME TO FOODIE STREAM{" "}
              </h1>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Navbar;
