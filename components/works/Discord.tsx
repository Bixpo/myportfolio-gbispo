import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Discord = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        DEV <span className="text-textGreen tracking-wide">@Discord</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2023 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Neste ano comecei a me aventurar em criar bot para ser usado no
          discord de forma de estudo.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Estou desenvolvendo um bot que poderá ser usado em vários servidores
          de discord.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Bot esse no qual ele está sendo desenvoldido para auxilar na
          administração dos servidores e também no entreterimento do servidor
          tendo interação com o público dele em formas de comandos.
        </li>
      </ul>
    </motion.div>
  );
};

export default Discord;
