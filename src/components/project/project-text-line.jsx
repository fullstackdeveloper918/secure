'use client';
import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const ProjectTextLine = ({ data }) => {
  useGSAP(() => {
    gsap.set('.tp-project-textline', {
      x: '25%',
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.tp-project-textline ',
          start: '-1500 10%',
          end: 'bottom 20%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      .to('.tp-project-textline ', {
        x: '-80%',
      });
  });
  return (
    <div className="tp-project-textline tp-project-effect mb-115" data-scrub="0.0001">
      {Array.from({ length: 3 }).map((item, index) => (
        <React.Fragment key={index}>
          <span className="textline-1">
            {data?.home_page_project_colest_section_heading_second}
            <span></span>
            {data?.home_page_project_coles_section_heading_third}
          </span>
          <span className="textline-2">{data?.home_page_project_colest_section_heading_first}</span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectTextLine;
