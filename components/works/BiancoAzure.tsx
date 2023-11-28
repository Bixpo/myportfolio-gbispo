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
        TI <span className="text-textGreen tracking-wide">@BiancoAzure</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Out 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Bianco Azure é uma empresa que vende aparelhos respiratórios.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Trabalho como TI deles oferecendo suporte tanto na parte de infra como
          na parte de desenvolvimento.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          {/* Ja mexi no servidor deles ajudando a montar, configurar câmeras,
          ajudar a estruturar site do e-commerce, blog, criar software para
          estoque, sistema de visitas, estruturar cabeamento na empresa, montar
          switch e roteador, entre outras tarefas. */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
          corrupti, dolores eligendi aperiam qui facilis harum, debitis
          repellendus maxime possimus. Beatae optio eligendi porro
          necessitatibus error consequuntur, ex quas
        </li>
      </ul>
    </motion.div>
  );
};

export default BiancoAzure;
