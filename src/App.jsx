import React, { useState } from "react";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import Generator from "./components/Generator";
import { generateWorkout } from "./utils/functions";

const App = () => {
  const [workouts, setWorkouts] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  const updateWorkout = () => {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goal });
    setWorkouts(newWorkout);

    window.location.href = '#workout'
  };
  return (
    <main className="min-h-screen  flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workouts && <Workout workouts={workouts} />}
    </main>
  );
};

export default App;
