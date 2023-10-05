import { useState } from "react";
import "./5.0.2_bootstrap.min.css"; 
import "./5.0.2_dist_js_bootstrap.bundle.min.js";
import "./styles.css";
import Drupal from './components/Drupal';
import Wordpress from './components/Wordpress';
import Aem from './components/Aem';
import React from './components/React';

const content = [
  [
  ],
  [
  ],
  [
  ]
];


export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
      <div className="container">
        <div className="row">
          <header>
            <img src="me.jpg" alt="selfie" />
            <div>
              <h1>Michael Crump - <span>( Full Stack Developer )</span></h1>
              <p>I'm a proud dad of two amazing daughters, and I've got a serious crush on Web Development and Online Marketing. I've clocked in over 25 years of my life in the digital and tech support universe, making me a self-proclaimed tech wizard. I thrive on cracking codes, concocting clever solutions, and launching top-notch products with an unwavering commitment to quality, all while trying to keep up with my beautiful family.</p>
            </div>
          </header>
        </div>
        <div className="row">
          <div className="accordion accordion-flush">
           <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h2>Front-End Development</h2>
              </button>
              <h6>I specialize in and focus on the user interface (UI) and user experience (UX) components of websites and web applications. My dedication goes beyond addressing aesthetics; it encompasses the crucial mission of crafting visually engaging and user-centric digital experiences. Additionally, I place a high priority on adhering to ADA (Americans with Disabilities Act) compliance standards, guaranteeing that these digital platforms offer accessibility to every user. <a className="readmore" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" href="#">Read More..</a></h6>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="row">
                <div className="col-xs-12 col-md-6">
                  <h5>My go-tos are Bootstrap and SASS</h5>
                  <p>Personally, I have consistently relied on Bootstrap as my primary framework of choice. Through my experience, Bootstrap has consistently demonstrated its efficiency and predictability when implementing design solutions.</p>
                  <p><strong>Design/UI Software Proficiencies</strong></p>
                  <div className="row">
                  <div className="col-6">
                  <ul>
	                  <li>Figma</li>
	                  <li>Sketch</li>
	                  <li>InVision</li>
                  </ul>
                  </div>
                  <div className="col-6">
                  <ul>
	                  <li>Webflow</li>
	                  <li>Photoshop</li>
	                  <li>Illustrator</li>
                  </ul>
                  </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <img className="width100" src="figma-concept.jpg" />
                </div>
                </div>
                <h3>Previous Notable Front-end Projects</h3>
                <div id="tabs">
                  <menu>
                    <button id="drupal"
                    className={activeContentIndex === 0 ? "active" : ""}
                    onClick={() => setActiveContentIndex(0)} >
                    </button>
                    <button id="wordpress"
                    className={activeContentIndex === 1 ? "active" : ""}
                    onClick={() => setActiveContentIndex(1)} >
                    </button>
                    <button id="aem"
                    className={activeContentIndex === 2 ? "active" : ""}
                    onClick={() => setActiveContentIndex(2)} >
                    <span>Adobe Experience Manager</span>
                    </button>
                  </menu>
                  <div id="tab-content">
                    <ul>
                    {content[activeContentIndex].map((item) => (
                    <li key={item}>{item}</li>
                    ))}
                    </ul>
                    {activeContentIndex === 0 && <Drupal />}
                    {activeContentIndex === 1 && <Wordpress />}
                    {activeContentIndex === 2 && <Aem />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h2>Back-End Development</h2>
            </button>
            <h6>Back-End Development is a pivotal aspect of the web process, encompassing database management, core application logic, API design, architectural planning, and server management. With my skills I promote the efficient and secure functioning of websites and web applications by optimizing data handling, enabling third-party integrations, ensuring scalability, and maintaining server reliability and security. <a className="readmore" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" href="#">Read More..</a></h6>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <div className="row infastructure">
                  <h3>Infastructure Monitoring</h3>
                  <p>I have a proven track record of effectively implementing custom-designed dashboards, which serve as a powerful platform for visualizing and presenting a wide spectrum of server and resource data. This accomplishment was achieved through the adept utilization of the Kibana Query Language, a specialized tool that allows for precise querying and visualization of complex data sets. These dashboards not only facilitate the monitoring of critical server metrics but also offer invaluable insights into resource utilization and performance, aiding in informed decision-making and resource optimization within the organization.</p>
                  <div className="col-xs-12 col-md-6">
                      <video controls autoPlay muted loop>
                        <source src="LM-ScreenRecording-GIF-HQ-1-1.mp4" type="video/mp4" />
                      </video>
                  </div>
                  <div className="col-xs-12 col-md-6">
                      <video controls autoPlay muted loop>
                        <source src="IM-ScreenRecording-GIF-HQ-v1-1.mp4" alt="logz" />
                      </video>
                  </div>
                </div> 
            </div>
          </div>
        </div>
      </div>
       <p></p>
      <p className="intro">This page is built using React in a Single Page Application, Bootstrap 5, and Node. The source code can be found <a href="https://github.com/mecdesigns/portfolio/" target="_blank">here</a></p>
      </div>
  );
}
