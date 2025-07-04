import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/ProjectData'; // wherever your data is

function ProjectDetail() {
  const { id } = useParams(); // get /projects/:id
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-red-500 font-bold">Project not found 😢</h2>
        <Link to="/projects" className="text-blue-600 underline mt-4 block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-20 py-12 bg-white min-h-screen">
      <Link to="/projects" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold text-blue-700 mb-6">{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg shadow-lg w-full max-h-[400px] object-cover mb-6"
      />

     <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed mb-6">
        {project.fullDescription.split('\n').map((line, index) => {
          const trimmedLine = line.trim();
          // Remove bullet characters if they exist (like '•' or '🏆') at start:
          const cleanedLine = trimmedLine.replace(/^[-•\s]+/, '');
          return cleanedLine ? <li key={index}>{cleanedLine}</li> : null;
        })}
      </ul>


      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded hover:bg-black transition"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}

export default ProjectDetail;
