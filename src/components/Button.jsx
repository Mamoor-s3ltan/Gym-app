import React from 'react'

const Button = (props) => {

const {text,func} = props
  return (
    <div>
         <button onClick={func} className='px-8 w-full mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueshadow duration-200 '><p>{text}</p></button>
    </div>
  )
}

export default Button