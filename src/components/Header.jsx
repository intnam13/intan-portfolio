import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header>
      <nav className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Vanilla Ice Cream</h1>
          <p className='text-sm text-neutral-400'>Software Development Engineer in Test | QA Engineer | Testing enthusiast</p>
        </div>
        <div className='space-x-4'>
          <a href='#about' className='text-sm hover:underline'>About</a>
          <a href='#projects' className='text-sm hover:underline'>Projects</a>
          <a href='#certs' className='text-sm hover:underline'>Certificates</a>
          <a href='#contact' className='text-sm hover:underline'>Contact</a>
        </div>
      </nav>
      <div className='mt-10 rounded-2xl p-8 bg-neutral-800/40 backdrop-blur-sm'>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className='text-2xl font-semibold'>Hello — I build reliable test automation.</h2>
          <p className='mt-3 text-neutral-300'>This is a starter portfolio where I showcase automation projects, test strategies, and results.</p>
        </motion.div>
      </div>
    </header>
  )
}