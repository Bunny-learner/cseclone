import React from 'react'
import './people.css'
export default function People() {


  function scrolltotop(){
    
    console.log("hello")
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

  }
  return (
    <>
    <div className="people-section">
       <h2>People</h2>
       <p>Meet the faculty, staff, and former members of the Department of Computer Science and Engineering.</p>
       <br />
     <div className="people-types">
      <div className="item">
        <h3>Department Leadership</h3>
        <p>View Members</p>
      </div>
       <div className="item">
        <h3>Staff</h3>
        <p>View Members</p>
      </div>
       <div className="item">
        <h3>Faculty</h3>
        <p>View Members</p>
      </div>
       <div className="item">
        <h3>Former Members</h3>
        <p>View Members</p>
      </div>
     </div>
    </div>

    <h2  className='timetable-title hen'>Department Leadership</h2>
    <br />
    <div class="faculty-container">
      <div class="faculty-card senior">
            <img src="p.jpg" alt="Dr. Dileep A D"/>
            <h3>Dr. Ramchandra Phawade
</h3>
            <p>Assistant Professor and Head of Department</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:prb@iitdh.ac.in">✉ prb@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-003">📞 +91-836-2212-003</a>
                <a href="https://iitdh.ac.in/prb/">🔗 Website</a>
            </div>
            
        </div>
        <div class="faculty-card senior">
            <img  src="v.png" alt="Dr. Dileep A D"/>
            <h3>Dr. Vandana Bharti
</h3>
            <p>Assistant Professor and Associate Head</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:vandana@iitdh.ac.in">✉ vandana@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-003">📞 +91-836-2212-003</a>
                <a href="https://sites.google.com/iitdh.ac.in/vandana">🔗 Website</a>
            </div>
            
        </div>
    </div>
        



    <h2  className='timetable-title hen'>Faculty Members</h2>
    <br />
    <div class="faculty-container">
        <div class="faculty-card">
            <img src="anand.jpg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3>Dr.Konjengbam Anand</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:konjengbam.anand@iitdh.ac.in">✉ konjengbam.anand@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
                <a href="https://sites.google.com/view/drkonjengbamanand?pli=1">🔗 Website</a>
            </div>
        </div>

        <div class="faculty-card">
            <img src="ad.jpg" alt="Dr. Dileep A D"/>
            <h3>Dr. Dileep A D</h3>
            <p>Professor and Dean Administration</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:addleep@iitdh.ac.in">✉ addleep@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-003">📞 +91-836-2212-003</a>
                <a href="https://faculty.iitmandi.ac.in/~addileep/">🔗 Website</a>
            </div>
        </div>

        <div class="faculty-card">
            <img src="tri.jpeg" alt="Dr. Achyut Mani Tripathi"/>
            <h3>Dr. Achyut Mani Tripathi</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:t.achyut@iitdh.ac.in">✉ t.achyut@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-004">📞 +91-836-2212-004</a>
                <a href="https://achyutmani.github.io/">🔗 Website</a>
            </div>
        </div>

        <div class="faculty-card">
            <img src="g.jpg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3>Dr. Gayathri Ananthanarayanan</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
                <a href="#">🔗 Website</a>
            </div>
        </div>
        
         <div class="faculty-card">
            <img src="san.png" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3>Dr. Gayathri Ananthanarayanan</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
                <a href="#">🔗 Website</a>
            </div>
        </div>
        
         <div class="faculty-card">
            <img src="ked.jpeg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3>Dr. Gayathri Ananthanarayanan</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
                <a href="#">🔗 Website</a>
            </div>
        </div>
        
         
        
         <div class="faculty-card">
            <img src="kond.jpeg" alt="Dr. Koteswarrao kondepu"/>
            <h3>Dr. Koteswarrao kondepu</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:kondepu@iitdh.ac.in">✉ kondepu@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
                <a href="#">🔗 Website</a>
            </div>
        </div>
        
         <div class="faculty-card">
            <img src="default.jpeg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3>Dr. Gayathri Ananthanarayanan</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
                <a href="#">🔗 Website</a>
            </div>
        </div>
        
         <div class="faculty-card">
            <img src="default.jpeg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3>Dr. Gayathri Ananthanarayanan</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
                <a href="#">🔗 Website</a>
            </div>
        </div>
         <div class="faculty-card">
            <img src="default.jpeg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3>Dr. Gayathri Ananthanarayanan</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
                <a href="#">🔗 Website</a>
            </div>
        </div>
         <div class="faculty-card">
            <img src="default.jpeg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3>Dr. Gayathri Ananthanarayanan</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
                <a href="#">🔗 Website</a>
            </div>
        </div>
         <div class="faculty-card">
            <img src="default.jpeg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3>Dr. Gayathri Ananthanarayanan</h3>
            <p>Assistant Professor</p>
            <p class="research-areas">Research Areas:</p>
            <p>Computer Science and Engineering</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
                <a href="#">🔗 Website</a>
            </div>
        </div>
        
    </div>


     <div className="people-section">
       <h2 className='timetable-title'>Staff</h2>
       <br />
     <div className="people-types ben10">
      <div class="faculty-card staff">
            <img src="default.jpeg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3></h3>
            <p>Junior Assistant</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
            </div>
            </div>
     <div class="faculty-card staff">
            <img src="default.jpeg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3></h3>
            <p>Junior Assistant</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
            </div>
            </div>
       <div class="faculty-card staff">
            <img src="default.jpeg" alt="Dr. Gayathri Ananthanarayanan"/>
            <h3></h3>
            <p>Junior Assistant</p>
            <div class="contact-info">
                <a href="mailto:gayathri@iitdh.ac.in">✉ gayathri@iitdh.ac.in</a>
                <a href="tel:+91-836-2212-005">📞 +91-836-2212-005</a>
            </div>
            </div>

     </div>
    </div>

<div id="top">
  <button className='backtotop' onclick={scrolltotop}>Back To top</button>
</div>

   
    </>
  )
}
