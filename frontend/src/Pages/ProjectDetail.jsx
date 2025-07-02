import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/ProjectData';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-center mt-10">Project not found</p>;

  return (
    <div className="px-6 md:px-20 py-12 bg-white min-h-screen">
      <Link to="/projects" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Projects</Link>
      <h1 className="text-4xl font-bold mb-4 text-blue-700">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full max-h-[400px] object-cover rounded mb-6" />
      <p className="text-lg mb-6">{project.fullDescription}</p>

      <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        {project.technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}

export default ProjectDetail;
