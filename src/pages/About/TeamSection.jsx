import { useState } from "react";

import Person1 from "../../assets/Img/About/About-5.jpg";
import Person2 from "../../assets/Img/About/About-8.jpg";
import Person3 from "../../assets/Img/About/About-9.jpg";
import Person4 from "../../assets/Img/About/About-10.jpg";
import Person5 from "../../assets/Img/About/About-11.jpg";

const teamData = [
  {
    title: "Founder & Managing Director",
    name: "Sevag Ohanian",
    label: "Direction & Vision",
    image: Person1,
    description:
      "Sevag leads Aquila with clarity and conviction, shaping the brand’s ethos and setting the bar for every guest experience. His role ensures that our standard of excellence is never compromised and that every journey reflects our deeper mission: travel as a refined, enriching art.",
  },
  {
    title: "Product Operations Lead",
    name: "Alexa Roman",
    label: "Product & Innovation",
    image: Person2,
    description:
      "Alexa oversees all product logistics and workflows, ensuring timely execution and innovation in every phase of the travel experience.",
  },
  {
    title: "Luxury Travel Design",
    name: "Marcus Liu",
    label: "Bespoke Travel Design",
    image: Person3,
    description:
      "Marcus curates custom travel experiences rooted in client passions, balancing creativity with operational mastery.",
  },
  {
    title: "Operations & Concierge",
    name: "Elena Costa",
    label: "Guest Experience",
    image: Person4,
    description:
      "Elena manages the concierge team, ensuring every detail is considered and every guest receives impeccable care.",
  },
  {
    title: "Destination Wedding Planner",
    name: "Isabelle Laurent",
    label: "Events & Celebrations",
    image: Person5,
    description:
      "Isabelle turns dreams into reality by designing and delivering unforgettable destination wedding experiences.",
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = teamData[activeIndex];

  return (
    <section className="relative bg-[#0A0024] text-white py-28 sm:h-[50rem] md:px-24 font-berlingske">
      <div className="text-center mb-14">
        <p className="text-xs tracking-widest uppercase font-neutra">
          Dedicated Divisions
        </p>
        <h2 className="text-3xl font-semibold mt-2 mb-4">
          The Structure of care.
        </h2>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Aquila’s strength lies in focus.
          <br />
          Each journey type is managed by a specialized team with deep expertise
          in their craft. From weddings and leisure to corporate and concierge,
          our structure ensures no detail is missed— and no experience is ever
          repeated.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-start sm:justify-center gap-2 sm:gap-6 md:gap-10 mb-10 sm:mb-16 md:mb-20 flex-nowrap sm:flex-wrap md:flex-wrap border-b border-white/10 overflow-x-auto scrollbar-hide">
        {teamData.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`text-center py-1.5 sm:py-3 md:py-4 md:px-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-wide transition-all duration-200 relative min-w-[10rem] sm:min-w-[100px] md:min-w-0 ${
              activeIndex === idx ? "text-white font-semibold" : "text-gray-400"
            }`}
            aria-label={`Select ${item.title}`}
          >
            <div className="leading-tight mb-1">
              {item.title.split(" ").slice(0, -1).join(" ")}
              <br />
              {item.title.split(" ").slice(-1)}
            </div>
            {activeIndex === idx && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-[#F97316] rounded-full mt-2" />
            )}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-row item-center md:items-start gap-3 md:gap-20">
        <div className="md:absolute -bottom-50 left-6 md:left-48 w-[70%] h-[20rem]">
          <img
            src={active.image}
            alt={active.name}
            className="md:w-[300px] h-full md:h-[400px] object-cover rounded-sm shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div className="w-[50%] md:ml-[35rem] mt-0">
          <p className="text-[10px] font-neutra uppercase tracking-widest mb-2">
            {active.label}
          </p>
          <h3 className="text-md md:text-xl font-semibold mb-4">
            {active.name}
          </h3>
          <p className="text-xs md:text-sm leading-relaxed max-w-xl">
            {active.description}
          </p>
          <button className="text-xs md:text-sm text-orange-400 mt-6 hover:underline uppercase font-neutra">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
