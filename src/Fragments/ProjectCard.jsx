import React from "react";

const ProjectCard = ({ img, imgalt, title, description, demoLink, githubLink }) => (
  <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between w-full min-h-[370px]">
    <img
      src={img}
      alt={imgalt}
      className="w-full h-[180px] object-cover rounded-lg mb-3"
    />
    <div className="flex-grow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
    <div className="flex gap-4 mt-4">
      <a href={demoLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
        🔗 Live
      </a>
      <a href={githubLink} target="_blank" rel="noreferrer" className="text-gray-700 hover:underline">
        💻 GitHub
      </a>
    </div>
  </div>
);

export default ProjectCard;
