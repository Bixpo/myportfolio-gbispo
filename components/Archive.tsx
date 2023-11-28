import React, { useState } from "react";
import ArchivesCard from "./ArchivesCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archives
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchivesCard
          title="Calendário"
          des=" Um Calenário que desenvolvi para adicionar em um projeto da empresa
          que trabalho atualmente, onde ele consegue marcar eventos nas datas
          desejadas e editar e remover"
          listItem={["Html", "Css", "JavaScript"]}
          link="https://github.com/Bixpo/calendario"
        />
        <ArchivesCard
          title="Calculadora"
          des=" Calculadora que desenvolvi atravéz de um curso para aprender um pouco mais sobre lógica."
          listItem={["Html", "Css", "JavaScript"]}
          link="https://github.com/Bixpo/CalculadoraJS"
        />
        <ArchivesCard
          title="ViaCEP"
          des="Mini projeto aonde eu clonei a Api do ViaCEP para puxar cep automáticamente."
          listItem={["Html", "Css", "JavaScript"]}
          link="https://github.com/Bixpo/ViaCEP"
        />
        <ArchivesCard
          title="Jogo do Mario"
          des="Mini game do mario aonde o propósito dele foi para ter uma noção de como poderia se criar um jogo a 
          partir do JavaScript"
          listItem={["Html", "Css", "JavaScript"]}
          link="https://github.com/Bixpo/jogomario"
        />
        <ArchivesCard
          title="Tédio da Noite"
          des="Modelo de Layout que eu desenvolvi totalmente responsivo e com darkmode, estáva em uma noite tédioza
          e com isso resolvi fazar algo para aprimorar minhas habilidade e estudar e esse layout foi desenvolvido."
          listItem={["Html", "Css", "JavaScript"]}
          link="https://github.com/Bixpo/layoutresponsive"
        />
        <ArchivesCard
          title="Tela do Prime Vídeo"
          des="Aqui eu resolvi copiar a tela do Prime video usando apenas Html e Css."
          listItem={["Html", "Css"]}
          link="https://github.com/Bixpo/TheBoys"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchivesCard
                title="CalculadoraC#"
                des="Calculadora que desenvolvi em C# para aprimorar minhas habilades no back-end e conseguir me desenvolver
          melhor em mais de uma áreas."
                listItem={["C#"]}
                link="https://github.com/Bixpo/Calculadora"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchivesCard
                title="LandingPageError"
                des="Uma landing page error 404, que fiz para adicionar em projetos, desenvolvi ela atrávez de um curso
          quando estáva aprimorando minhas habilidades dem css."
                listItem={["HTML", "CSS"]}
                link="https://github.com/Bixpo/LandingPageError"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchivesCard
                title="DarkMode"
                des="Neste projeto eu aprendi como desenvolver a função de DarkMode, era algo que eu sempre quis aprender
              a fazer para que nós meus projetos eu sempre pudesse colocalo sem nem uma dificuldade."
                listItem={["HTML", "CSS", "JavaScript"]}
                link="https://github.com/Bixpo/Darkmode"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchivesCard
                title="CloneGoogle"
                des="Este é um projeto aonde eu aprendi a clonar o Google, me diverti bastante apredendo a como clonar
              ele pois é algo muito divertido você ter o seu próprio Google."
                listItem={["HTML", "CSS", "JavaScript"]}
                link="https://github.com/Bixpo/CloneGoogle"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchivesCard
                title="LogoNetflix "
                des="Neste projeto eu fiz o logo da netflix em pró de aprimorar minhas skils como front-end,
              sempre busquei bastante me empenhar na parte do css para deixar a interface bonita."
                listItem={["HTML", "CSS"]}
                link="https://github.com/Bixpo/LogoNetflix"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchivesCard
                title="Tela de Cadastro"
                des="Uma tela de cadastro que desenvoli para aprender mais como fazia, uma tela de cadastro que poderia
              usar para estudar também e usar como portfolio."
                listItem={["HTML", "CSS", "JavaScript"]}
                link="https://github.com/Bixpo/Tela-de-Cadastro"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13] border
        border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13] border
          border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
