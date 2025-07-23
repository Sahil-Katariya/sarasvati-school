import Link from 'next/link';
import {
  AcademicCapIcon,
  UserGroupIcon,
  TrophyIcon,
  BookOpenIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to{' '}
              <span className="gradient-text">Sarasvati School</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nurturing young minds with excellence in education. From Pre-Primary to Class 8,
              we provide quality GSEB education that shapes tomorrow&apos;s leaders.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/admissions"
                className="btn-primary inline-flex items-center gap-2"
              >
                Apply for Admission
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <SparklesIcon className="h-5 w-5 text-yellow-300 mr-2" />
            <p className="text-sm font-medium text-white">
              🎉 Admissions Open for Academic Year 2024-25!
              <Link href="/admissions" className="ml-2 underline hover:text-blue-200">
                Apply Now →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Vision & Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Building a foundation for lifelong learning and character development
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <SparklesIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To be a leading educational institution that empowers students to become
                confident, creative, and compassionate global citizens who contribute
                positively to society.
              </p>
            </div>
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <AcademicCapIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To provide quality education that nurtures intellectual curiosity,
                moral values, and life skills, preparing students for academic excellence
                and personal growth in a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Sarasvati School?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Excellence in education with a focus on holistic development
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <BookOpenIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CBSE Curriculum</h3>
              <p className="text-gray-600">
                Comprehensive CBSE curriculum from Pre-Primary to Class 12 with
                modern teaching methodologies and regular assessments.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <UserGroupIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Faculty</h3>
              <p className="text-gray-600">
                Highly qualified and experienced teachers dedicated to nurturing
                each student&apos;s potential and providing personalized attention.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <TrophyIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Holistic Development</h3>
              <p className="text-gray-600">
                Focus on academics, sports, arts, and character building to develop
                well-rounded individuals ready for future challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Achievements
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">25+</div>
              <div className="mt-2 text-blue-100">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">1200+</div>
              <div className="mt-2 text-blue-100">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">95%</div>
              <div className="mt-2 text-blue-100">Board Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="mt-2 text-blue-100">Expert Faculty</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Join Our School Family?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Take the first step towards your child&apos;s bright future. Apply today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/admissions"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start Application
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
