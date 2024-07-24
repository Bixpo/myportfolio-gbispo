import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Freelancer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        DEV <span className="text-textGreen tracking-wide">@FREE</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        jan 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Faço serviços por fora desde 2022.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Sempre busco ir atrás de clientes oferecendo meus serviços como
          Dev.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Já ajudei na criação de um site e-commerce para uma marca de gin e
          auxiliei na criação do site institucional, sempre busco criar landing
          pages para apresentar para clientes, crio muitos projetos também
          pensando em um dia reutilizar eles para clientes.
        </li>
      </ul>
    </motion.div>
  );
};

export default Freelancer;
