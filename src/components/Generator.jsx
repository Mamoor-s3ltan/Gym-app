import React from "react";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";

function Header(props) {
  const { index, title, description } = props;
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

const Generator = (props) => {
  const [showModal, setshowModal] = useState(false);
  const{poison, setpoison, muscles, setmuscles, goals, setgoals,updateWorkout}= props;
  
  function ToggleModal() {
    setshowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
  
    if (muscles.includes(muscleGroup)) {
        setmuscles(muscles.filter(val => val !== muscleGroup))
        return
    }

    if (muscles.length > 2) {
        return
    }

    if (poison !== 'individual') {
        setmuscles([muscleGroup])
        setshowModal(false)
        return
    }

   

    setmuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
        setshowModal(false)
    }

}
  

  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["it's", "Huge", "o'clock"]}
      id={'generate'}
    >
      <Header
        index={"01"}
        title={"Pick your Poison"}
        description={"Select the workout you wish to enjoy."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setmuscles([])
                setpoison(type);
              }}
              className={
                "bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg " +
                (type === poison ? " border-blue-600" : " border-blue-400")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles for anhilation."}
      />
      <div className="bg-slate-950 border p-3 border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={ToggleModal}
          className="relative flex items-center justify-center p-3"
        >
          <p className="capitalize"> {muscles.length == 0? 'Select Muscle Groups':muscles.join(' ')} </p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={
                    "hover:text-blue-400 duration-200 px-4 " +
                    (muscles.includes(muscleGroup) ? " text-blue-400" : " ")
                  }
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setgoals(scheme);
              }}
              className={
                "bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg  " +
                (scheme === goals ? " border-blue-600" : " border-blue-400")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button  func={updateWorkout}  text={"Formulate"}></Button>
    </SectionWrapper>
  );
};

export default Generator;
