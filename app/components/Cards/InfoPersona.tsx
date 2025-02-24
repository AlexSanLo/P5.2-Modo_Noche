import React from "react";

interface InfoProps {
  titulo: string; 
  contenido?: string;
  lista?: Array<string>;
}

export default function InfoPersona({titulo, contenido="", lista=[]} : InfoProps) {
  return (
    <div className="bg-card-bg-light dark:bg-card-bg-dark p-4 rounded-lg">
      <h2 className="font-bold text-2xl mb-2 text-card-h2-light dark:text-card-h2-dark">
        {titulo}
      </h2>
      {contenido !== "" && (
        <p className="text-card-paragraph-light dark:text-card-paragraph-dark text-xl">
          {contenido}
        </p>
      )}

      {lista.length > 0 && (
        <ul className="text-card-paragraph-light dark:text-card-paragraph-dark text-xl">
          {lista.map((item, index) => (
            <li key={index} className="flex items-center pb-3">
              <div className="bg-list-bullet-light dark:bg-list-bullet-dark rounded-2xl py-0.5 w-5 me-2"></div>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}