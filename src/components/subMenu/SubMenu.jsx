import Link from 'next/link';
import React from 'react';
const firstData = [
  'Computer vision',
  'AI Drones',
  'Machine Learning',
  'Computers vision',
  'Computerss vision',
];
// const IndustriesData1 = [
//   "Healthcare",
//   "Security",
//   "Fitness",
//   "Services",
//   "Automotive",
//   "Transportion",
//   "Travel",
// ];
const Vision = [
  'AI Fashion Tagging',
  'AI Object Detection',
  'AI Object Detection',
  'AI Object Detection',
  'AI Object Detection',
  'AI Object Detection',
  'AI Object Detection',
  'AI Object Detection',
  'AI Object Detection',
];
const BuiltModel = [
  'Building Access Control',
  'Building Access Control',
  'Building Access Control',
  'Building Access Control',
  'Building Access Control',
  'Building Access Control',
];
const Predictive = ['Atm cash', 'Fraud Detection solutions'];
const AiDrones = [
  'Solar Panel Inspection',
  'LiveStock animation',
  'LiveStock animation',
  'LiveStock animation',
  'LiveStock animation',
  'LiveStock animation',
  'LiveStock animation',
];
const SubMenu = ({ item }) => {
  return (
    <div className="sub-menu-item grid grid-cols-12 ">
      <div className="col-span-2 bg-[#F9F9F9]">
        <div className="flex flex-col text-xl">
          {firstData.map((tag, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-gray-700 font-bold cursor-pointer hover:text-white hover:bg-[#009DD6] pt-4 pb-[20px] px-4 transition-all duration-300">
                {tag}
              </span>
              <span className="border -mt-[2px] " />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-5">
        <div className="flex flex-col w-full cursor-pointer">
          <p className="text-xl font-bold text-gray-700 pl-4 hover:bg-[#009DD6] hover:text-white pt-4 pb-[20px]">
            Feature Services
          </p>
          <span className="border -mt-[12px]" />
        </div>
        <div className="flex flex-col mt-2 list-disc ">
          {/* <ul className=""> */}
          {item?.map((child, childIndex) => (
            <span className="text-gray-500 text-[16px] cursor-pointer pl-4 py-[6px] hover:text-white hover:bg-[#009DD6] transition-all duration-300 ">
              {/* <Link href={`/service/${child?.slug}`}>{child?.title}</Link> */}
              {child?.title}
            </span>
          ))}
          {/* </ul> */}
        </div>
      </div>
      <div className="col-span-5">
        <div className="">
          <div className="flex flex-col w-full cursor-pointer">
            <p className="text-xl font-bold text-gray-700 pl-4 hover:bg-[#009DD6] hover:text-white pt-4 pb-[20px]">
              COMPUTER VISION
            </p>
            <span className="border -mt-[12px] " />
          </div>
          <div className="grid grid-cols-2 mt-2">
            {Vision.map((tag, index) => (
              <span
                key={index}
                className="text-gray-500 text-[16px] cursor-pointer pl-4 py-[6px] hover:text-white hover:bg-[#009DD6] transition-all duration-300 "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-1">
          <div className="flex flex-col w-full cursor-pointer">
            <p className="text-xl font-bold text-gray-700 pl-4 hover:bg-[#009DD6] hover:text-white pt-4 pb-[20px]">
              PRE-BUILT MODEL
            </p>
            <span className="border -mt-[12px] " />
          </div>
          <div className="grid grid-cols-2">
            {BuiltModel.map((tag, index) => (
              <span
                key={index}
                className="text-gray-500 text-[16px] cursor-pointer pl-4 py-[6px] hover:text-white hover:bg-[#009DD6] transition-all duration-300 "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-1">
          <div className="flex flex-col w-full cursor-pointer">
            <p className="text-xl font-bold text-gray-700 pl-4 hover:bg-[#009DD6] hover:text-white pt-4 pb-[20px]">
              PREDICTIVE ANALYTICS
            </p>
            <span className="border -mt-[12px] " />
          </div>
          <div className="grid grid-cols-2">
            {Predictive.map((tag, index) => (
              <span
                key={index}
                className="text-gray-500 text-[16px] cursor-pointer pl-4 py-[6px] hover:text-white hover:bg-[#009DD6] transition-all duration-300 "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-1 mb-4">
          <div className="flex flex-col w-full cursor-pointer">
            <p className="text-xl font-bold text-gray-700 pl-4 hover:bg-[#009DD6] hover:text-white pt-4 pb-[20px]">
              AI DRONES
            </p>
            <span className="border -mt-[12px] " />
          </div>
          <div className="grid grid-cols-2">
            {AiDrones.map((tag, index) => (
              <span
                key={index}
                className="text-gray-500 text-[16px] cursor-pointer pl-4 py-[6px] hover:text-white hover:bg-[#009DD6] transition-all duration-300 "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SubMenu;
