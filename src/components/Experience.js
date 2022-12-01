import React from 'react';
import { ExperienceData } from '../data/ExperienceData';

export const Experience = () => {
  const displayDescriptions = (descriptions) => {
    return descriptions.map((description, index) => {
      return (
        <li key={index} className="list-group-item" style={{ backgroundColor: '#F8F9F9' }}>
          {description}
        </li>
      );
    });
  };

  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
      <br />
      <div className="my-auto">
        <h2 className="mb-5 text-black fw-bolder">Experience</h2>

        {ExperienceData.map((data, index) => (
          <div key={index} className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0 fw-bolder text-black">{data.jobTitle}</h3>
              <div className="subheading mb-3">
                <a href={data.companyWebsite} target="_blank" rel="noreferrer" className="text-decoration-none">
                  {data.company}
                </a>
              </div>
              <ul className="list-group">{displayDescriptions(data.jobDesc)}</ul>
            </div>
            <br />
            <div className="resume-date text-md-right">
              <span className="ash">{data.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
