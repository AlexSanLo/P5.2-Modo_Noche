import type { Route } from "./+types/home";
import ThemeToggle from "~/components/ThemeToggle/ThemeToggle";
import Persona from "~/components/Cards/Persona";
import InfoPersona from "~/components/Cards/InfoPersona";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
    <section className="container mx-auto pb-6 mt-10">
      <div className="grid grid-cols-12 gap-4 me-20 ms-20">
        <div className="col-span-4 col-start-1">
          <h2 className="text-5xl font-bold text-main-header-light dark:text-main-header-dark mb-0.5">
            User Persona
          </h2>
          <hr className="bg-primary-light dark:bg-primary-dark py-1 border-0 rounded-3xl w-40"/>
        </div>

        <div className="col-span-1 col-start-12 py-3 ms-auto">
          <ThemeToggle />
        </div>
      </div>
    </section>

    <section className="container mx-auto pb-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 me-20 ms-20">
        <div className="col-span-12 md:col-span-4 col-start-1">
          <Persona />
        </div>
        
        <div className="col-span-12 md:col-start-5 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoPersona titulo="Bio" contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquam. Nullam nec purus nec libero ultricies aliquam." />
          <InfoPersona titulo="Personality" contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquam. Nullam nec purus nec libero ultricies aliquam." />
          <InfoPersona titulo="Pain points" contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquam. Nullam nec purus nec libero ultricies aliquam." />
          <InfoPersona titulo="Goals" contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquam. Nullam nec purus nec libero ultricies aliquam." />
        </div>
      </div>
    </section>
    </>
  );
}
