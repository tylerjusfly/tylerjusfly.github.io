import React from 'react';

export const Education = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
      <br />
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>

        {/* <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Algonquin College</h3>
            <div className="subheading mb-3">Computer Engineering Technology</div>
            <div>Computing Science</div>
            <p>GPA: 3.85</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">January 2018 - May 2021</span>
          </div>
        </div> */}

        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Alt School Of Africa</h3>
            <div className="subheading mb-3">Frontend Development</div>
            <div>Software Development Track</div>
            {/* <p>GPA: 3.48</p> */}
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">April 2022 - Present</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">ITF-NECA Technical Skills Development Program</h3>
            <div className="subheading mb-3">Backend Development</div>
            {/* <p>GPA: 3.56</p> */}
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">July 2021 - January 2022</span>
          </div>
        </div>
      </div>
    </section>
  );
};
