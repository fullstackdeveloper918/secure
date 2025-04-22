import React from 'react';
import Image from 'next/image';

import Link from 'next/link';

export default function BlogItemTwo({ item }) {
  return (
    <div className="tp-blog-item tp_fade_bottom w-full">
      <Link href={item.external_link}>
        <div className="tp-blog-thumb fix p-relative">
          <Image
            width={500}
            height={500}
            src={item?.featured_image}
            alt="blog-img"
            className="w-full object-cover rounded-lg"
          />
          <div className="tp-blog-meta">
            <span>
              {new Date(item.date)
                .toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short', // "Feb"
                  year: 'numeric',
                })
                .replace(' ', '.')
                .replace(',', '.')}
            </span>
          </div>
        </div>
      </Link>
      <div className="tp-blog-content">
        <h6 className="">{item.title}</h6>
        <p className="text-gray-700 mt-2 line-clamp-2 text-sm">{item.content}</p>
        <Link
          href={item.external_link}
          // target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 textBlue hover:underline font-medium"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
