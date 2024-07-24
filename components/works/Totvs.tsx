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
        DE 24/11/20 A 22/04/22
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Desenvolvimento de softwares internos para a empresa
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Análise e teste de softwares para identificar e corrigir bugs e
          problemas de desempenho.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Documentação detalhada dos softwares após a fase de testes.
        </li>
      </ul>
    </motion.div>
  );
};

export default Totvs;
