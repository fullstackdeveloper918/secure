'use client'; // Client-side component

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrambleText from './ScrambleText';
import { usePathname } from 'next/navigation';

// Typing Effect Component
const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (text && index < text.length) {
      // Start typing the text one character at a time
      const timer = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex(index + 1);
      }, 100); // Typing speed (100ms per letter)

      return () => clearTimeout(timer);
    }
  }, [text, index]);

  return <span>{displayedText}</span>;
};

const AnimationHeader = () => {
  const [hoveredText, setHoveredText] = useState(null);
  const [activeItem, setActiveItem] = useState(null); // Track the active menu item
  const [scrolled, setScrolled] = useState(false); // Track if the page has been scrolled

  const pathname = usePathname();

  // Extract the route name after the last '/'
  const routeName = pathname ? pathname.substring(pathname.lastIndexOf('/') + 1) : '';

  console.log(routeName, 'currentRoute');

  const handleMouseEnter = (text) => {
    setHoveredText(text); // Set the hovered text to show typing effect
  };

  const handleMouseLeave = () => {
    setHoveredText(null); // Reset the hovered text when hover ends
  };

  const handleClick = (text) => {
    setActiveItem(text); // Set the clicked item as active
  };

  // Detect scroll and add/remove class based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change the threshold to your preference
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define the menu items
  const menuItems = ['Home', 'About Us', 'Service', 'Why Choose Us', 'Contact Us'];

  return (
    <>
      <div className="word"></div>

      <header
        className={`clapat-header classic-menu invert-header ${
          routeName == 'contact-us' || routeName == 'about-us' || routeName == '' ? '' : 'scrolled'
        } ${scrolled ? 'scrolled' : ''}`}
        data-menucolor="#0c0c0c"
      >
        <div className="header-gradient"></div>

        <div id="header-container">
          <div id="clapat-logo" className="hide-ball">
            <Link className="ajax-link" href="/">
              <Image
                className="black-logo"
                src="/images/secure365-logo-black.png"
                alt="ClaPat Logo"
                width={210}
                height={21}
              />
              <Image
                className="white-logo"
                src="/images/secure365-logo.png"
                alt="ClaPat Logo"
                width={210}
                height={21}
              />
            </Link>
          </div>
          <nav className="clapat-nav-wrapper">
            <ul data-breakpoint="1025" className="flexnav">
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className={`menu-timeline link header-link ${activeItem === item ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="ajax-link"
                    href={
                      item === 'Home'
                        ? '/'
                        : item === 'Why Choose Us'
                          ? '/why-choose'
                          : `/${item.toLowerCase().replace(/\s+/g, '-')}`
                    }
                    onClick={() => handleClick(item)} // Set the clicked item as active
                  >
                    <ScrambleText text={item} />
                  </Link>

                  {/* Only show the submenu for "Service" */}
                  {item === 'Service' && (
                    <div className="sub-menu">
                      <a href="/service/serversetupconfiguration">Server & Cloud Management</a>
                      <a href="/service/threatdetection">Cybersecurity Solutions Service</a>
                      <a href="/service/technicalsupport">Support Service</a>
                      <a href="/service/keywordoptimization">Business SEO & Digital Visibility</a>
                      <a href="/service/contentwriting">Content Creation & Marketing Services</a>
                      <a href="/service/inventorytracking">Inventory Management Solutions</a>
                      <a href="/service/userinterfacedesign">UX/UI Design & Website Development</a>
                      <a href="/service/fraudinvestigation">
                        IT Detective Services & Scam Recovery
                      </a>
                      <a href="/service/paymentgatewayintegration">
                        Secure Payments & Fraud Detection
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <Link className="header-button ajax-link" href="/contact-us">
            <div className="button-icon-link right">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="button-text sticky right">
                <span data-hover="Let's Talk">Let's Talk</span>
              </div>
            </div>
          </Link>

          <div className="button-wrap right menu burger-lines">
            <div className="icon-wrap parallax-wrap">
              <div className="button-icon parallax-element">
                <div id="burger-wrapper">
                  <div id="menu-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-text sticky right">
              <span data-hover="Menu">Menu</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AnimationHeader;
