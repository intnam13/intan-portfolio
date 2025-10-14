import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className='min-h-screen bg-neutral-900 text-neutral-100 font-sans leading-relaxed'>
      <div className='max-w-4xl mx-auto px-6 py-12'>
        <Header />
        <main className='space-y-20 mt-12'>
          <section id='about' className='prose prose-invert'>
            <h2>About Me</h2>
            <p>
              Hi world! <strong>Intan is here</strong>, a QA Engineer with 8+ years of experience in manual and automation testing (Postman, Selenium, Katalon, Cypress). Skilled in BDD frameworks, regression, and functional testing. Passionate about delivering high-quality software and improving user experience.
            </p>
            <p>
              <a href='/public/intan_namira_resume.pdf' download className='inline-block mt-4 px-4 py-2 rounded-lg border border-neutral-700 hover:bg-neutral-800'>
                Download My Resume here
              </a>
            </p>
          </section>
          <Projects />
          <Certificates />
          <Contact />
        </main>
      </div>
    </div>
  )
}