import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import projects from "/data.js";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project niet gevonden</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="absolute top-20 left-6">
        <button
          onClick={() => navigate("/projects")}
          className="bg-violet-400 text-white px-4 py-2 rounded-md"
        >
          Terug naar projecten
        </button>
      </div>
      
      <section className="px-6 md:px-24 py-24">
        <h1 className="text-5xl font-bold text-violet-400 mb-6">{project.title}</h1>
        <div className="space-y-4">
          {project.details.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        {project.image && <img src={project.image} alt={project.title} className="rounded-lg mt-4" />}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 underline mt-4 block"
          >
            Bekijk de code
          </a>
        )}
      </section>
      <footer className="py-10 text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} Faith Incorporated. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
