import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectList = ({ projects }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => navigate(`/projects/${project.id}`)}
        >
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-2">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
