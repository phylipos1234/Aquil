import React from "react";
import ExplorerBanner from "../../assets/Img/Explorer/Explorer_Banner.jpg";
import Explorer1 from "../../assets/Img/Explorer/Explorer-1.jpg";
import Explorer2 from "../../assets/Img/Explorer/Explorer-2.jpg";
import Explorer3 from "../../assets/Img/Explorer/Explorer-3.jpg";
import Explorer4 from "../../assets/Img/Explorer/Explorer-4.jpg";
import Explorer5 from "../../assets/Img/Explorer/Explorer-5.jpg";
import Explorer6 from "../../assets/Img/Explorer/Explorer-6.jpg";
import Explorer7 from "../../assets/Img/Explorer/Explorer-7.jpg";

const DestinationCard = ({ image, title, subtitle, description }) => (
  <div className="font-berlingske overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
    <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="bg-white p-4 sm:p-6">
      <div className="pb-4 mb-4">
        {subtitle && (
          <h4 className="text-[10px] sm:text-xs font-thin mb-4 tracking-wide uppercase font-neutra">
            {subtitle}
          </h4>
        )}
        <h3
          className="text-lg sm:text-xl font-bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <p className="text-xs leading-relaxed">{description}</p>

      <p className="mt-8 text-xs text-[#FF7338] font-thin tracking-widest uppercase cursor-pointer hover:underline font-neutra">
        Explore
      </p>
    </div>
  </div>
);

const Explorer = () => {
  const destinations = [
    {
      id: 1,
      image: Explorer1,
      title: "The Secret Villages <br/> of Andalusia.",
      subtitle: "HIDDEN GEMS",
      description:
        "Wander whitewashed hamlets tucked between olive groves and forgotten trails. This journey invites you to reconnect with Spain’s rural heart—quiet, slow, and impossibly charming.",
    },
    {
      id: 2,
      image: Explorer2,
      title: "Tuscany Through <br/> the Seasons.",
      subtitle: "SEASONAL JOURNEYS",
      description:
        "Savor the slow charm of Tuscany across spring vineyards, summer hilltop feasts, and autumn truffle hunts. Our seasonal itinerary captures the region’s evolving beauty with poetic precision.",
    },
    {
      id: 3,
      image: Explorer3,
      title: "Private Access <br/> in Seville.",
      subtitle: "EXCLUSIVE ACCESS",
      description:
        "Step beyond the guidebook with exclusive access to private patios, artisan ateliers, and palace courtyards. Seville’s soul unfolds when seen through Aquila’s lens of intimacy and depth.",
    },
    {
      id: 4,
      image: Explorer4,
      title: "Cultural Immersion <br/> in Lisbon.",
      description:
        "From private Fado performances to hands-on azulejo painting, experience Lisbon through stories, textures, and voices that tourists rarely hear.",
    },
    {
      id: 5,
      image: Explorer5,
      title: "Bordeaux for the <br/> Curious Palate.",
      subtitle: "GASTRONOMIC TRAVEL",
      description:
        "Taste your way through Bordeaux’s finest terrains with private cellar tours, vineyard lunches, and intimate winemaker encounters curated for the refined epicurean.",
    },
    {
      id: 6,
      image: Explorer6,
      title: "Hidden Switzerland <br/> by Rail.",
      subtitle: "SCENIC ROUTES",
      description:
        "Glide through alpine passes and lakeside hamlets aboard private carriages and scenic trains. A journey through Switzerland’s untold beauty—beyond the brochure.",
    },
  ];

  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[100vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${ExplorerBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </section>

      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                image={destination.image}
                title={destination.title}
                subtitle={destination.subtitle}
                description={destination.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex flex-col lg:flex-row items-center justify-between text-center bg-[#EEF5FD] my-6 sm:my-12 lg:my-20 py-8 sm:py-12 lg:py-36 px-4 sm:px-6 lg:mr-20 max-w-full sm:max-w-4xl lg:max-w-5xl mx-auto">
        <div className="lg:absolute lg:-left-[20rem] w-full lg:w-auto">
          <img
            src={Explorer7}
            alt="Clelia Romano"
            className="w-full h-64 sm:h-80 lg:h-[30rem] object-contain lg:object-cover"
          />
        </div>

        <div className="lg:w-1/2 h-full flex flex-col justify-center px-4 sm:px-6 lg:pr-20 lg:pl-4 lg:ml-[30rem] font-berlingske mt-6 lg:mt-0">
          <p className="text-[#0A0024] text-[10px] sm:text-[11px] font-thin tracking-wide uppercase font-neutra">
            tailored experiences
          </p>

          <h1 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mt-2 text-[#0A0024] leading-snug">
            Curate extraordinary <br /> Journeys.
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-[16px] text-[#0A0024] leading-relaxed max-w-md mx-auto">
            Thoughtfully Designed Experiences <br /> Tailored for Your Clients.
          </p>

          <p className="mt-4 sm:mt-5 text-sm sm:text-[16px] text-[#0A0024] leading-relaxed max-w-md mx-auto">
            Partner with Aquila to offer unparalleled <br />
            personalized travel experiences, seamlessly <br /> tailored to your
            client's unique desires and <br /> standards.
          </p>

          <p className="mt-8 sm:mt-12 text-xs text-[#FF7338] font-thin cursor-pointer hover:underline font-neutra">
            Request a Personalized Proposal
          </p>
        </div>
      </section>
    </div>
  );
};

export default Explorer;
