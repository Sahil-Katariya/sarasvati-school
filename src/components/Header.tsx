'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { useClientOnly, useScrollDetection } from '@/hooks/useClientOnly';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Activities', href: '/activities' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News & Events', href: '/news-events' },
  { name: 'Student Corner', href: '/student-corner' },
  { name: 'Parent Zone', href: '/parent-zone' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isClient = useClientOnly();
  const isScrolled = useScrollDetection(10);

  // Prevent hydration mismatch by not rendering dynamic content until client-side
  if (!isClient) {
    return (
      <>
        {/* Top Info Bar - Static version for SSR */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 px-4 text-sm">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between space-y-1 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <PhoneIcon className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-1">
                <EnvelopeIcon className="h-4 w-4" />
                <span>info@sarasvatischool.edu</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-300">🎓</span>
              <span>Admissions Open 2024-25</span>
            </div>
          </div>
        </div>

        {/* Main Header - Static version for SSR */}
        <header className="bg-white sticky top-0 z-50 shadow-md transition-all duration-300">
          <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
            <div className="flex h-20 items-center justify-between">
              {/* Enhanced Logo */}
              <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5 group">
                  <span className="sr-only">Sarasvati School</span>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="h-14 w-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                        <AcademicCapIcon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-800">✨</span>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                        Sarasvati School
                      </h1>
                      <p className="text-sm text-gray-600 font-medium">Excellence in Education Since 1999</p>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Enhanced Desktop Navigation */}
              <div className="hidden lg:flex lg:gap-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
                <Link
                  href="/contact"
                  className="relative px-5 py-2.5 text-sm font-semibold text-gray-700 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:shadow-md"
                >
                  Contact Us
                </Link>
                <Link
                  href="/admissions"
                  className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
                >
                  <span className="relative z-10">Apply Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>

              {/* Enhanced Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="relative -m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 px-4 text-sm">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <PhoneIcon className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-1">
              <EnvelopeIcon className="h-4 w-4" />
              <span>info@sarasvatischool.edu</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-300">🎓</span>
            <span>Admissions Open 2024-25</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isClient && isScrolled ? 'shadow-lg backdrop-blur-sm bg-white/95' : 'shadow-md'
      }`}>
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
          <div className="flex h-20 items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5 group">
                <span className="sr-only">Sarasvati School</span>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-white">
                      <Image src="./favicon.ico" alt="Sarasvati_School_Logo" width={100} height={100} />
                    </div>
                    <div className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-800">✨</span>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                      Sarasvati School
                    </h1>
                    {/* <p className="text-sm text-gray-600 font-medium">Excellence in Education Since 1999</p> */}
                  </div>
                </div>
              </Link>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
              <Link
                href="/contact"
                className="relative px-5 py-2.5 text-sm font-semibold text-gray-700 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-300 hover:shadow-md"
              >
                Contact Us
              </Link>
              <Link
                href="/admissions"
                className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Enhanced Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="relative -m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>

        {/* Enhanced Mobile menu */}
        {isClient && mobileMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile menu panel */}
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Sarasvati School</span>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                      <AcademicCapIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                        Sarasvati School
                      </h1>
                      <p className="text-xs text-gray-600">Excellence in Education</p>
                    </div>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-gray-200">
                  <div className="space-y-1 py-6">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group -mx-3 flex items-center rounded-xl px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="py-6 space-y-3">
                    <Link
                      href="/contact"
                      className="-mx-3 block rounded-xl px-3 py-3 text-base font-semibold leading-7 text-gray-900 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/admissions"
                      className="-mx-3 block rounded-xl px-3 py-3 text-base font-semibold leading-7 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Apply Now
                    </Link>
                  </div>

                  {/* Contact info in mobile menu */}
                  <div className="py-6">
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <PhoneIcon className="h-4 w-4 text-blue-600" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <EnvelopeIcon className="h-4 w-4 text-blue-600" />
                        <span>info@sarasvatischool.edu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
