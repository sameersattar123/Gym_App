import React, { useState } from "react";

const ExerciseCard = ({ exercise, i }) => {
  const [setsCompleted, setSetsCompleted] = useState(0);

  const handleSetIncrement = () => {
    setSetsCompleted((setsCompleted + 1) % 6);
  };
  return (
    <div className="p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4">
        <h4 className="hidden text-3xl sm:text-4xl sm:inline md:text-5xl font-semibold text-slate-400">
          0{i + 1}
        </h4>
        <h2 className="capatilize whitespace-nowrap truncate mx-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center ">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">{exercise.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm text-slate-400">Muscles Groups</h3>
        <p className="capitlaize">{exercise.muscles.join(" & ")}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm text-slate-400">Type</h3>
        <p className="capitlaize">{exercise.type}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm text-slate-400">Equipment</h3>
        <p className="capitlaize">{exercise.meta.equipment[0]}</p>
      </div>
      <div className="flex gap-4 text-xl">
        <h3 className="text-sm text-slate-400">Level</h3>
        {exercise.meta.level.map((val) => {
          return <div className="text-sm">{val}</div>;
        })}
      </div>

      <div className="flex flex-col rounded gap-2 bg-slate-950">
        <h3 className="text-sm text-slate-400">Description</h3>
        {exercise.description.split("___").map((val) => {
          return <div className="text-sm">{val}</div>;
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="border-[1.5px] border-solid border-slate-900 w-full' flex flex-col p-2 rounded"
            >
              <h3 className="capitalize text-slate-400 text-sm">
                {info === "reps" ? `${exercise.unit}` : info}
              </h3>
              <p className="font-medium text-center p-2">{exercise[info]}</p>
            </div>
          );
        })}
        <button
          onClick={handleSetIncrement}
          className="flex flex-col p-2 rounded border-[1.5px] border-solid border-blue-900 hover:border-blue-600 w-full duration-200"
        >
          <h3 className="text-slate-400 text-sm capitalize">Sets Completed</h3>
          <p className="font-medium">{setsCompleted}</p>
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
