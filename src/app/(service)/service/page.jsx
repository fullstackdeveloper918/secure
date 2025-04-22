// No "use client" here — it's a Server Component

import React from 'react';
import ServiceMain from '@/pages/service/service';
import { config } from '../../../../config';

export const metadata = {
  title: 'Secure 365 - Service page',
};

const ServicePage = async () => {
  let serviceData = [];
  let serviceBannerData = [];

  try {
    const [res1, res2] = await Promise.all([
      fetch(`${config.APP_URL}/secure-plugin/v1/service`, {
        cache: 'no-store',
      }),
      fetch(`${config.APP_URL}/secure-plugin/v1/banner/service`, {
        cache: 'no-store',
      }),
    ]);

    if (!res1.ok || !res2.ok) throw new Error('Failed to fetch service data');

    serviceData = await res1.json();
    serviceBannerData = await res2.json();
  } catch (error) {
    console.error('Server fetch error:', error);
  }

  return (
    <ServiceMain serviceData={serviceData || []} serviceBannerData={serviceBannerData || []} />
  );
};

export default ServicePage;
