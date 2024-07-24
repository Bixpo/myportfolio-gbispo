import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const BiancoAzure = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        DEV Full-Stack{" "}
        <span className="text-textGreen tracking-wide">@BiancoAzure</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Out 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Desenvolvimento de aplicações completas para otimização de processos
          empresariais.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Responsável pelo desenvolvimento e manutenção de interfaces de usuário
          (front-end) e pela lógica de negócio e integração de sistemas
          (back-end).
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integração de aplicações com bancos de dados, garantindo a eficiência
          e segurança na manipulação dos dados.
        </li>
      </ul>
    </motion.div>
  );
};

export default BiancoAzure;
