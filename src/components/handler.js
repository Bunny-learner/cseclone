import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home.js'
import Academics from './academics.js'
import Admissions from './admissions.js'
import Research from './research.js'
import About from './about.js'
import Join from './joinasfaculty.js'
import Contact from './contactus.js'
import People from './people.js'

export default function Handler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/joinasfaculty" element={<Join />} />
      <Route path="/people" element={<People />} />
      <Route path="/research" element={<Research />} />
      <Route path="/contactus" element={<Contact />} />
    </Routes>
  )
}
