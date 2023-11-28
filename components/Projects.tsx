import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { pokedex } from "@/public/assets";
import { portfolioReactSass } from "@/public/assets";
import { momentsAngular } from "@/public/assets";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Projects I created" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project one */}
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://pokedexv1-plum.vercel.app"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={pokedex}
                  alt="pokedex"
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between 
         items-end text-right xl:-ml-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2x1 font-bold">PokeDex</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Como podemos ver eu criei um site que simula como{""}{" "}
                <span className="text-textGreen">seria uma PokeDex</span>,onde
                possui os detalhes dos pokemon e sua id.
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
              md:gap-5 justify-between text-textDark"
              >
                <li>NextJs</li>
                <li>Typescript</li>
                <li>JavaScript</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Bixpo/pokedexv1"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://pokedexv1-plum.vercel.app"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project two */}
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Bixpo/reactsass"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={portfolioReactSass}
                  alt="portfolioReactSass"
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between 
         items-end text-right  z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2x1 font-bold">PortfolioSass</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                Desenvolvi um portfolio usando sass como forma de estudo.{""}{" "}
                <span className="text-textGreen">É um modelo bem básico</span>
                ,onde o intuito foi de treinar e aprender mais sobre a linguagem
                de programação Sass.
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
              md:gap-5 justify-between text-textDark"
              >
                <li>React</li>
                <li>Typescript</li>
                <li>Sass</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Bixpo/reactsass"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project three */}
        <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Bixpo/Moments"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={momentsAngular}
                  alt="momentsAngular"
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between 
         items-end text-right xl:-ml-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2x1 font-bold">MomentsAngular</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Projeto que desenvolvi atrávez de um curso para me aperfeiçoar
                no framework Angular.{""}{" "}
                <span className="text-textGreen">Moments e um site</span>,onde
                você pode upar uma imagem de um momente que você teve com
                legenda, possui também uma parte para outras pessoas adicionarem
                comentários em seus momentos.
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
              md:gap-5 justify-between text-textDark"
              >
                <li>Angular</li>
                <li>Typescript</li>
                <li>JavaScript</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Bixpo/Moments"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
