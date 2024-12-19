/* eslint-disable react/no-unescaped-entities */

'use client'

import { useState } from 'react'

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            I&apos;m Noorulain, an experienced SEO Expert and Digital Marketer with a strong focus on off-page SEO strategies.
            With 1.5 years of freelancing experience on Fiverr from 2022 to 2023, I've helped numerous clients improve
            their online presence and search engine rankings.
          </p>
          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-full' : 'max-h-0 md:max-h-full'}`}>
            <p className="text-lg mb-6">
              Currently pursuing a BBIT degree from Virtual University of Pakistan, I&apos;m constantly expanding my knowledge
              in the ever-evolving field of digital marketing and technology.
            </p>
            <p className="text-lg">
              My diverse skill set, including web development, data analysis, and social media marketing, allows me to
              provide comprehensive digital solutions that drive results for businesses of all sizes.
            </p>
            <p className="text-lg">
              Pursuing Cloud Applied Generative AI Engineering at Governor House Sindh, enhancing expertise in cutting-edge AI technologies and cloud-based solutions.
            </p>
          </div>
          <button
            onClick={toggleExpand}
            className="text-blue-600 hover:text-blue-800 font-semibold mt-4 md:hidden"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  )
}

