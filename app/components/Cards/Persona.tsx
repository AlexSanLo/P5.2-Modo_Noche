import React from "react";

export default function Persona() {
  return (
    <div className="items-start bg-card-bg-light dark:bg-card-bg-dark rounded-lg p-4 h-full">
      <div className="flex flex-col items-center bg-card-bg-light dark:bg-card-bg-dark">
        <img
          src="/assets/Persona.png"
          alt="Persona"
          className="rounded-lg object-cover w-full h-auto mb-4"
        />

        <div className="md:pb-7 md:text-base lg:text-lg w-full flex md:flex-col lg:flex-row justify-between mb-1.5 px-2 sm:px-4 text-card-h2-light dark:text-card-h2-dark">
          <span className="w-50 text-left font-bold">NAME:</span>
          <h1 className="text-left flex-1">35</h1>
        </div>

        <div className="md:pb-7 md:text-base lg:text-lg w-full flex md:flex-col lg:flex-row justify-between mb-1.5 px-2 sm:px-4 text-card-h2-light dark:text-card-h2-dark">
          <span className="w-50 text-left font-bold">AGE:</span>
          <h1 className="text-left flex-1">Married, 2 kids</h1>
        </div>

        <div className="md:pb-7 md:text-base lg:text-lg w-full flex md:flex-col lg:flex-row justify-between mb-1.5 px-2 sm:px-4 text-card-h2-light dark:text-card-h2-dark">
          <span className="md:pe-1 w-50 text-left font-bold">EDUCATION:</span>
          <h1 className="text-left flex-1">University of Calgary</h1>
        </div>

        <div className="md:pb-7 md:text-base lg:text-lg w-full flex md:flex-col lg:flex-row justify-between mb-1.5 px-4 text-card-h2-light dark:text-card-h2-dark">
          <span className="md:pe-3 w-50 text-left font-bold">LOCATION:</span>
          <h1 className="text-left flex-1">Calgary, Alberta</h1>
        </div>

        <div className="md:pb-7 md:text-base lg:text-lg w-full flex md:flex-col lg:flex-row justify-between mb-1.5 px-4 text-card-h2-light dark:text-card-h2-dark">
          <span className="w-50 text-left font-bold">JOB:</span>
          <h1 className="text-left flex-1">Family Physician</h1>
        </div>

        <div className="md:pb-7 md:text-base lg:text-lg w-full flex md:flex-col lg:flex-row justify-between mb-1.5 px-4 text-card-h2-light dark:text-card-h2-dark">
          <span className="w-50 text-left font-bold">HOBBIES:</span>
          <h1 className="text-left flex-1">Hiking and dancing</h1>
        </div>
      </div>
    </div>
  );
}