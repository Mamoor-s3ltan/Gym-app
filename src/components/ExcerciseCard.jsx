import React ,{useState} from 'react'

const ExcerciseCard = (props) => {
    
    
    const {excercise,i} = props
    const [SetsCompleted, setSetsCompleted] = useState(0)
     
    function handleSetIncrement(){
        setSetsCompleted((SetsCompleted+1) %6)
    }



  return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap'>
   <div className='flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4'>
    <h4 className='text-3xl  hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400'>
        0{i+1}
    </h4>
    <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center'>{excercise.name.replaceAll("_", " ")}</h2>
  <p className='text-sm  text-slate-400 capitalize'>{excercise.type}</p>
   </div>
   <div className='flex flex-col'>
    <h3 className='text-slate-400 text-sm'>Muscle Groups</h3>
    <p className='capitalize'>{excercise.muscles.join(" & ")}</p>
   </div>

   <div className='flex flex-col gap-2  bg-slate-950 rounded'>
    {excercise.description.split('___').map((val)=>{
return(
    <div className='text-sm'>
        {val}
    </div>
)
    })}

   </div>

   <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
   {['reps' , 'rest', 'tempo'].map((info)=>{
    return(
        <div key={info} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full'>
         <h3 className='capitalize text-slate-400 text-sm'>{info === 'reps'?`${excercise.unit}`: info}</h3>
         <p className='font-medium'>{excercise[info]}</p>
        </div>
    )
   })}
   <button onClick={handleSetIncrement} className='flex flex-col p-2 rounded border-[1.5px] duration-200  border-solid border-blue-900 hover:border-blue-600 w-full'>
    <h3 className='text-slate-400 text-sm capitalize'>Sets Completed</h3>
    <p className='font-medium'>{SetsCompleted}/5</p>
   </button>
   </div>
    </div>
  )
}

export default ExcerciseCard