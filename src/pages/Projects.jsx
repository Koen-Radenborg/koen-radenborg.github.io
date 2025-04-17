import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProjectList from "../components/ProjectList";
import SearchBar from "../components/SearchBar";
import projects from "/data.js";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <section className="px-6 md:px-24 py-16">
        <h1 className="text-5xl font-bold text-violet-400 mb-6">Projecten</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProjectList projects={filteredProjects} />
      </section>
      <footer className="py-10 text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} Faith Incorporated. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Projects;
