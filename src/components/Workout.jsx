import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

const Workout = ({ workouts }) => {
  return (
    <SectionWrapper
      id={"workout"}
      header={"welcome to"}
      title={["The", "DANGER", "zone"]}
    >
      <div className="flex flex-col gap-4">
        {workouts.map((exercise, i) => {
          return <ExerciseCard exercise={exercise} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
