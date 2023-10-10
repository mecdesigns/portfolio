function Wordpress() {
    return (
        <div className='row'>
            <div className='col-xs-12 col-lg-6'>
                <h3>San Martin Baby | Dignity Health</h3>
                <p><a href="https:/sanmartinbaby.org" target="/ blank">https://sanmartingbaby.org</a></p>
                <div className="accordion accordion-flush" id="accordionStLukes">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingStLukes">
                            <button className="accordion-button lead collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStLukes" aria-expanded="true" aria-controls="collapseStLukes">
                                Read More!
                            </button>
                        </h2>
                        <div id="collapseStLukes" className="accordion-collapse collapse" aria-labelledby="headingStLukes" data-bs-parent="#accordionStLukes">
                            <div className="accordion-body">
                                <p class="bold">Content Management Solution:</p>
                                <ul>
                                    <li>Wordpress</li>
                                </ul>
                                <p><strong>Hosts</strong>: Acquia in collaboration with Self Hosted/Adobe Managed Services/Adobe Creative Cloud</p>
                                <p>During the development process of SanMartinBaby.org, I engaged in both front-end and back-end development, commencing with the inception of the project as presented through an initial concept on InVision. My primary objective was to create a robust and highly customized web solution, catering to the unique requirements of the platform. A significant aspect of my work involved crafting custom native Gutenberg components, meticulously designed and optimized to seamlessly integrate with the WordPress content management system. This involved leveraging the power of Gutenberg's block editor to create dynamic and versatile content elements that could be easily managed and edited by site editors and administrators.</p>
                                <p>Furthermore, my development approach extended to ensuring the compatibility of these custom components with various WordPress themes and the underlying framework's grid CSS. This meticulous attention to detail ensured that the website not only boasted a visually appealing and user-friendly interface but also adhered to best practices for performance and maintainability. By undertaking both front-end and back-end development, I was able to deliver a holistic digital solution that aligned perfectly with the project's objectives and exceeded the expectations of the stakeholders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
            <div className='col-xs-12 col-lg-6'>
                <div className="sanmartin"></div>
            </div>
            <div className='col-xs-12 col-lg-6'>
                <img src="warren-screens.png" />
            </div>
            <div className='col-xs-12 col-lg-6'>
                <h3>Warren Southwest Refrigeration</h3>
                <p><a href="https://warrenswrefrigeration.com" target="/ blank">https://warrenswrefrigeration.com</a></p>
            </div>
            <div className='col-xs-12 col-lg-6'>
                <h3>Topaz Villas</h3>
                <p><a href="http://topazvillas.com/" target="/ blank">http://topazvillas.com</a></p>
            </div>
            <div className='col-xs-12 col-lg-6'>
                <img src="topaz-screens-.jpg" />
            </div>
        </div>
    );   
}

export default Wordpress;