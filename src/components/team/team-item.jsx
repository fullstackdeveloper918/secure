import React from 'react';
import Image from 'next/image';

export default function TeamItem({ item, handleTeamModal }) {
  return (
    <div className="tp-team-item tp-hover-btn-wrapper marque fix mb-30">
      <div className="tp-hover-btn-item">
        <Image src={item.home_page_our_team_image} alt="team-img" width={375} height={464} />
      </div>
      <div className="tp-team-content">
        <span>{item.designation}</span>
        <h4 className="tp-team-title-sm" onClick={() => handleTeamModal(item)}>
          <a href="#">{item.name}</a>
        </h4>
      </div>
    </div>
  );
}
