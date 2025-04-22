'use client';
import React from 'react';
import Image from 'next/image';
// import award_img from "@/assets/img/home-02/award/award-1.png";
import award_img from '@/assets/img/home-02/award/img123.png';
import Link from 'next/link';
import { UpArrow } from '../svg';
export default function AwardTwo() {
  return (
    <div className="tp-award-2-area tpaward tp-award-2-space p-relative fix">
      <div className="tp-award-2-shape">
        <span className="tp-award-2-circle"></span>
        <span className="tp-award-2-img">
          <Image src={award_img} alt="award-img" />
        </span>
      </div>
      <div className="container container-1650">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-award-2-title-box p-relative">
              <span className="tp-award-2-subtitle">Unrivaled </span>
              <h2 className="tp-award-2-title tp-award-title-1">Security for </h2>
              <h2 className="tp-award-2-title tp-award-title-2">
                <span>Your Business</span>
              </h2>
              <p>
                Secure365 offers <strong>comprehensive security</strong> solutions to protect your
                business from evolving threats. With advanced technology, 24/7 monitoring, and
                proactive defense, we ensure your data and systems remain secure, allowing you to
                focus on growth with confidence and peace of mind.
              </p>
            </div>
            <div className="tp-award-2-btn-box">
              <div className="tp-projct-5-2-btn-box d-flex justify-content-end">
                <div className="tp-hover-btn-wrapper">
                  <Link className="tp-btn-circle tp-hover-btn-item tp-hover-btn" href="#">
                    <span className="tp-btn-circle-text">
                      Get in <br /> Touch
                    </span>
                    <span className="tp-btn-circle-icon">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
