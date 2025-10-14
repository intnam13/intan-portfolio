import React from 'react'
import ProjectCard from './ProjectCard'

const sampleProjects = [
  {
    id: 'cypress-fw',
    title: 'Cypress Automation Framework',
    desc: 'End-to-end test framework using Cypress, CI integration, page objects, and custom commands.',
    tech: ['Cypress', 'Node', 'GitHub Actions'],
    link: 'https://github.com/yourusername/cypress-framework'
  },
  {
    id: 'postman-tests',
    title: 'Postman API Test Collection',
    desc: 'API test suites with chained requests, environment variables, and Newman reports.',
    tech: ['Postman', 'Newman'],
    link: 'https://github.com/yourusername/postman-apis'
  },
  {
    id: 'report-dashboard',
    title: 'Test Results Viewer',
    desc: 'Static UI to display test run results and flaky test analysis.',
    tech: ['React', 'Charting'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {sampleProjects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}