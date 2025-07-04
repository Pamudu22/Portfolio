import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/ProjectData';

function Projects() {
  return (
    <div className="px-6 md:px-20 py-12 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
