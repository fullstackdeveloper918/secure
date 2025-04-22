import React from 'react';
import ServiceDetailsMain from '@/pages/service/service-details';
import { config } from '../../../../../config';

export const metadata = {
  title: 'Secure 365 - Service Details page',
};

const ServiceDetailsPage = async ({ params }) => {
  try {
    // Fetch the service banner data based on the slug
    const bannerData = await fetch(`${config.APP_URL}/secure-plugin/v1/service/${params?.slug}`, {
      cache: 'no-store',
    });

    // Parse the response
    let response = await bannerData.json();
    let serviceBannerData = response?.data;

    // Provide default values if serviceBannerData is missing
    if (!serviceBannerData) {
      serviceBannerData = { message: 'Service banner data not available' }; // Default message or data
    }

    return <ServiceDetailsMain serviceBannerData={serviceBannerData} />;
  } catch (error) {
    // Handle any fetch errors or unexpected issues
    console.error('Error fetching service banner data:', error);

    // Provide fallback data if there's an error
    const fallbackServiceBannerData = {
      message: 'Error fetching Service Banner data',
    };

    return <ServiceDetailsMain serviceBannerData={fallbackServiceBannerData} />;
  }
};

export default ServiceDetailsPage;
