import AIcon from "@components/icons/AIcon.astro";
import AsmIcon from "@components/icons/AsmIcon.astro";
import CardsIcon from "@components/icons/CardsIcon.astro";
import ReactIcon from "@components/icons/ReactIcon.astro";
import RocetIcon from "@components/icons/RocetIcon.astro";
import RustIcon from "@components/icons/RustIcon.astro";
import SIcon from "@components/icons/SIcon.astro";
import SvelteIcon from "@components/icons/SvelteIcon.astro";
import TailwindIcon from "@components/icons/TailwindIcon.astro";
import VercelIcon from "@components/icons/VercelIcon.astro";
import dedent from "dedent";

interface Project {
  name: string;
  description: string;
  tech: { name: string; icon: any; url: string }[];
  icon: any;
  source?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    name: "Sedenion",
    description: dedent`Sedenion is an open-source computer algebra system (CAS) project with a
                        primary objective of developing an efficient and dependable CAS calculator.
                        It has a Rust core and a React front-end. The core handles the expensive
                        computations and the front-end provides a user-friendly interface. Sedenion
                        supports community plugins and is designed to be easily extensible. It also has
                        the ability to add custom themes. The project is still in its early stages and is
                        actively being developed.`,
    tech: [
      { name: "Rust", icon: RustIcon, url: "https://www.rust-lang.org/" },
      { name: "React", icon: ReactIcon, url: "https://reactjs.org/" },
      { name: "Wasm", icon: AsmIcon, url: "https://webassembly.org/" },
      { name: "Tailwind", icon: TailwindIcon, url: "https://tailwindcss.com/" },
      { name: "Vercel", icon: VercelIcon, url: "https://vercel.com/" },
    ],
    icon: SIcon,
    url: "https://sedenion.net",
    source: "https://github.com/sedenionCas",
  },
  {
    name: "Flashcards",
    description: dedent`Flashcards is a simple flashcard web app that allows users to create, edit, and delete
                        flashcards. It uses local storage to store the flashcards. It uses spaced repetition and
                        is designed to handle large amounts of data. The app is built with svelte and styled 
                        with tailwindcss. It has both light and dark theme inferred for user's system preferences.
                        I built the app because I was unsatisfied with the existing flashcard
                        apps. I wanted a simple app that I could use to create flashcards quickly and study them effectively.`,
    tech: [
      { name: "Svelte", icon: SvelteIcon, url: "https://reactjs.org/" },
      { name: "Tailwind", icon: TailwindIcon, url: "https://tailwindcss.com/" },
      { name: "Vercel", icon: VercelIcon, url: "https://vercel.com/" },
    ],
    icon: CardsIcon,
    url: "https://flashcards.antok.dev/",
    source: "https://github.com/antoKeinanen/flashcards",
  },
  {
    name: "This portfolio",
    description: dedent`This is my personal portfolio website. It is built with Astro, a static site generator.
                        The site is designed to be fast, accessible, and responsive. It is built with modern web
                        technologies and follows best practices. The site is designed to be simple and minimalistic.
                        It is designed to showcase my work and provide information about me.`,
    tech: [
      { name: "Astro", icon: RocetIcon, url: "https://astro.build/" },
      { name: "Tailwind", icon: TailwindIcon, url: "https://tailwindcss.com/" },
      { name: "Vercel", icon: VercelIcon, url: "https://vercel.com/" },
    ],
    icon: AIcon,
    url: "https://antok.dev",
    source: "https://github.com/antoKeinanen/portfolio",
  },
];
