import React from 'react';
import Image from 'next/image';
import phone from '@/assets/phone.png';
import mail from '@/assets/mail.png';

const Contact = () => {
  return (
    <div
      className='max-w-[1200px] mx-auto flex flex-col lg:flex-row text-white/80 p-6 md:p-12 lg:space-x-12 space-y-12 lg:space-y-0 rounded-lg bg-gradient-to-b from-[#1b1b2f] to-[#2B1942] shadow-lg'
      id="contact"
    >
      {/* Contact Information Section */}
      <div className='flex justify-center items-center w-full lg:w-1/2'>
        <ul className='space-y-8'>
          <li className='flex items-center'>
            <Image src={phone} alt="phone" className='h-[40px] w-[40px] md:h-[60px] md:w-[60px] mr-4' />
            <p className='text-lg md:text-xl'> +91 97 70 32 71 90</p>
          </li>
          <li className='flex items-center'>
            <Image src={mail} alt="mail" className='h-[40px] w-[40px] md:h-[60px] md:w-[60px] mr-4' />
            <p className='text-lg md:text-xl'> ramkumarraghuwanshi812@gmail.com</p>
          </li>
        </ul>
      </div>

      {/* Contact Form Section */}
      <div className='bg-white/10 p-6 md:p-10 rounded-xl shadow-lg w-full lg:w-1/2'>
        <h2 className='text-3xl md:text-4xl font-bold text-orange-400 mb-4'>Let's Connect</h2>
        <p className='text-white/70 mb-8 text-lg'>Send me a message, and let's schedule a call!</p>
        <form
          className='space-y-6'
          action="https://getform.io/f/awngjrzb"
          method='POST'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* First Name */}
            <input
              type='text'
              name='first_name'
              className='bg-[#1b1b2f] rounded-xl p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200'
              placeholder='First Name'
              required
            />
            {/* Last Name */}
            <input
              type='text'
              name='last_name'
              className='bg-[#1b1b2f] rounded-xl p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200'
              placeholder='Last Name'
              required
            />
            {/* Email */}
            <input
              type='email'
              name='email'
              className='bg-[#1b1b2f] rounded-xl p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200'
              placeholder='Email'
              required
            />
            {/* Phone */}
            <input
              type='tel'
              name='phone'
              className='bg-[#1b1b2f] rounded-xl p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200'
              placeholder='Phone'
              required
            />
          </div>
          {/* Message */}
          <textarea
            name='message'
            className='bg-[#1b1b2f] w-full rounded-xl p-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200'
            placeholder='Your Message'
            rows={5}
            required
          />
          {/* Submit Button */}
          <button
            type='submit'
            className='bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 w-full font-semibold text-lg md:text-xl rounded-xl transition duration-200'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
