import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Olá, meu nome é
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Gabriel Bispo.{" "}
        <span className="text-textDark mt-2 lgl:mt-4">
          I Develop improvements
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        Sou um desenvolvedor Full-Stack com mais de 5 anos de experiência na
        área de desenvolvimento de software. Possuo uma base sólida tanto em
        front-end quanto em back-end,e sou especializado na criação de
        aplicações web intuitivas e responsivas. Utilizo frameworks modernos
        para melhorar a funcionalidade e a performance das aplicações,
        garantindo uma experiência de usuário excepcional e um código eficiente.{" "}
        <a href="https://github.com/Bixpo" target="_blank">
          <span
            className="text-textGreen inline-flex 
        relative cursor-pointer 
        h-7 group"
          >
            Saiba mais
          </span>
        </a>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen
      rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        <a href="https://github.com/Bixpo" target="_blank">
        Confira meus projetos!
        </a>
      </motion.button>
    </section>
  );
};

export default Banner;
