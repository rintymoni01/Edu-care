import React from 'react';
import { TbCategoryFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { IoCartOutline } from "react-icons/io5";


const MidHeader = () => {
    return (
        <div className='flex justify-between pt-3 items-center container mx-auto px-20'> 
           
              <div>
                 <img className='h-20 w-40' src="/Image/rinty.png" alt="" />
              </div>
               <div className=' border bg-gray-100 h-15 w-107 border-gray-300 rounded-full '>
                <div className='flex  gap-4 px-8 pt-2 items-center '>
<div className='flex gap-2 items-center text-gray-800'>
    <TbCategoryFilled /> 
<select name="" id="">
<option value="">Categorys</option>
<option value="">Fashon</option>
<option value="">Organic</option>
</select>
</div>
<p className='h-10 w-0.5 bg-gray-200'></p> 
<p className='text-gray-400'>Sharch here...</p>


   {/* ================>>>>>>>>>>>> Favourite Button <<<<<<<<<<<<<================== */}
       <div className='text-white bg-[#39B8AD] rounded-full'>
              <div className='flex items-center w-24 justify-center h-8 gap-1'>
<FaSearch className='text-xs'/> 
<p>Search</p>
            </div>
               </div>
            </div>
               </div>
            
  <div className='flex gap-5 items-center'>
           <div className='flex gap-4'>

<div className='h-10 w-10 bg-gray-100 rounded-full border border-gray-300 items-center justify-center flex '>
    <CiHeart className='text-xl text-gray-500'/>
</div>
                 
    <div className='h-10 w-10 bg-gray-100 rounded-full border border-gray-300 items-center justify-center flex '>
    <IoCartOutline className='text-xl text-gray-500'/>
</div>
  </div>
<div className=' text-white px-8 py-3 rounded-full bg-[#39B8AD]'>
    Start Free Trail
</div>
         </div>
     
   
        </div>
    );
};

export default MidHeader;
