import React from 'react';
import Link from 'next/link';

export default function ContactForm({ aboutResponse }) {
  return (
    <div className="contact">
      <div className="container container-1480">
        <div className="row">
          <div className="contact-wrap flex flex-col md:flex-row justify-between items-start gap-40 py-12">
            <div className="contact-col md:w-1/3 md:text-left">
              <h2>Contact us</h2>
              <p>
                Your inquiries matter to us! Whether you’re a potential client, a partner, or just
                curious about what we do, we’re always happy to chat. Send us a message, and let’s
                connect.
              </p>
              <p>Or reach us directly at:</p>
              <a href=":mailto" className="block">
                SECURE@GMAIL.COM
              </a>
              <a href=":tel" className="block">
                +6 314 678 886
              </a>
            </div>

            <div className="contact-col md:w-2/3 w-full">
              <form className="flex flex-column gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact-input p-3 text-black border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="contact-input p-3 text-black border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="contact-input p-3 text-black border border-gray-300 rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Organization"
                  className="contact-input p-3 text-black border border-gray-300 rounded-md w-full"
                  required
                />
                <textarea
                  placeholder="Tell us about your project"
                  className="contact-input p-3 mb-0 text-black border border-gray-300 rounded-md w-full col-span-2"
                  rows={5}
                  required
                ></textarea>
                <button type="submit" className="contact-btn text-white mt-5">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
