import { LuGithub } from "react-icons/lu";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { FaTwitch } from "react-icons/fa";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Bixpo" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <LuGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-bispo-684b86238"
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialLinkedin />
          </span>
        </a>
        <a
          href="https://instagram.com/bixpo_bixpo?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <SlSocialInstagram />
          </span>
        </a>
        <a href="https://www.twitch.tv/bixpo_bixpo" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <FaTwitch />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
