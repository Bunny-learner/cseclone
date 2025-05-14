import React from 'react'
import './about.css'
import Footer from './footer'

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-heading">
        About Us
      </h2>
      <div className="about-section">
        <h3 className="about-subheading">Department Background and Vision</h3>
        <p className="about-text">
          Established in 2016, the Department of Computer Science and Engineering (CSE) at IIT Dharwad is one of the institute's foundational departments. It offers a comprehensive suite of academic programs, including a four-year B.Tech., a two-year M.Tech. (launched in 2024), and two research-intensive programs—M.S. (by Research) and Ph.D.—in Computer Science and Engineering. Beginning from the academic year 2025–26, the M.S. (by Research) program will be renamed as M.Tech. by Research to better reflect its structure and rigor.
        </p>
      </div>
      <div className="about-section">
        <h3 className="about-subheading">Academic Programs</h3>
        <p className="about-text">
          In addition, the department offers an interdisciplinary B.Tech. program in Mathematics and Computing in collaboration with the Department of Mathematics, a minor program in Data Science and Artificial Intelligence, jointly with the Department of Electrical, Electronics, and Communication Engineering, and a minor program in Computer Science.
        </p>
      </div>
      <div className="about-section">
        <h3 className="about-subheading">Research Areas</h3>
        <p className="about-text"></p>
        <p className="about-subsubheading">Theoretical Foundations</p>
        <p className="about-text">
          This area includes research in logic, graph theory, and algorithms—fundamental aspects of computer science that provide a theoretical foundation for computation and problem-solving techniques.
        </p>

        <p className="about-subsubheading">Systems</p>
        <p className="about-text">
          Research in systems encompasses computer architecture, operating systems, compilers, and parallel and distributed computing, focusing on improving the performance, scalability, and reliability of computer systems.
        </p>

        <p className="about-subsubheading">Networks</p>
        <p className="about-text">
          The department is at the forefront of research in cutting-edge 4G/5G/6G cellular networks, IoT networks, network protocols, security, and AI/ML-driven network management. We also explore edge/fog computing, vehicular communication (V2X), and network slicing/virtualization.
        </p>

        <p className="about-subsubheading">Artificial Intelligence and Machine Learning (AI/ML)</p>
        <p className="about-text">
          In this area, the department emphasizes applied machine learning, deep learning, optimization, evolutionary computation, generative modeling, and data science, with a focus on solving real-world problems using AI.
        </p>
      </div>
      <div className="about-section">
        <h3 className="about-subheading">Interdisciplinary Research</h3>
        <p className="about-text">
          In addition, the department is involved in several interdisciplinary research domains such as cyber-physical systems, smart grids, healthcare technologies, natural language processing, scientific computing, and blockchain systems—addressing contemporary challenges in cybersecurity, distributed computing, and intelligent systems.
        </p>
      </div>
      <div className="about-section">
        <h3 className="about-subheading">Curriculum and Innovation</h3>
        <p className="about-text">The B.Tech. and M.Tech. curricula are thoughtfully designed to strike a balance between strong foundational knowledge and advanced specialization tracks, aligned with faculty research expertise and the evolving demands of the computing discipline. Courses are continuously updated to reflect the latest developments in academic research and industry practices.
<p className="about-text"> The department is deeply committed to fostering innovation and impactful research. It maintains robust collaborations with leading academic institutions, government agencies, and industry partners. Supported by state-of-the-art laboratories, high-performance computing infrastructure, and a vibrant research ecosystem, students and scholars are well-equipped to translate ideas into impactful prototypes and deployable solutions.</p>
<p className="about-text"> The department's research culture is further evidenced by frequent contributions to top-tier journals and prestigious international conferences, highlighting its expanding global research footprint.</p></p>
         

         
      </div>
      
    </div>
  )
}
