import React from 'react';
import { Metadata } from 'next';
// import FaqMain from "@/pages/faq/faq-main";
import WhyChooseUs from '@/pages/WhyChooseUs/WhyChooseUs';
import { config } from '../../../config';

export const metadata = {
  title: 'Secure 365 - Faq page',
};

const FaqPage = async () => {
  const response = await fetch(`${config.APP_URL}/secure-plugin/v1/choose`, {
    cache: 'no-store',
  });

  const data = await response.json();
  const whyChooseData = data?.data;
  return <WhyChooseUs whyChooseData={whyChooseData} />;
};

export default FaqPage;
// test
