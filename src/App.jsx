import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/function'
import Footer from './components/Footer'


function App() {
const [workout, setworkout] = useState(null)
const [poison, setpoison] = useState("individual");
const [muscles, setmuscles] = useState([]);
const [goals, setgoals] = useState("strength_power");  

function updateWorkout(){
  if(muscles.length<1){
    return
  }
  let newworkoutt = generateWorkout({poison,muscles,goals})
  setworkout(newworkoutt)

  window.location.href='#workout'
}


  return (
    <main className='flex flex-col min-h-screen bg-gradient-to-r from-slate-800 to-slate-950  text-white text-sm sm:text-base'>
    <Hero/>
    <Generator
    poison={poison}
    setpoison={setpoison}
    muscles={muscles}
    setmuscles={setmuscles}
    goals={goals} 
    setgoals={setgoals}
    updateWorkout={updateWorkout}
    />

    {workout && (<Workout workout={workout}/>)}
    <Footer/>
    </main>
  )
}

export default App
