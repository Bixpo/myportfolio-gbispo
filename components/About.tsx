import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Gabriel from "@/public/assets/images/Gabriel.jpeg";

import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { DiAngularSimple } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { IoLogoWordpress } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiCsharp } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-6">
          <p>
            Olá! Meu nome é Gabriel Da Cruz Bispo e tenho um profundo interesse
            em criar soluções para a internet. Meu fascínio pelo desenvolvimento
            começou em 2018,<br></br>quando resolvi entender como são construídas as
            interfaces e os sites que utilizamos. Desde então, dediquei-me a
            aprofundar meus conhecimentos nessa área e a desenvolver projetos
            próprios, aplicando minhas ideias e criatividade.
          </p>
          <p>
            Avançando até hoje, tive o privilégio de trabalhar em uma empresa
            grande de software onde fui aperfeiçoando{" "}
            <span className="text-textGreen">
              minhas skills e competências.
            </span>
          </p>
          <p>
            Sempre estou buscando ficar por dentro de atualizações de
            bibliotecas de
            <br />
            software para sempre estar por dentro das {""}
            <span className="text-textGreen">
              atualizações das linguagens de programação.
            </span>
          </p>
          <p>
            Aqui estão algumas tecnologias com as quais tenho trabalhado
            recentemente:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-1 mt-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <RiJavascriptFill />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <RiReactjsFill />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <BiLogoTypescript />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiMongodb />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbBrandNextjs />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbBrandNodejs />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiAngularSimple />
              </span>
              Angular
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiSass />
              </span>
              Sass
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoLogoWordpress />
              </span>
              WordPress
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiTailwindcss />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiMysql />
              </span>
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <DiGithubBadge />
              </span>
              Git
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiDotnet />
              </span>
              .NET
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiNestjs />
              </span>
              NestJS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiCsharp />
              </span>
              C#
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/4 h-80 relative group">
          <div className="absolute w-full h-full rounded-lg overflow-hidden">
            <div className="w-full h-full relative z-20 flex">
              <Image
                className="rounded-lg object-cover"
                src={Gabriel}
                alt="profileImg"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
