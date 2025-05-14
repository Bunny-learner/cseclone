import React from 'react'
import './academics.css'

export default function Academics() {
  return (
    <>
      <div className="academics-container">
        <h2>Academics</h2>
        <p className="academics-description">Learn about our academic programs, courses, and resources for computer science and engineering students.</p>
        <div className="cards-grid">
          <div className="card">
            <h3 className="card-title">Time Table</h3>
            <p className="card-details">View Details</p>
          </div>
          <div className="card">
            <h3 className="card-title">Courses</h3>
            <p className="card-details">View Details</p>
          </div>
          <div className="card">
            <h3 className="card-title">Curriculum</h3>
            <p className="card-details">View Details</p>
          </div>
          <div className="card">
            <h3 className="card-title">Rules</h3>
            <p className="card-details">View Details</p>
          </div>
          <div className="card">
            <h3 className="card-title">FAQs</h3>
            <p className="card-details">View Details</p>
          </div>
        </div>


        <h2 className="timetable-title">Time Table</h2>


        <div className='schedule'>
          <div className="semester-schedule">
            <h3 >Current Semester Schedule</h3>
            <p className="schedule-description">Below is the timetable for the current semester. You can navigate through the pages, view details, and download the complete schedule.</p>
            <p className="pdf-viewer-info">Using simplified PDF viewer. For best experience, make sure you have a PDF viewer installed.</p>
          </div>

          <div className="pdf-viewer-placeholder">
          </div>

        </div>


        <div class="courses-section">
          <h2 className='timetable-title'>Courses</h2>
          <div class="courses-container">
            <div class="core-courses">
              <h3>Core Courses</h3>
              <ul>
                <li>
                  <span>CS301: Algorithms</span>
                  <p>Covers design and analysis of algorithms, complexity theory.</p>
                </li>
                <li>
                  <span>CS302: Computer Networks</span>
                  <p>Network architecture, protocols, and applications.</p>
                </li>
                <li>
                  <span>CS303: Operating Systems</span>
                  <p>OS principles, processes, memory management, and file systems.</p>
                </li>
                <li>
                  <span>CS304: Computer Architecture</span>
                  <p>Processor design, memory hierarchy, and I/O systems.</p>
                </li>
                <li>
                  <span>CS305: Database Systems</span>
                  <p>Database design, SQL, transaction processing, and recovery.</p>
                </li>
              </ul>
            </div>
            <div class="elective-courses">
              <h3>Elective Courses</h3>
              <ul>
                <li>
                  <span>CS401: Machine Learning</span>
                  <p>Supervised and unsupervised learning, neural networks.</p>
                </li>
                <li>
                  <span>CS402: Computer Graphics</span>
                  <p>2D/3D graphics, rendering, and visualization techniques.</p>
                </li>
                <li>
                  <span>CS403: Artificial Intelligence</span>
                  <p>Search, knowledge representation, planning, and reasoning.</p>
                </li>
                <li>
                  <span>CS404: Cryptography</span>
                  <p>Encryption, authentication, and security protocols.</p>
                </li>
                <li>
                  <span>CS405: Cloud Computing</span>
                  <p>Cloud architectures, virtualization, and distributed systems.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className='timetable-title'>Curriculum</h2>
        <div class="program-structure-section">

          <h2 id='btech'>B.Tech Program Structure</h2>
          <div class="first-year">
            <h3>First Year</h3>
            <p class="year-description">Foundation courses in mathematics, programming, and engineering principles.</p>
            <div class="semester-container">
              <div class="semester">
                <h4>Semester 1</h4>
                <ul>
                  <li>Calculus and Linear Algebra</li>
                  <li>Introduction to Programming</li>
                  <li>Digital Logic Design</li>
                  <li>Physics for Computing</li>
                  <li>Technical Communication</li>
                </ul>
              </div>
              <div class="semester">
                <h4>Semester 2</h4>
                <ul>
                  <li>Discrete Mathematics</li>
                  <li>Data Structures</li>
                  <li>Computer Organization</li>
                  <li>Probability and Statistics</li>
                  <li>Engineering Ethics</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="second-year">
            <h3>Second Year</h3>
            <p class="year-description">Core computer science subjects and fundamental theory.</p>
            <div class="semester-container">
              <div class="semester">
                <h4>Semester 3</h4>
                <ul>
                  <li>Design and Analysis of Algorithms</li>
                  <li>Object Oriented Programming</li>
                  <li>Computer Architecture</li>
                  <li>Formal Languages and Automata</li>
                  <li>Economics for Engineers</li>
                </ul>
              </div>
              <div class="semester">
                <h4>Semester 4</h4>
                <ul>
                  <li>Operating Systems</li>
                  <li>Database Management Systems</li>
                  <li>Computer Networks</li>
                  <li>Software Engineering</li>
                  <li>Technical Writing</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="download-button-container">
            <button class="download-button">Download Complete Curriculum PDF</button>
          </div>
        </div>

<br /><br />
<h2 className='timetable-title'>Academic Rules</h2>
        <div class="rules-section">
          <h3>Attendance Requirements</h3>
          <p>Students are required to maintain a minimum of 75% attendance in all courses. Failure to meet this requirement may result in a grade penalty or being barred from the final examination.</p>
          <div class="medical-absence-notice">
            <span class="warning-icon">⚠️</span>
            <p>Medical absences require proper documentation and must be submitted within 3 days of returning to classes.</p>
          </div>

          <h3>Grading Policy</h3>
          <table class="grading-table">
            <thead>
              <tr>
                <th>Grade</th>
                <th>Percentage Range</th>
                <th>Grade Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A+</td>
                <td>90-100%</td>
                <td>10</td>
              </tr>
              <tr>
                <td>A</td>
                <td>80-89%</td>
                <td>9</td>
              </tr>
              <tr>
                <td>B</td>
                <td>70-79%</td>
                <td>8</td>
              </tr>
              <tr>
                <td>C</td>
                <td>60-69%</td>
                <td>7</td>
              </tr>
              <tr>
                <td>D</td>
                <td>50-59%</td>
                <td>6</td>
              </tr>
              <tr>
                <td>F</td>
                <td>Below 50%</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
          <br /><br />
          <h3>Academic Integrity</h3>
          <p>The Department maintains a strict policy against academic dishonesty, including plagiarism, cheating, and falsification of data. Violations may result in:</p>
          <ul className='Integrity'>
            <li>Zero marks for the assignment or examination</li>
            <li>Grade reduction in the course</li>
            <li>Course failure</li>
            <li>Academic probation</li>
            <li>Suspension or expulsion in severe cases</li>
          </ul>
        </div>

<br /><br />
<h2 className='timetable-title'>Frequently asked Questions</h2>
        <div className="freq-section">
<p className="q"><strong>How do I register for courses?</strong>
Course registration is done through the online student portal at the beginning of each semester. The registration window is typically open for two weeks, and students must consult with their academic advisor before finalizing their course selection.</p>
<p className="q">
  <strong>What is the process for adding/dropping courses?</strong>
Students can add or drop courses during the first two weeks of the semester without any penalty. After this period, dropping a course will result in a 'W' (Withdrawal) grade on the transcript. No course changes are permitted after the fourth week.
</p>
<p className="q">
  <strong>How is the CGPA calculated?</strong>
The Cumulative Grade Point Average (CGPA) is calculated by multiplying the grade point value of each course by its credit hours, summing these values, and dividing by the total number of credit hours attempted. The result is rounded to two decimal places.</p>
<p className="q">
   <strong> What resources are available for academic support?</strong>
The department offers various support resources including faculty office hours, teaching assistants, peer tutoring programs, and the academic learning center. Additionally, the library provides access to study spaces, reference materials, and online resources.
</p>
<p className="q">
  <strong> What is the minimum CGPA required to avoid academic probation?</strong> 
Students must maintain a minimum CGPA of 5.0 to remain in good academic standing. Those falling below this threshold will be placed on academic probation and will need to meet with an academic advisor to develop an improvement plan.
</p>

<p className="q" id="further">
  <strong>Still have questions?</strong>
Contact the Academic Office at academics@cs.iitdh.ac.in or visit during office hours (Monday-Friday, 9:00 AM - 5:00 PM).
</p>

        </div>

        


      </div>
    </>
  )
}
