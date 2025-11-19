import React from 'react';
import { TbCategoryFilled } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";

const MidHeader = () => {
    return (
        <div>
            <div className='flex '>
               <img className='h-20 w-40' src="/Image/rinty.png" alt="" />
               <div className='flex items-center gap-4'>
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
       <div className='text-white bg-[#39B8AD] rounded-md'>
              <div className='flex items-center w-24 justify-center h-8 gap-1'>
<FaSearch className='text-xs'/> 
<p>Search</p>
            </div>
            </div>
               </div>
         
     
      </div>
        </div>
    );
};

export default MidHeader;
