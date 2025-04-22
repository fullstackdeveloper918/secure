import React from 'react';

export default function FaqItem({ item, index }) {
  return (
    <React.Fragment key={index}>
      <div className="accordion-items">
        <h3 className="accordion-header h2-title">
          <button
            className="accordion-buttons collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${index + 1}`}
            aria-expanded="true"
            aria-controls={`collapse-${index + 1}`}
          >
            {item.why_choose_us_decades_world_heading}
            <span className="accordion-icon"></span>
          </button>
        </h3>
        <div
          id={`collapse-${index + 1}`}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>{item.why_choose_us_decades_world_paragraph}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
