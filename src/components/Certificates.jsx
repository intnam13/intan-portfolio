import React from 'react'

const certs = [
  { id: 'c1', title: 'Cypress Fundamentals', issuer: 'Cypress.io' },
  { id: 'c2', title: 'ISTQB Foundation', issuer: 'ISTQB' }
]

export default function Certificates() {
  return (
    <section id='certs'>
      <h2>Certificates</h2>
      <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {certs.map(c => (
          <div key={c.id} className='p-4 rounded-lg border border-neutral-700 bg-neutral-800/20'>
            <strong>{c.title}</strong>
            <div className='text-sm text-neutral-400'>{c.issuer}</div>
          </div>
        ))}
      </div>
    </section>
  )
}