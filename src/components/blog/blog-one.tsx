'use client';

import React from 'react';
import { blog_home_five } from '@/data/blog-data';
import BlogItemTwo from './blog-item/blog-item-2';
import { useEffect, useState } from 'react';
import Link from 'next/link';
interface NewsProps {
  id: number;
  title: string;
  date: string;
  content: string;
  external_link: string;
  featured_image: string;
  link: string;
}
export default function BlogOne() {
  const [newsData, setNewsData] = useState<NewsProps[]>([]);
  const [newsLink, setNewsLink] = useState<any>('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          'https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/news'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('fetchBlogData', data);
        setNewsData(data.news);
        setNewsLink(data.link); // Ensure API response structure is correct
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false); // Stop loading when fetch is complete
      }
    };
    fetchBlogData();
  }, []);
  console.log('fetchBlogDatasss', newsData);
  const blog_items = [...blog_home_five];
  return (
    <>
      <div className="tp-blog-area pb-[18px] blogOnemain border">
        <div className="flex flex-col items-center container-1775 mx-auto">
          <div className="blog_sec">
            <h2 className="text-center">Our Blog</h2>
            <p>Check the best marketing resources and the latest blogs about our company.</p>
          </div>
          <div className="mainblogdiv">
            {newsData?.map((item) => (
              <div key={item.id} className="percolumn">
                <BlogItemTwo item={item} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex items-center justify-center"
          style={{ marginTop: '43px', marginBottom: '30px' }}
        >
          <Link href={newsLink} className="BtnOne btnWrapper px-12">
            Read All Articles
          </Link>
        </div>
      </div>
      {/* margin-top: 38px;
    position: center;
    align-items: center;
    display: flex
; */}
    </>
  );
}
