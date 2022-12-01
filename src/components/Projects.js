import React from 'react';
import { ProjectsData } from '../data/ProjectsData';
import { ProjectImage } from './ProjectImages';

export const Projects = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
      <br />
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>
        <div className="row">
          {ProjectsData.map((data, index) => (
            <ProjectImage key={index} projectData={data} />
          ))}
        </div>
      </div>
    </section>
  );
};
