'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 ">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span >
            <Image 
                src="/logoportfolio.png" 
                alt="Noorulain" 
                width={75}
                height={75}
              />
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-700 transition-colors duration-300 ease-in-out"
              >
                {item}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-6 text-blue-600 hover:bg-gray-100 flex justify-center"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

