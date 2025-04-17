import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import skills from '../components/Skills';

const Home = () => {
  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  const [showDescription, setShowDescription] = useState(false);
  const [lastSkillIndex, setLastSkillIndex] = useState(null);

  const getRandomSkill = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * skills.length);
    } while (randomIndex === lastSkillIndex);

    setCurrentSkill(skills[randomIndex]);
    setLastSkillIndex(randomIndex);
    setShowDescription(false);
  };

  const toggleDescription = (skill) => {
    setCurrentSkill(skill);
    setShowDescription(!showDescription);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <header className="flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold text-violet-400">Welkom op mijn Portfolio-Website!</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl text-center">
          Mijn naam is Koen Radenborg. 
          Ik ben 18 jaar oud. 
          Ik zit in het tweede leerjaar van Software Developer Creative Media Technologies, en vind dit heel leuk!
          Ik studeer in Schiedam, op het TCR, en woon in Zuidland, wat *zuid* ligt van Spijkenisse. Hier woon ik al sinds 2021.
          Ik heb mij diploma voor het MAVO, wat ik heb gekregen op Scala Rietvelden, in Spijkenisse. 
        </p>
      </header>

      <section className="py-0">
        <h2 className="text-4xl font-bold text-center text-violet-400 mb-6">Mijn Skills!</h2>
        <div className="text-center">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mx-auto max-w-xs">
            <h3
              className="text-xl font-semibold cursor-pointer"
              onClick={() => toggleDescription(currentSkill)} 
            >
              {currentSkill.name}
            </h3>
            
            {showDescription && (
              <p className="text-gray-300 mt-4">{currentSkill.description}</p>
            )}
          </div>

          <button
            onClick={getRandomSkill}
            className="mt-6 px-6 py-2 text-white bg-violet-500 rounded-lg hover:bg-violet-400 transition"
          >
            Toon een nieuwe skill
          </button>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-4xl font-bold text-center text-violet-400">Mijn projecten!</h2>
        <p className="mt-6 text-lg text-center text-gray-300 max-w-3xl mx-auto">
          In mijn projecten toon ik de vaardigheden die ik heb geleerd en de applicaties die ik heb gebouwd. Van interactieve webapplicaties tot dynamische bots, ik werk voortdurend aan het verbeteren van mijn programmeervaardigheden.
        </p>
        <div className="text-center mt-6">
          <a
            href="/projects"
            className="text-violet-400 hover:text-violet-500 text-xl font-semibold"
          >
            Bekijk mijn projecten &rarr;
          </a>
        </div>
      </section>

      <footer className="py-10 text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} Faith Incorporated. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
