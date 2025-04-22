'use client';
import React from 'react';
import { NextIcon, PrevIcon } from '../svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
// import { SwiperOptions } from "swiper/types";
import { Navigation } from 'swiper/modules';
// import team_data from "@/data/team-data";
import TeamItem from './team-item';
// import { ITeamDT } from "@/types/team-d-t";
import TeamModal from '../modal/team-modal';

const slider_setting = {
  slidesPerView: 6,
  loop: true,
  autoplay: false,
  spaceBetween: 50,
  breakpoints: {
    1400: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: '.tp-testimonial-prev',
    nextEl: '.tp-testimonial-next',
  },
};

const TeamOne = ({ spacing = 'pt-10 md:pt-20', data }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [teamItem, setTeamItem] = React.useState(null);
  function handleTeamModal(team) {
    setShowModal(!showModal);
    setTeamItem(team);
  }
  return (
    <>
      <div className={`tp-team-area ${spacing} md:pb-120 pb-20 fix`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-team-slider-wrapper">
                <div className="tp-testimonial-arrow-box d-none d-lg-block">
                  <button className="tp-testimonial-prev">
                    <span>
                      <PrevIcon />
                    </span>
                  </button>
                  <button className="tp-testimonial-next">
                    <span>
                      <NextIcon />
                    </span>
                  </button>
                </div>
                <Swiper
                  {...slider_setting}
                  modules={[Autoplay, FreeMode, Navigation]}
                  className="swiper-container tp-team-slider-active"
                >
                  {data?.home_page_our_team_data?.map((t) => (
                    <SwiperSlide key={t.id}>
                      <TeamItem item={t} handleTeamModal={handleTeamModal} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* team modal */}
      {teamItem && (
        <TeamModal setShowModal={setShowModal} showModal={showModal} teamItem={teamItem} />
      )}
      {/* team modal */}
    </>
  );
};

export default TeamOne;
