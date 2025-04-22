import Link from 'next/link';
import React from 'react';

export default function BigText({ cls = '', whyChooseData }) {
  return (
    <div className={`sv-big-text-area pb-20 pt-20 ${cls}`}>
      <div className="container container-1530">
        <div className="sv-small-text-box d-flex justify-content-between">
          <span>{whyChooseData?.get_in_touch_experience_heading}</span>
          <span>{whyChooseData?.get_in_touch_secure}</span>
        </div>
        <div className="sv-big-text-box">
          <h2 className="sv-big-text tp-char-animation">
            <Link href="#">{whyChooseData?.get_in_touch_heading}</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
