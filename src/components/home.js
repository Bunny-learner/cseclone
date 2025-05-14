import React from 'react'
import './home.css'
import Slides from './slides.js'
export default function Home() {
  return (
    <>

    <div className="slider">

      <Slides/>
    </div>
    <br /><br />
     <div class="home-container">
  <div class="news-section">
    <h2 >News</h2>
    <br />
    <div class="news-item">
      <h3>Admissions open for M.Tech. program</h3>
      <a href="https://www.iitdh.ac.in/mtech" class="tag">Present</a>
      <p class="description">The department is currently accepting applications for the M.Tech. program in Computer Science and Engineering from the academic year 2024-25.</p>
    </div>
    <div class="news-item">
      <h3>Admissions open for PhD program</h3>
       <a href="https://www.iitdh.ac.in/phd" class="tag">Present</a>
      <p class="description">The department is currently accepting applications for the PhD program in Computer Science and Engineering.</p>
    </div>
    <div class="news-item">
      <h3>Admissions open for M.Tech. by Research program</h3>
       <a href="https://www.iitdh.ac.in/mtech-research" class="tag">Present</a>
      <p class="description">The department is currently accepting applications for the M.Tech. program in Computer Science and Engineering from the academic year 2024-25.</p>
    </div>
    <div class="news-item">
      <h3>Faculty awarded prestigious research grant</h3>
       <a href="https://www.iitdh.ac.in/mtech" class="tag">Present</a>
      <p class="description">Prof. Vandana Bharti received a national research grant for her work in AI and Machine Learning.</p>
    </div>
    </div>

  <div class="events-section">
    <h2>Talks and Events</h2>
    <br />
    <div class="event-item">
      <h3>Engineering the AI Transformation</h3>
      <p class="speaker">Speaker: Dr. Dattatraya Kulkarni</p>
      <p class="affiliation">Vice President, McAfee Fellow</p>
      <p class="venue"><span class="icon">📍Venue</span> : F300, CLT</p>
      <p class="time"><span class="icon">⏰ Time</span> : 2:00 - 3:00 PM, 17th April 2025</p>
    </div>

    <div className="event-item">
      <h3>Academic review meeting and Departmental Review</h3>
      <p className="time"><span class="icon">⏰ Time</span>: 16th and 17th April 2025</p>
    </div>
    </div>
</div>


    </>
  )
}
