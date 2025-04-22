// src/app/(contact)/contact-us/page.js (Server-side)
export const metadata = {
  title: 'Secure 365 - Contact page',
};

import React from 'react';
import ContactMain from '@/pages/contact/contact';
import { config } from '../../../../config';

const ContactPage = async () => {
  try {
    // Fetch contact data here...
    const data = await fetch(`${config.APP_URL}/secure-plugin/v1/contact`);
    const response = await data.json();
    const contactData = response?.data || { message: 'Contact data not available' };

    return <ContactMain contactData={contactData} />;
  } catch (error) {
    // Handle error
    return <ContactMain contactData={{ message: 'Error fetching contact data' }} />;
  }
};

export default ContactPage;
