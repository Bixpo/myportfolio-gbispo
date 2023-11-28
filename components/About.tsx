import SectionTitle from "./SectionTitle";
import Image from "next/image";

import { gabriel } from "@/public/assets";

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

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-6">
          <p>
            Olá! meu nome é Gabriel Da Cruz Bispo e gosto de criar coisas que
            vivem na internet. Meu interesse em desenvolvimento web começou em
            2018, quando decidi descobrir como é feito sites da internet e suas
            animações isso fez com que eu busca-se aprender mais sobre essa área
            e sobre como é desenvolver algo próprio e de seu jeito.
          </p>
          <p>
            Avançando até hoje, tive o privilégio de trabalhar em uma empresa
            grande de software onde fui aperfeiçando{" "}
            <span className="text-textGreen">
              minhas skills e competências.
            </span>
          </p>
          <p>
            Sempre estou buscando ficar por dentro de atualizações de
            bibliotecas de software para sempre estar por dentro das {""}
            <span className="text-textGreen">
              atualizações das linguagens de programação.
            </span>
          </p>
          <p>
            Aqui estão algumas tecnologias com as quais tenho trabalhado
            recentemente:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
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
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-0.50 -top-10 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={gabriel}
                alt="profileImg"
              />
              <div
                className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/5
               rounded-md top-0 left-0 group-hover:bg-transparent duration-300"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
