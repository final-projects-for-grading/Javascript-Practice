import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import icon from '../assets/img/website-icon.png';
//import '../assets/img/website-icon.avi';

// Design and photography
import pic2 from '../assets/images/illustrator.png';
import pic3 from '../assets/images/photoshop.png';
import pic4 from '../assets/images/xd.png';
import pic5 from '../assets/images/aftereffect.png';
// database
import pic6 from '../assets/images/Mongodb.png';
import pic7 from '../assets/images/sql.png';
// Version Control
import pic8 from '../assets/images/github.png';
import pic9 from '../assets/images/bitbucket.png';

// Project Management
import pic10 from '../assets/images/jira.png';
// Programing Langauage
import pic11 from '../assets/images/node.png';
import pic12 from '../assets/images/react.png';
import pic13 from '../assets/images/jquery.png';

//Web presentation technology
import pic14 from '../assets/images/html.png';
import pic15 from '../assets/images/css.png';
import pic16 from '../assets/images/framework.png';



import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'blog', name:'Blog', icon:'fa-blogger'},
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Rupali</strong>
              <br />
              Web developer & designer
            </h2>
            <p>I have made few things check it out my work with github.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>
      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>
          <p>
            As a recent graduate from Humber College with a certificate, 
            I believe I am an excellent fit for the Web Designer opportunity. 
            I look forward to the chance to demonstrate you how my educational 
            background and other experience have prepared me to make an 
            immediate contribution to organisation.
            
            {/* Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior. */}
          </p>
{/* Technical Skills */}
          <div className="row">
            <div className="col-4 col-12-mobile">
             <h2>Design and Photography</h2>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Adobe Photoshop</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Adobe Illustrator</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Adobe XD</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>After Effects</h3>
                </header>
              </article>
            </div>
            {/* ** Database** */}
            <div className="col-4 col-12-mobile">
             <h2>Database</h2>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>MongoDb</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>SQL</h3>
                </header>
              </article>
          </div>
            {/* *****version control***** */}
            <div className="col-4 col-12-mobile">
              <h2>Version Control</h2>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic8} alt="" />
                </a>
                <header>
                  <h3>GitHub</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic9} alt="" />
                </a>
                <header>
                  <h3>bitbucket</h3>
                </header>
              </article>
            </div>
            {/* ******Project management****** */}
            <div className="col-4 col-12-mobile">
              <h2>Project Management Tracking</h2>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic10} alt="" />
                </a>
                <header>
                  <h3>Jira</h3>
                </header>
              </article>
             </div>
             {/* ***********Programing Language ******* */}
             <div className="col-4 col-12-mobile">
               <h2>Programing Langauage</h2>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic11} alt="" />
                </a>
                <header>
                  <h3>ReactJs</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic12} alt="" />
                </a>
                <header>
                  <h3>NodeJs</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic13} alt="" />
                </a>
                <header>
                  <h3>Jquery</h3>
                </header>
              </article>
             </div>
             {/* *******Web Presentations Technology****** */}
             <div className="col-4 col-12-mobile">
               <h2>Web Presentation Technology</h2>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic14} alt="" />
                </a>
                <header>
                  <h3>Html/Html5</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic15} alt="" />
                </a>
                <header>
                  <h3>CSS/CSS3</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic16} alt="" />
                </a>
                <header>
                  <h3>CSS Framework Bulma,Bootstrap and Animated CSS</h3>
                </header>
              </article>
             </div>

          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>
          <a href="/#" className="image featured">
            <img src={icon} alt="" />
          </a>
          <p>
          	<li>5+ years of experience in Software Industry with Computer Science background & software environment with    
                proven ability to handle multiple projects of fluctuating complexity and magnitude.</li>
            <li>Highly motivated Designer adept at conceptualizing, designing and maintaining product interfaces to foster 
                exceptional user experiences. </li>
            <li>Excellent understanding of Software Development Life (SDLC), Waterfall and Agile Software Development 
                Methodology utilizing Scrum & Sprint development method.</li>
            <li>Identified, managed and reported defects in management tools like JIRA</li>
            <li>Managed and administrated testing projects with tools.</li>
            <li>Experienced in collaborating with project stakeholders, developers, end users, vendors/ consultants</li>
            <li>Managed multiple tasks and prioritize responsibilities with specific deadlines and manage tasks under high     
                pressure environment</li>

          </p>
        </div>
      </section>
      <section id="blog" className="five">
        <div className="container">
          <header>
            <h2>My Blog</h2>
          </header>
      </div>
      </section>
      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Hire Me</h2>
          </header>
          <p>
            I am available for freelancing.
          </p>
          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
    <PageFooter />
  </Layout>
);

export default IndexPage;
