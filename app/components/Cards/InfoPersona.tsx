import React from "react";

interface InfoProps {
  titulo: string; 
  contenido: string;
}

export default function InfoPersona({titulo, contenido} : InfoProps) {
  return (
    <div className="bg-card-bg-light dark:bg-card-bg-dark p-4 rounded-lg">
      <h2 className="font-bold text-2xl mb-2 text-card-h2-light dark:text-card-h2-dark">
        {titulo}
      </h2>
      <p className="text-card-paragraph-light dark:text-card-paragraph-dark text-xl">
        {contenido}
      </p>
    </div>
  );
}