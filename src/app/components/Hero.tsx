'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import pic1 from "../../../public/pic1.jpg";
import pic2 from "../../../public/pic2.png";
import pic3 from "../../../public/pic3.png";
import pic4 from "../../../public/pic4.png";
import pic5 from "../../../public/pic5.png";
import pic6 from "../../../public/pic6.png";
import pic7 from "../../../public/pic7.png";
import pic8 from "../../../public/pic8.png";
import pic9 from "../../../public/pic9.png";
import pic10 from "../../../public/pic10.png";
import Form from '../components/Form';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out'
    });
  }, []);


  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-1 ">
        <Image src={pic1} alt="item-photo" className="w-full h-96" />
        <h1 className="flex justify-center text-lg items-center p-8 font-mono">Shop</h1>
      </div>
      <div className="flex justify-center items-center space-x-24">
        <div className="flex flex-col items-center">
          <Image src={pic2} alt="product1" width={160} />
          <p className="text-xs font-mono">Study Table</p>
          <p className="text-xs text-green-900 font-mono">
            <s className="text-red-800 font-mono">1000</s> 599 PKR
          </p>
          <p className="border-2 text-xs border-black p-1 font-mono">Add to Card</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={pic3} alt="product2" width={160} />
          <p className="text-xs font-mono">Guest Chair</p>
          <p className="text-xs text-green-900 font-mono">
            <s className="text-red-800 font-mono">5000</s> 2999 PKR
          </p>
          <p className="border-2 text-xs border-black p-1 font-mono">Add to Card</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={pic4} alt="product3" width={180} />
          <p className="text-xs font-mono">PC chair</p>
          <p className="text-xs font-mono text-green-900">
            <s className="text-red-800 font-mono">3000</s> 1599 PKR
          </p>
          <p className="border-2 text-xs border-black p-1 font-mono">Add to Card</p>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-24">
        <div className="flex flex-col items-center">
          <Image src={pic5} alt="product4" width={160} />
          <p className="text-xs font-mono">Pak Lamp</p>
          <p className="text-xs text-green-900 font-mono">
            <s className="text-red-800 font-mono">1000</s> 499 PKR
          </p>
          <p className="border-2 text-xs border-black p-1 font-mono">Add to Card</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={pic6} alt="product5" width={160} />
          <p className="text-xs font-mono">Sofa cussions</p>
          <p className="text-xs text-green-900 font-mono">
            <s className="text-red-800 font-mono">700</s> 399 PKR
          </p>
          <p className="border-2 text-xs border-black p-1 font-mono">Add to Card</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={pic7} alt="product6" width={160} />
          <p className="text-xs font-mono">Wooden stair Bed</p>
          <p className="text-xs text-green-900">
            <s className="text-red-800 font-mono">8000</s> 7999 PKR
          </p>
          <p className="border-2 text-xs border-black p-1 font-mono">Add to Card</p>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-24">
        <div className="flex flex-col items-center">
          <Image src={pic8} alt="product7" width={160} />
          <p className="text-xs font-mono">Gold Fanoos</p>
          <p className="text-xs text-green-900 font-mono">
            <s className="text-red-800 font-mono">2000</s> 1399 PKR
          </p>
          <p className="border-2 text-xs border-black p-1 font-mono">Add to Card</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={pic9} alt="product8" width={160} />
          <p className="text-xs font-mono">Antique Bulb</p>
          <p className="text-xs text-green-900 font-mono">
            <s className="text-red-800 font-mono">10000</s> 4999 PKR
          </p>
          <p className="border-2 text-xs border-black mt-3 p-1 font-mono">Add to Card</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={pic10} alt="product9" width={210} />
          <p className="text-xs mt-3 font-mono">Sofa</p>
          <p className="text-xs text-green-900 font-mono">
            <s className="text-red-800 font-mono">400</s> 299 PKR
          </p>
          <p className="border-2 text-xs border-black mt-3 p-1 font-mono">Add to Card</p>
        </div>
      </div>
      <div className="bg-[#C1D8C3] mt-2 h-64">
  <h1 className="flex justify-center items-center pt-16 font-mono" data-aos="fade-up">ABOUT</h1>
  <p className="text-center  text-xs text-gray-600 w-1/2 mx-auto mt-12 mb-2 font-mono"> 
    I&apos;m a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. Im a great place for you to tell a story and let your users know a little more about you. 
  </p>
</div>
<div className="flex justify-center items-center bg-[#C1D8C3]" data-aos="fade-up">
  <i className='bx bx-water text-black w-8 size-9' style={{ display: 'flex', justifyContent: 'center', fontSize: 'large' }}></i>
  <i className='bx bxs-leaf text-black w-8 size-9' style={{ display: 'flex', justifyContent: 'center', fontSize: 'large' }} ></i>
  <i className='bx bxs-webcam text-black w-8 size-9'   style={{ display: 'flex', justifyContent: 'center', fontSize: 'large' }}></i>
  </div>
  <Form/>
    </div>
  );
};

export default Hero;
