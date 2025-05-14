import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Handler from './handler.js';
import Footer from './footer.js';
import "./main.css";

export default function Main() {
  const searchdata = [
  { title: "Annual Technical Symposium", description: "Join us for two days of technical talks, workshops, and networking opportunities.", href: "/home" },
  { title: "Research Colloquium", description: "Faculty and students present their latest research findings in computer science.", href: "/research" },
  { title: "Industry Connect Program", description: "Connect with industry leaders and explore internship and job opportunities.", href: "/industry-connect-program" },
  { title: "Hackathon 2023", description: "A 24-hour coding competition with exciting prizes and learning opportunities.", href: "/home" },
  { title: "Welcome Message", description: "Welcome to the Department of Computer Science and Engineering. Our department is committed to academic excellence, cutting-edge research, and industry collaboration.", href: "/home" },
  { title: "About the Department", description: "The Department of Computer Science and Engineering at IIT Dharwad offers undergraduate, postgraduate, and doctoral programs in various domains of computing.", href: "/people" },
  { title: "Student Highlights", description: "Our students recently won the Smart India Hackathon 2024 and published papers in top-tier conferences like NeurIPS and CVPR.", href: "/student-highlights" },
  { title: "Academics", description: "The academic programs at our department include undergraduate, postgraduate, and doctoral programs, focusing on various areas of computer science.", href: "/academics" },
  { title: "timetable", description: "", href: "/timetable" },
  { title: "Curriculum", description: "", href: "/curriculum" },
  { title: "courses", description: "", href: "/courses" },
  { title: "rules", description: "", href: "/rules" },
  { title: "faq", description: "", href: "/about" },
  { title: "Academics faq", description: "", href: "/about" },
  { title: "Admissions", description: "The admissions process for our undergraduate and postgraduate programs is highly competitive. Learn more about eligibility criteria and deadlines.", href: "/admissions" },
  { title: "Admissions FAQ", description: "", href: "/about" },
  { title: "B.Tech", description: "4-year Undergraduate Program", href: "/home" },
  { title: "M.Tech", description: "2-year Postgraduate Program", href: "/home" },
  { title: "MS (Research)", description: "Research-based Master's Program", href: "/research" },
  { title: "PhD", description: "Doctoral Program", href: "/home" },
  { title: "BS-MS Dual Degree", description: "5-year Integrated Program", href: "/bs-ms-dual-degree" },
  { title: "International Students", description: "Admission for Foreign Nationals", href: "/international-students" },
  { title: "Join as Faculty", description: "Join as Faculty at IIT Dharwad’s Department of Computer Science and Engineering. Build your academic career and make contributions to cutting-edge research and education.", href: "/joinasfaculty" },
  { title: "About IIT Dharwad", description: "IIT Dharwad is one of the new IITs established in 2016 in Karnataka. It aims to contribute to the technological advancement of the nation.", href: "/about" },
  { title: "Research Facilities", description: "We offer state-of-the-art facilities, including labs dedicated to AI, ML, Systems, Security, and more.", href: "/research" },
  { title: "Salary and Benefits", description: "Competitive salary packages with numerous benefits like relocation allowance, professional development allowance, and more.", href: "/salary-benefits" },
  { title: "How to Apply", description: "Follow the online application process by submitting the required documents, including your CV, publications, and teaching statement.", href: "/how-to-apply" },
  { title: "Research", description: "Our department conducts cutting-edge research in various domains including artificial intelligence, machine learning, and data science.", href: "/research" },
  { title: "Research Labs", description: "Explore research labs focused on AI, ML, Cybersecurity, and more.", href: "/research" },
  { title: "Publications", description: "Find recent publications from our faculty members on various research topics.", href: "/publications" },
  { title: "Research Areas", description: "Learn about different research areas like AI, Networking, Cybersecurity, and HCI.", href: "/research" },
  { title: "Patents", description: "View patents and intellectual property developed by faculty members.", href: "/patents" },
  { title: "Artificial Intelligence and Machine Learning", description: "Research on deep learning, computer vision, reinforcement learning, and AI ethics.", href: "/research" },
  { title: "Cybersecurity Research", description: "Explore research on network security, cryptography, and privacy technologies.", href: "/cybersecurity-research" },
  { title: "Human-Computer Interaction", description: "Investigating novel user interfaces and user experience design.", href: "/human-computer-interaction" },
  { title: "Machine Learning for Wireless Networks", description: "A publication on using deep learning for resource allocation in next-gen networks.", href: "/ml-wireless-networks" },
  { title: "Quantum-Resistant Cryptographic Protocols", description: "Research on secure protocols for IoT and quantum-resistant cryptography.", href: "/research" },
  { title: "Faculty", description: "Faculty Members", href: "/faculty" },
  { title: "Staff", description: "Staff", href: "/staff" },
  { title: "Former Members", description: "Former Members", href: "/former-members" },
  { title: "Contact Us", description: "Get in touch the department for any queries or collaborations.", href: "/contact" },
  { title: "Department Office", description: "For general inquiries, please contact the Department Office located in Room 210, Academic Block B.", href: "/department-office" },
  { title: "Email", description: "Reach us via email at cse_office@iitdh.ac.in for academic or administrative assistance.", href: "/contactus" },
  { title: "Phone Number", description: "Call us at +91-836-2212-900 during working hours (9 AM – 5 PM, Monday to Friday).", href: "/contactus" },
  { title: "Faculty Directory", description: "Browse our faculty directory to find email addresses, office locations, and research interests.", href: "/contactus" },
  { title: "Visit Us", description: "IIT Dharwad, WALMI Campus, Belur Industrial Area, Dharwad – 580011, Karnataka, India.", href: "https://iitdh.ac.in" }
];


  const [temp, setTemp] = useState(false);
  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState(searchdata); // Added filteredData state

  const fun = (e) => {
    setTemp(false)
    const clickedText = e.target.textContent;
    const elements = document.getElementsByClassName('links');

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].textContent === clickedText) {
        elements[i].style.backgroundColor = '#f0f8ff';
        elements[i].style.color = '#8a2be2';
      } else {
        elements[i].style.backgroundColor = 'white';
        elements[i].style.color = 'black';
      }
    }
  };

  const showResults = (e) => {
    setTemp(true);
    const query = e.target.value;
    setText(query);

    const filtered = searchdata.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered); 
  };

  useEffect(() => {
    if (window.location.pathname === "/home" || window.location.pathname === "/") {
      const element = document.getElementById('home');
      if (element) {
        element.style.backgroundColor = '#f0f8ff';
        element.style.color = '#8a2be2';
      }
    }
  }, []);

  return (
    <>
      <div className="heading">
        <a href="https://www.iitdh.ac.in/"><img className='ilogo' src="i.png" alt="" /></a>
        <h3>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h3>
        <input
          type="text"
          onChange={showResults}
          placeholder="Search.."
          className="search"
        />
      </div>

      <div className="content">
        <div className="navbar">
          <Link className="links" onClick={fun} id="home" to="/home">Home</Link>
          <Link className="links" onClick={fun} to="/about">About</Link>
          <Link className="links" onClick={fun} to="/academics">Academics</Link>
          <Link className="links" onClick={fun} to="/admissions">Admissions</Link>
          <Link className="links" onClick={fun} to="/joinasfaculty">Join As Faculty</Link>
          <Link className="links" onClick={fun} to="/people">People</Link>
          <Link className="links" onClick={fun} to="/research">Research</Link>
          <Link className="links" onClick={fun} to="/contactus">ContactUs</Link>
        </div>

        {!temp ? (
          <div className="body">
            <Handler />
            <Footer />
          </div>
        ) : (
          <div className="body">
            <h2 style={{margin:15}}>Search Results For: {text}</h2>
            <div className="abouty">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div key={index}>
                  <a className="result" href={item.href}>{item.title}</a>
                  <p className="desc">{item.description}</p>
                </div>

              ))
            ) : (
              <p>No results found.</p>
            )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
