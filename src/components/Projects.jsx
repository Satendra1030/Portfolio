import React, { useState } from "react";

import jobportal from "../assets/jobportal.jpg";
import portfolio from "../assets/portfolio.jpg";
import toDoList from "../assets/to-do-list.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Job Portal Website",
      description: "A React job portal with clean UI and routing.",
      tech: "React, Tailwind CSS",
      tags: ["React", "Frontend", "UI"],
      type: "Personal Project",
      image: jobportal,
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with modern UI, responsive design, and contact form integration.",
      tech: "React, Tailwind CSS",
      tags: ["React", "Portfolio"],
      type: "Personal Project",
      image: portfolio,
      github: "https://github.com/Satendra1030/Jobportfolio",
      live: "https://www.satendra.com.np/",
    },
    {
      title: "To-Do App",
      description: "Task manager with local storage support.",
      tech: "JavaScript",
      tags: ["JavaScript", "Logic"],
      type: "Academic Project",
      image: toDoList,
      github: "https://github.com/Satendra1030/my-todo-app",
      live: "https://my-todo-app-flame-gamma.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="bg-black py-16 px-6 text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-500">Projects</span>
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer transition transform hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">

              {/* Title + Badge */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <span className="text-[10px] px-2 py-1 bg-gray-800 text-gray-300 rounded-full">
                  {project.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-3">
                {project.description}
              </p>

              {/* Tech */}
              <p className="text-xs text-gray-500 mb-3">
                <strong>Tech:</strong> {project.tech}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 bg-black border border-gray-700 text-gray-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between text-sm">
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-white transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Live
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-xl max-w-lg w-full p-6 text-white"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedProject.image}
              className="w-full h-56 object-cover rounded-lg mb-4"
              alt=""
            />

            <h2 className="text-2xl font-bold mb-2">
              {selectedProject.title}
            </h2>

            <p className="text-gray-400 mb-3">
              {selectedProject.description}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              <strong>Tech:</strong> {selectedProject.tech}
            </p>

            {/* Tags in modal */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-1 bg-black border border-gray-700 text-gray-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between">
              <a
                href={selectedProject.github}
                className="text-gray-400 hover:text-white"
              >
                GitHub
              </a>

              <a
                href={selectedProject.live}
                className="text-blue-400 hover:text-blue-300"
              >
                Live Demo
              </a>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-4 w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded transition"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;