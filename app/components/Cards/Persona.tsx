import React from "react";

export default function Persona() {
  return (
    <div className="items-start bg-card-bg-light dark:bg-card-bg-dark rounded-lg p-4">
      <div className="flex flex-col items-center bg-card-bg-light dark:bg-card-bg-dark">
        <img
          src="/assets/Persona.png"
          alt="Persona"
          className="rounded-lg object-cover w-full h-auto mb-4"
        />

        <div className="text-lg w-full flex justify-between mb-1.5 px-4 font-bold text-card-h2-light dark:text-card-h2-dark">
          <span className="w-50 text-left">NAME:</span>
          <h1 className="text-left flex-1">35</h1>
        </div>

        <div className="text-lg w-full flex justify-between mb-1.5 px-4 font-bold text-card-h2-light dark:text-card-h2-dark">
          <span className="w-50 text-left">AGE:</span>
          <h1 className="text-left flex-1">Married, 2 kids</h1>
        </div>

        <div className="text-lg w-full flex justify-between mb-1.5 px-4 font-bold text-card-h2-light dark:text-card-h2-dark">
          <span className="w-50 text-left">EDUCATION:</span>
          <h1 className="text-left flex-1">University of Calgary</h1>
        </div>

        <div className="text-lg w-full flex justify-between mb-1.5 px-4 font-bold text-card-h2-light dark:text-card-h2-dark">
          <span className="w-50 text-left">LOCATION:</span>
          <h1 className="text-left flex-1">Calgary, Alberta</h1>
        </div>

        <div className="text-lg w-full flex justify-between mb-1.5 px-4 font-bold text-card-h2-light dark:text-card-h2-dark">
          <span className="w-50 text-left">JOB:</span>
          <h1 className="text-left flex-1">Family Physician</h1>
        </div>

        <div className="text-lg w-full flex justify-between mb-1.5 px-4 font-bold text-card-h2-light dark:text-card-h2-dark">
          <span className="w-50 text-left">HOBBIES:</span>
          <h1 className="text-left flex-1">Hiking and dancing</h1>
        </div>
      </div>
    </div>
  );
}
