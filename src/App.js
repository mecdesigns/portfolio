import { useState } from "react";
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
  
  ],
  [

  ]
];


export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="me.jpg" alt="selfie" />
        <div>
          <h1>Michael Crump - <span>( Full Stack Developer )</span></h1>
          <p>I’m a father of two beautiful daughters, and have a passion for Web Development and Online Marketing. I have spent the majority of my career (20+ years) working with digital and technical support/solutions. I consider myself a technically advanced, operationally focused leader. I enjoy solving problems, building solutions and bringing successful products to market with a focus on quality first.</p>
        </div>
      </header>
        <p className="intro">This page is built using React in a Single Page Application, Bootstrap 5, and Node. The source code can be found <a href="#">here</a></p>
        <h2>Previous Notable Projects</h2>
      <div id="tabs">
        <menu>
          <button id="drupal"
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          ></button>
          <button id="wordpress"
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
          </button>
          <button id="aem"
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
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
  );
}
