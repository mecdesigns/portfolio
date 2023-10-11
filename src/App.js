import { useState } from "react";
import "./5.0.2_bootstrap.min.css"; 
import "./5.0.2_dist_js_bootstrap.bundle.min.js";
import "./styles.css";
import Drupal from './components/Drupal';
import Wordpress from './components/Wordpress';
import Aem from './components/Aem';
import React from './components/React';
import Apis from './components/Apis';
import Hosting from './components/Hosting';
import Programming from './components/Programming';

const content = [
  [
  ],
  [
  ],
  [
  ],
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
          <div className="accordion accordion-flush" id="accordionFrontEnd">
             <div className="accordion-item">
              <h2 className="accordion-header" id="headingFrontEnd">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFrontEnd" aria-expanded="true" aria-controls="collapseFrontEnd">
                  <h2>Front-End Development</h2>
                </button>
                <p>I specialize in and focus on the user interface (UI) and user experience (UX) components of websites and web applications. My dedication goes beyond addressing aesthetics; it encompasses the crucial mission of crafting visually engaging and user-centric digital experiences. Additionally, I place a high priority on adhering to ADA (Americans with Disabilities Act) compliance standards, guaranteeing that these digital platforms offer accessibility to every user. <a className="readmore" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFrontEnd" aria-expanded="true" aria-controls="#collapseFrontEnd" href="#">Read More..</a></p>
              </h2>
            <div id="collapseFrontEnd" className="accordion-collapse collapse" aria-labelledby="headingFrontEnd" data-bs-parent="#accordionFrontEnd">
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
                <h3>Previous Notable Front-End Projects</h3>
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
          <h2 className="accordion-header" id="accordionBackEnd">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h2>Back-End Development</h2>
            </button>
            <p>Back-End Development is a pivotal aspect of the web process, encompassing database management, core application logic, API design, architectural planning, and server management. With my skills I promote the efficient and secure functioning of websites and web applications by optimizing data handling, enabling third-party integrations, ensuring scalability, and maintaining server reliability and security. <a className="readmore" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" href="#">Read More..</a></p>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionBackEnd">
            <div className="accordion-body">
              <div className="row infastructure">
                <h3>Back-End Proficiency</h3>
                <div id="tabs2">
                  <menu>
                    <button id="cloud"
                    className={activeContentIndex === 0 ? "active" : ""}
                    onClick={() => setActiveContentIndex(0)} >
                    API Solutions
                    </button>
                    <button id="hosting"
                    className={activeContentIndex === 1 ? "active" : ""}
                    onClick={() => setActiveContentIndex(1)} >
                    Hosting Platforms
                    </button>
                    <button id="api"
                    className={activeContentIndex === 2 ? "active" : ""}
                    onClick={() => setActiveContentIndex(2)} >
                    Languages/Libraries
                    </button>
                  </menu>
                  <div id="tab-content2">
                    <ul>
                    {content[activeContentIndex].map((item) => (
                    <li key={item}>{item}</li>
                    ))}
                    </ul>
                    {activeContentIndex === 0 && <Apis />}
                    {activeContentIndex === 1 && <Hosting />}
                    {activeContentIndex === 2 && <Programming />}
                  </div>
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
