'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  PhotoIcon,
  AcademicCapIcon,
  TrophyIcon,
  MusicalNoteIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const categories = [
  { id: 'all', name: 'All Photos', icon: PhotoIcon },
  { id: 'facilities', name: 'Facilities', icon: BuildingLibraryIcon },
  { id: 'events', name: 'Events', icon: UserGroupIcon },
  { id: 'sports', name: 'Sports', icon: TrophyIcon },
  { id: 'academics', name: 'Academics', icon: AcademicCapIcon },
  { id: 'cultural', name: 'Cultural', icon: MusicalNoteIcon },
  { id: 'labs', name: 'Labs', icon: BeakerIcon }
];

const galleryItems = [
  {
    id: 1,
    title: "Main School Building",
    category: "facilities",
    year: "2024",
    image: "/api/placeholder/400/300",
    description: "Our modern main building with state-of-the-art classrooms"
  },
  {
    id: 2,
    title: "Science Laboratory",
    category: "labs",
    year: "2024",
    image: "/api/placeholder/400/300",
    description: "Well-equipped science lab for hands-on experiments"
  },
  {
    id: 3,
    title: "Annual Sports Day",
    category: "sports",
    year: "2023",
    image: "/api/placeholder/400/300",
    description: "Students participating in various athletic events"
  },
  {
    id: 4,
    title: "Library Reading Hall",
    category: "facilities",
    year: "2024",
    image: "/api/placeholder/400/300",
    description: "Spacious library with extensive collection of books"
  },
  {
    id: 5,
    title: "Cultural Festival",
    category: "cultural",
    year: "2023",
    image: "/api/placeholder/400/300",
    description: "Students showcasing their talents in annual cultural fest"
  },
  {
    id: 6,
    title: "Computer Lab",
    category: "labs",
    year: "2024",
    image: "/api/placeholder/400/300",
    description: "Modern computer lab with latest technology"
  },
  {
    id: 7,
    title: "Basketball Championship",
    category: "sports",
    year: "2023",
    image: "/api/placeholder/400/300",
    description: "Our team winning the state basketball championship"
  },
  {
    id: 8,
    title: "Classroom Learning",
    category: "academics",
    year: "2024",
    image: "/api/placeholder/400/300",
    description: "Interactive learning session in smart classroom"
  },
  {
    id: 9,
    title: "Music Room",
    category: "facilities",
    year: "2024",
    image: "/api/placeholder/400/300",
    description: "Dedicated music room with various instruments"
  },
  {
    id: 10,
    title: "Science Fair",
    category: "events",
    year: "2023",
    image: "/api/placeholder/400/300",
    description: "Students presenting their innovative science projects"
  },
  {
    id: 11,
    title: "Art Exhibition",
    category: "cultural",
    year: "2023",
    image: "/api/placeholder/400/300",
    description: "Student artwork displayed in annual art exhibition"
  },
  {
    id: 12,
    title: "Swimming Pool",
    category: "facilities",
    year: "2024",
    image: "/api/placeholder/400/300",
    description: "Olympic-size swimming pool for aquatic sports"
  },
  {
    id: 13,
    title: "Graduation Ceremony",
    category: "events",
    year: "2023",
    image: "/api/placeholder/400/300",
    description: "Class XII graduation ceremony celebration"
  },
  {
    id: 14,
    title: "Chemistry Lab",
    category: "labs",
    year: "2024",
    image: "/api/placeholder/400/300",
    description: "Advanced chemistry laboratory for practical sessions"
  },
  {
    id: 15,
    title: "Football Match",
    category: "sports",
    year: "2023",
    image: "/api/placeholder/400/300",
    description: "Inter-house football competition"
  }
];

const years = ['All Years', '2024', '2023', '2022', '2021'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = galleryItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const yearMatch = selectedYear === 'All Years' || item.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              School <span className="gradient-text">Gallery</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our vibrant school life through photos of our facilities, events, 
              achievements, and memorable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Browse Our Collection
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Filter by category and year to find specific photos
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Filter by Category</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Year Filter */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">Filter by Year</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedYear === year
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing {filteredItems.length} photos
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              {selectedYear !== 'All Years' && ` from ${selectedYear}`}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    <PhotoIcon className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                    <span className="text-xs text-gray-500">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <PhotoIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No photos found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more photos.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-full overflow-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{selectedImage.title}</h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center rounded-lg">
                  <PhotoIcon className="h-24 w-24 text-gray-400" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {categories.find(c => c.id === selectedImage.category)?.name}
                </span>
                <span className="text-sm text-gray-500">{selectedImage.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Stats */}
      <section className="section-padding bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Capturing Memories
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Every moment at Sarasvati School is worth remembering
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="mt-2 text-blue-100">Photos in Gallery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="mt-2 text-blue-100">Events Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">25+</div>
              <div className="mt-2 text-blue-100">Facilities Showcased</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">4</div>
              <div className="mt-2 text-blue-100">Years of Memories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
