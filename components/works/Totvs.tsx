import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Totvs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        DEV <span className="text-textGreen tracking-wide">@Totvs</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Out 2021 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Trabalhei como menor-aprendiz durante 1 ano e meio atuando em várias
          áreas sendo elas: documentador de software, tester e desenvolvedor
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Como documentador de software, eu tinha que documentar como foi
          realizado o desenvolvimento e todos os testes dele junto com o time de
          desenvolvimento e teste para que ficasse salvo em uma documentação do
          software.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Como tester eu realizava testes na aplicação para encontar bugs e
          assim passar para o desenvolvedor corrigi-los. Como desenvolvedor eu
          comecei a participar de projetos pequenos na empresa criando tabelas,
          inputs e chegando a mexer no web-desing de sites.
        </li>
      </ul>
    </motion.div>
  );
};

export default Totvs;
