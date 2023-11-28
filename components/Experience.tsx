import React, { useState } from "react";

import SectionTitle from "./SectionTitle";

import Totvs from "./works/Totvs";
import BiancoAzure from "./works/BiancoAzure";
import Freelancer from "./works/Freelancer";
import Discord from "./works/Discord";

const Experience = () => {
  const [workTotvs, setWorkTotvs] = useState(true);
  const [workBiancoAzure, setWorkBiancoAzure] = useState(false);
  const [workFreelancer, setWorkFreelancers] = useState(false);
  const [workDiscord, setWorkDiscord] = useState(false);

  const handleTotvs = () => {
    setWorkTotvs(true);
    setWorkBiancoAzure(false);
    setWorkFreelancers(false);
    setWorkDiscord(false);
  };

  const handleBiancoAzure = () => {
    setWorkTotvs(false);
    setWorkBiancoAzure(true);
    setWorkFreelancers(false);
    setWorkDiscord(false);
  };

  const handleFreelancer = () => {
    setWorkTotvs(false);
    setWorkBiancoAzure(false);
    setWorkFreelancers(true);
    setWorkDiscord(false);
  };
  const handleDiscord = () => {
    setWorkTotvs(false);
    setWorkBiancoAzure(false);
    setWorkFreelancers(false);
    setWorkDiscord(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I've worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul>
          <li
            onClick={handleTotvs}
            className="border-1-2 border-1-textGreen text-textDark bg-transparent 
            hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
          >
            Totvs
          </li>
          <li
            onClick={handleBiancoAzure}
            className="border-1-2 border-1-hoverColor text-textDark bg-transparent 
            hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
          >
            Bianco Azure
          </li>
          <li
            onClick={handleFreelancer}
            className="border-1-2 border-1-hoverColor text-textDark bg-transparent 
            hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
          >
            Freelancer
          </li>
          <li
            onClick={handleDiscord}
            className="border-1-2 border-1-hoverColor text-textDark bg-transparent 
            hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium"
          >
            Discord
          </li>
        </ul>
        {workTotvs && <Totvs />}
        {workBiancoAzure && <BiancoAzure />}
        {workFreelancer && <Freelancer />}
        {workDiscord && <Discord />}
      </div>
    </section>
  );
};

export default Experience;
