import Image from 'next/image'
import React from 'react'
import ContactmeForm from './ContactmeForm'

const ContactMe = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#121121]">
      <h1 className="heading">
        {" "}
        <span className="gradient-text">Contact </span>
        Me
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[4rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[2rem] items-center justify-center">
        <div >
            <h1 className="text-[20px] md:text-[30px]  mb-[1.5rem] capitalize text-white font-semibold">Let&apos;s Connect</h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal ">I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
            <div className='flex gap-4 mt-6'>
            <a href=" https://github.com/aryavl " target="_blank" rel="noopener noreferrer">
            <Image src={"/imagesport/icons/github1.png"} alt={"Github"} width={50} height={50} />
            </a>
            <a className='mt-1' href="https://www.linkedin.com/in/arya-v-l-frontend-developer/ " target="_blank" rel="noopener noreferrer">
            <Image src={"/imagesport/icons/linkedin.png"} alt={"Github"} width={40} height={40} />
            </a>
            <a className='' href="https://stackoverflow.com/users/15112872/arya-v-l " target="_blank" rel="noopener noreferrer">
            <Image src={"/imagesport/icons/stack.png"} alt={"Github"} width={45} height={60} />
            </a>
            </div>
        </div>
        <div  className="text-white">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Please fill in the form below</p>

            <ContactmeForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactMe