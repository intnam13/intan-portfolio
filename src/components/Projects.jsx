import React from "react";
import ProjectCard from "./ProjectCard";

const sampleProjects = [
  {
    id: "cypress-fw",
    title: "Cypress Automation with BDD approach and Allure Report",
    desc: (
      <div>
        <p>This project automates testing for a Demo Website using:</p>
        <ul className="list-disc ml-5 mt-2 text-gray-300 text-sm space-y-1">
          <li>
            <strong>Cypress</strong> – End-to-end testing framework
          </li>
          <li>
            <strong>Cucumber (Gherkin)</strong> – BDD style scenarios (.feature files)
          </li>
          <li>
            <strong>Page Object Model (POM)</strong> – Organized selectors & actions
          </li>
          <li>
            <strong>Allure Reports</strong> – Beautiful test reports (HTML)
          </li>
        </ul>
      </div>
    ),
    tech: ["Cypress", "Cucumber", "Allure", "Javascript"],
    link: "https://github.com/intnam13/cypress-bdd-with-allure-report",
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
