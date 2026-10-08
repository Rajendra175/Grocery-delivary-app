import React from 'react'
import { assets } from '../assets/assets.js'

const Contact = () => {
  return (
    <div className='mt-16 flex flex-col'>
          <div className="flex flex-col items-end w-max">
            <p className="text-2xl font-medium uppercase">Contact details</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'></div>
          </div> 
           <div className='flex flex-col-reverse md:flex-row items-center mt-20 gap-10'>
                {/* Store details */}
                <div className='flex-1 max-w-md space-y-2 text-gray-600'>
                    <div>
                        <p className='font-medium text-gray-800 text-lg mb-1'>Store Address:</p>
                        <p>123 Market Street, Koramangala</p>
                        <p>Bengaluru, Karnataka 560034</p>
                    </div>

                    <div>
                        <p className='font-medium text-gray-800 text-lg mb-1'>Phone:</p>
                        <p>+91 98765 43210</p>
                    </div>

                    <div>
                        <p className='font-medium text-gray-800 text-lg mb-1'>Email:</p>
                        <p>support@yourstore.com</p>
                    </div>

                    <div>
                        <p className='font-medium text-gray-800 text-lg mb-1'>Store Hours:</p>
                        <p>Monday - Saturday, 9:00 AM to 9:00 PM</p>
                        <p>Sunday, 10:00 AM to 6:00 PM</p>
                    </div>
                </div>

                {/* Image */}
                <div className='flex-1 max-w-lg'>
                    <img
                        className='rounded-3xl w-150 object-cover'
                        src={assets.add_address_iamge}
                        alt='Our store'
                    />
                </div>
            </div>
            
        </div>
  )
}

export default Contact