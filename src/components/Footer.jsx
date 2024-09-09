import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between mt-3 bg-slate-950 p-4 boxshadow items-center '>
        <div className="logo">
        <i className="fa-solid fa-dumbbell text-2xl "> LiftLab </i>
        </div>
        
        <div className=" flex socialIcons px-10 gap-4">
        <a href="https://www.linkedin.com/in/mamoor-sultan/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in text-2xl duration-200 cursor-pointer hover:text-blue-600"></i>
        </a>
        <a href="https://nextgen-bytes.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-globe text-2xl duration-200 cursor-pointer hover:text-blue-600"></i>
        </a>
        </div>
        

    </div>
  )
}

export default Footer