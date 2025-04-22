'use client';

import { useEffect, useState } from 'react';
import PreLoader from '@/components/preLoader';
import AnimationHeader from './animation_header';
import Login from '@/components/Login/page';
import { config } from '../../config';

export default function ClientWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      setLoading(true);

      fetch(`${config.APP_URL}/secure-plugin/v1/home`, { cache: 'no-store' })
        .then((res) => {
          if (!res.ok) throw new Error(`Status ${res.status}`);
          return res.json();
        })
        .then((result) => {
          setTimeout(() => {
            setData(result);
            setLoading(false);
          }, 3000); // loader delay
        })
        .catch((err) => {
          console.error('Error fetching home data:', err);
          setLoading(false);
        });
    }
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('token', 'true');
    window.location.reload(); // refresh after login
  };

  if (!isLoggedIn) {
    return <Login onSuccess={handleLoginSuccess} />;
  }

  if (loading) {
    return <PreLoader />;
  }

  return (
    <>
      {isLoggedIn && <AnimationHeader />}
      {typeof children === 'function' ? children(data) : children}
    </>
  );
}
