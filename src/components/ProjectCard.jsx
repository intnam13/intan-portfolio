import React from "react";
import PropTypes from "prop-types";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="p-4 rounded-lg border border-neutral-700 bg-neutral-800/30">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{project.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-neutral-700/40">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-sm hover:underline"
        >
          View Repo <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

// Add prop-types validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
