import React from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

const page = () => {
    return (
        <div className='py-10 bg-[#EFF2F9]'>
            <div>
<div className='flex gap-2 items-center border border-gray-300 py-1 w-70 rounded-full px-3 bg-white'>
    <div className='h-7 w-7 flex items-center justify-center rounded-full bg-[#bcf1ee]'>
        <BsFillLightningChargeFill  className='text-[#1c887f]'/>
    </div>
<p className='text-shadow-emerald-50 text-gray-700'>Welcome to Online Education</p>
</div>
<div className='py-6'>
    <h1 className='text-4xl font-semibold text-gray-700'>Start learning from <br />
the world’s <span className='text-3xl font-semibold text-[#39B8AD]'> best institutions</span></h1>
</div>

 {/*========================>>>> button<<<<================== */}
<div className='flex  gap-8 items-center'>
    <div className='text-white py-3 rounded-full bg-[#07A698] text-center w-45'>
    <h2 className='font-bold text-xl'>Get Started</h2>
   
</div>
 <div className='flex items-center py-4 gap-1'>
       <div className='h-10 w-10 border-gray-300 bg-white rounded-full flex items-center justify-center border'>
         <FaPlay className='text-[#07A698]'/>
       </div>
        <p>Watch the video</p>
    </div>

    
</div>
<div className='flex gap-3 items-center'>
<div className='flex '>
    <img src="/Image/hero-author-1.png" alt="author" />
     <img src="/Image/hero-author-2.png" alt="author" />
      <img src="/Image/hero-author-3.png" alt="author" />
       <img src="/Image/hero-author-4.png" alt="author" />
</div>
   <p> <span className='text-[#07A698] font-semibold'>10k</span> Enrolment</p>
</div>
<div className='pt-3'>
    <h2 className='font-bold text-gray-700 text-2xl'>Explore <span className='text-[#07A698]'>1350+</span> Courses within Subject</h2>
</div>
            </div>
        </div>
    );
};

export default page;