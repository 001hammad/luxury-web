import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full bg-[#C1D8C3] font-mono text-black text-xs'>
      <div className='flex justify-center items-center pt-3'>
      <i className='bx bx-chevron-up'></i>
      </div>
      <div className='flex justify-center items-center'>
      <h6 className='mb-4' data-aos="fade-up">Top</h6>
      </div>
      <div className='flex justify-center items-center'>
      <h6 className='mb-3'>FAQ</h6>
      </div>
      <div className='flex justify-center items-center'>
      <h5 className='mb-3'>Shipping and Returns</h5>
      </div>
      <div className='flex justify-center items-center'>
      <h5 className='mb-3'>Terms and Conditions</h5>
      </div>
      <div className='flex justify-center items-center mb-3 '>
      <i className='bx bxl-facebook'></i>
      <i className='bx bxl-instagram-alt'></i>
      <i className='bx bxl-play-store' ></i>
      <i className='bx bxl-chrome' ></i>
      </div>
      <div className='flex justify-center items-center pb-3'>
      <p className='text-xs'> &copy; 2024 by Luxury Living. Powered and secured by Hammad</p>
      </div>
    </div>
  )
}

export default Footer
