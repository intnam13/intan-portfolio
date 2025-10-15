import React from "react";
import ProjectCard from "./ProjectCard";

const sampleProjects = [
  {
    id: "cypress-fw",
    title: "Cypress Automation Framework (TBD)",
    desc: "End-to-end test framework using Cypress, CI integration, page objects, and custom commands.",
    tech: ["Cypress", "Node", "GitHub Actions"],
    link: "#",
  },
  {
    id: "postman-tests",
    title: "Postman API Test Collection (TBD)",
    desc: "API test suites with chained requests, environment variables, and Newman reports.",
    tech: ["Postman", "Newman"],
    link: "#",
  },
  {
    id: "report-dashboard",
    title: "Test Results Viewer (TBD)",
    desc: "Static UI to display test run results and flaky test analysis.",
    tech: ["React", "Charting"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sampleProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
