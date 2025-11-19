import Link from 'next/link';
import React from 'react';
import { BiCategory } from "react-icons/bi";

const EndHeader = () => {
    return (
        <div className='border border-gray-200 mt-2 '>
           <div className='flex gap-20  items-center container mx-auto px-20 '>
<div className='gap-8 flex'>
    <div className='flex gap-2 items-center font-bold text-gray-700'>
    <BiCategory /> 
<p>CATEGORYS  </p> 
</div>
<p className='h-15 w-0.5 bg-gray-300 '></p>


</div>
<div className='flex  gap-12 text-gray-700 font-bold'>
    <Link className='hover hover:text-[#39B8AD]' href="/">HOME</Link>
<Link className='hover hover:text-[#39B8AD]' href="/shop">SHOP</Link>
<Link className='hover hover:text-[#39B8AD]' href="/page">PAGES</Link>
<Link className='hover hover:text-[#39B8AD]' href="/blog">BLOG</Link>
<Link className='hover hover:text-[#39B8AD]' href="/contact">CONTACT</Link>
            </div> 
</div>
        </div>
    );
};

export default EndHeader;