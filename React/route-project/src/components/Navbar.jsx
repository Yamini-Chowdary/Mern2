import { NavLink } from "react-router-dom";
import React from "react";
const Navbar = () => {
  const Linksdata = [
    {
      title:'Home',
      path:'/'
    },
    {
      title:'Products',
      path:'/products'
    },
    {
      title:'Contact',
      path:'/contact'
    }
  ]
  return (
    <>
      <div className="w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center items-center">
        <div className="w-[40%] flex justify-start items-center font-bold text-2xl text-purple-500">
        <img 
            src="https://cdn2.vectorstock.com/i/1000x1000/53/01/happy-diwali-sale-background-with-mandala-vector-17775301.jpg"
            alt="Placeholder"
            className="absolute left-6  max-w-none w-[30px] h-[30px] object-cover rounded-lg"
          />
          Max Store
        </div>
        <div className="w-[40%] h-full flex justify-end items-center">
          <div className="w-full h-full flex flex-row justify-end items-center font-bold gap-8">
            {Linksdata.map((link,index)=>(
              <NavLink to ={link.path} key={index} className='h-[65%] w-20 hover:bg-purple-500 hover:text-white flex justify-center items-center rounded-sm'>
                {link.title}
              </NavLink>
            )) 
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;