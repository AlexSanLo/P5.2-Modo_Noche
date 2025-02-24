import type { Route } from "./+types/home";
import ThemeToggle from "~/components/ThemeToggle/ThemeToggle";
import Persona from "~/components/Cards/Persona";

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

        <div className="col-span-1 col-start-12 py-3">
          <ThemeToggle />
        </div>
      </div>
    </section>

    <section className="container mx-auto">
      <div className="grid grid-cols-12 gap-4 me-20 ms-20">
        <div className="col-span-4 col-start-1">
          <Persona />
        </div>
        
        <div className="col-start-5 col-span-8">
          <div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
}
