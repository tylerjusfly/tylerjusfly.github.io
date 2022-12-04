import React from 'react';

export const About = () => {
  return (
    // <section>
    <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
      <div className="container-fluid">
        <div className="my-auto">
          <br />
          <h1 className="mb-0 display-3 fw-bolder text-black">Tyler Momoh </h1>
          <h2 className="proffession fw-bolder">Software Developer</h2>
          <div className="subheading mb-5">
            <span className="map-link text-decoration-none ash">Abuja</span>
            <span className="space-out">·</span>
            <span className="map-link text-decoration-none ash">Nigeria</span>
            <span className="space-out">·</span>
            <a href="tel:6134135540" className="text-decoration-none ash">
              (234) 8167037076
            </a>
            <span className="space-out">·</span>
            <a href="mailto:jesseokeya@gmail.com" className="text-decoration-none ash">
              tylerjusfly1@gmail.com
            </a>
          </div>
          <p className="mb-5">
            Passionate Software Engineer with years of verifiable success in delivering appropriate technology solutions for web and mobile
            products. Comprehensive knowledge of platform development, enterprise architecture, agile methodologies, cloud services, and
            web-based applications.
          </p>
          <ul className="list-inline list-social-icons mb-0">
            <li className="list-inline-item">
              <a href="/">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-home fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            {/* <li className="list-inline-item">
              <a href="https://medium.com/@jesseokeya" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-rss fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li> */}
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/momoh-taiwo/" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/tylerjusfly" target="_blank" rel="noopener noreferrer">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    // </section>
  );
};
