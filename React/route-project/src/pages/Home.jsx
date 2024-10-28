import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <div className="relative flex">
        <div className="whitespace-pre-wrap mt-0.5">
          <p className="flex text-2xl rounded-sm border-2 border-t-purple-500 indent-8 hover:bg-purple-600 align-middle bg-purple-500 w-60 size-10 space-around justify-start items-start">
            Women Ethnic
          </p>
          <p className="flex text-2xl rounded-sm border-2 border-white indent-8 hover:bg-purple-600 align-middle bg-purple-500 w-60 size-10 space-around justify-start items-start">
            Women Western
          </p>
          <p className="flex text-2xl rounded-sm border-2 border-white indent-8 hover:bg-purple-600 align-middle bg-purple-500 w-60 size-10 space-around justify-start items-start">
            Men
          </p>
          <p className="flex text-2xl rounded-sm border-2 border-white indent-8 hover:bg-purple-600 align-middle bg-purple-500 w-60 size-10 space-around justify-start items-start">
            Kids
          </p>
          <p className="flex text-2xl rounded-sm border-2 border-white indent-8 hover:bg-purple-600 align-middle bg-purple-500 w-60 size-10 space-around justify-start items-start">
            Home & Kitchen
          </p>
          <p className="flex text-2xl rounded-sm border-2 border-white indent-8 hover:bg-purple-600 align-middle bg-purple-500 w-60 size-10 space-around justify-start items-start">
            Beauty & Health
          </p>
          <p className="flex text-2xl rounded-sm border-2 border-white indent-8 hover:bg-purple-600 align-middle bg-purple-500 w-60 size-10 space-around justify-start items-start">
            Jewellery
          </p>
          <p className="flex text-2xl rounded-sm border-2 border-white indent-8 hover:bg-purple-600 align-middle bg-purple-500 w-60 size-10 space-around justify-start items-start">
            Bags & Footwear
          </p>
          <p className="flex text-2xl rounded-sm border-2 border-white indent-8 hover:bg-purple-600 align-middle bg-purple-500 w-60 size-10 space-around justify-start items-start">
            Electronics
          </p>
        </div>

        {/* New Box positioned to the right of the "Men" and "Kids" section */}
        <div
          className="absolute top-[20px] left-[300px] w-[400px] h-[350px] bg-white shadow-[100px_100px_80px_rgba(0, 0, 0, 0.07)
;] p-9 space-y-3 overflow-hidden"
        >
         
          <div className="fill-violet-500 w-12">
          <img 
            src="https://cdn2.vectorstock.com/i/1000x1000/53/01/happy-diwali-sale-background-with-mandala-vector-17775301.jpg"
            alt="Placeholder"
            className=" max-w-none w-80 h-48 object-cover rounded-lg"
          />
              
            
          </div>
          <div className="whitespace-pre-wrap">
          <h1 className="font-bold text-xl">Lowest Prices Best Quality Shopping</h1>
          <p className="text-sm text-zinc-600 leading-6">
           Free Delivery       Cash on delivery       Easy Returns
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;