// components/AboutUsClient.jsx
'use client';

import { useEffect, useState } from 'react';
import AboutUsMain from '@/pages/about/about-us';

const AboutUsClient = () => {
  const [aboutData, setAboutData] = useState(null);
  const [bannerData, setBannerData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutRes, bannerRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_APP_URL}/secure-plugin/v1/about`),
          fetch(`${process.env.NEXT_PUBLIC_APP_URL}/secure-plugin/v1/banner/about-us`),
        ]);
        const aboutJson = await aboutRes.json();
        const bannerJson = await bannerRes.json();
        setAboutData(aboutJson);
        setBannerData(bannerJson);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="about_usClass">
      <AboutUsMain
        aboutResponse={error ? { message: 'Error fetching About Us data' } : aboutData}
        bannerResponse={error ? { message: 'Error fetching Banner data' } : bannerData}
      />
    </div>
  );
};

export default AboutUsClient;
