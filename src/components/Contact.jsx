import React from 'react'

export default function Contact() {
  return (
    <section id='contact'>
      <h2>Contact</h2>
      <p className='mt-2 text-neutral-300'>Feel free to reach out:</p>
      <ul className='mt-4 space-y-2 text-neutral-300'>
        <li>GitHub: <a href='https://github.com/yourusername' target='_blank' rel='noreferrer' className='hover:underline'>yourusername</a></li>
        <li>LinkedIn: <a href='#' className='hover:underline'>your-profile</a></li>
        <li>Email: <a href='mailto:you@example.com' className='hover:underline'>you@example.com</a></li>
      </ul>
    </section>
  )
}