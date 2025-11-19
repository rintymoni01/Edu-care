import React from 'react';
import { LuPhoneCall } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

import { RiFacebookCircleFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

import { FaBehance } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

const TopHeader = () => {
    return (
        <div className='bg-black py-2 text-white'>
 <div className='flex justify-between container mx-auto px-20 items-center'>
               <div className='flex  gap-7'>
<div className='flex gap-1 items-center'>
    <LuPhoneCall  className='text-xl'/>
    <p className=''>+880183468****</p>
</div>
<div className='flex gap-1 items-center'>
    <FaLocationDot className='text-xl  '/>
<p className=''>Morden Rangpur , Dhaka Mohakhali</p>
</div>
 </div>
<div className='flex gap-4 items-center'>
    <p>Follow Us :</p>
    <RiFacebookCircleFill className='text-xl  '/>
    <FaSquareInstagram className='text-xl  '/>
    <FaBehance className='text-xl  '/>
   <FaTwitter className='text-xl  '/>
<FaSquareYoutube className='text-xl  '/>
</div>
            </div>
        </div>
    );
};

export default TopHeader;