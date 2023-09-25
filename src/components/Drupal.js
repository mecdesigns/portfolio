function Drupal() {
    return (
        <div className='row'>
            <div className='col-xs-12 col-lg-6'>
                <h2>Baylor College of Medicine</h2>
                <p>Link: <a href='https://bcm.edu'>https://bcm.edu</a></p>
                <p><strong>Host</strong>: <img class="host" src="Acquia.png" alt="acquia" /></p>
                <p class="bold">Technologies used:</p>
                <p>Drupal 8/9 CMS</p>
                <p>Frontend Technologies: PHP, HTML, CSS, Bootstrap, Javascript, jQuery, Google Geolocation services api incorporated into a SPA React component focused on a clustered map solution. AWS for CDN Services</p>
                <p><strong>Development Stack used</strong>:</p>
                <p>Docker on LAMP stack, Acquia Cloud Services, AWS CDN</p>
                <p><strong>Progression of Influence</strong></p>
                <ul>
                    <li>Created and skinned theme based on Sketch design and Bootstrap 4/5</li>
                    <li>Created Templates on the TWIG level and Components using the paragraphs module with custom template overrides.</li>
                    <li>Contributed to Acquia cloud environments including stage, dev, and productions sites rolling out tagged code to necessary sites.</li>
                    <li>Created Templates on the TWIG level and Components using the paragraphs module with custom template overrides.</li>
                    <li>Contributed to a PHP menu traversal system as a solution for large menus (10,000+ items) that was breaking the design standards.</li>
                </ul>
            </div>
            <div className='col-xs-12 col-lg-6'>
                <img src="bcm-edu.jpg" />
            </div>
            <div className='col-xs-12 col-lg-6'>
                <img src="boardwalk.jpg" />
            </div>
            <div className='col-xs-12 col-lg-6'>
                <h2>Boardwalk Town Lake</h2>
                <p>Link: <a href='https://boardwalktl.com/'>Boardwalk Town Lake</a></p>
                <p class="bold">Technologies used:</p>
                <p>Drupal 9 CMS hosted</p>
                <p><strong>Host</strong>: <img class="host" src="Pantheon_logo_black_0.png" alt="acquia" /></p>
            </div>
        </div>
    );   
}

export default Drupal;