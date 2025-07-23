'use client';

import {
  TrophyIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  BeakerIcon,
  GlobeAltIcon,
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
  CameraIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const sportsActivities = [
  { name: "Basketball", description: "State champions for 3 consecutive years", icon: "🏀" },
  { name: "Football", description: "Inter-school tournaments and training", icon: "⚽" },
  { name: "Swimming", description: "Olympic-size pool with professional coaching", icon: "🏊" },
  { name: "Cricket", description: "Well-equipped ground and expert coaching", icon: "🏏" },
  { name: "Badminton", description: "Indoor courts with tournament facilities", icon: "🏸" },
  { name: "Athletics", description: "Track and field events, annual sports day", icon: "🏃" },
  { name: "Table Tennis", description: "Multiple tables and coaching programs", icon: "🏓" },
  { name: "Volleyball", description: "Both indoor and outdoor courts", icon: "🏐" }
];

const culturalEvents = [
  { name: "Annual Day", description: "Grand celebration showcasing student talents", date: "December" },
  { name: "Cultural Fest", description: "Inter-house competitions and performances", date: "October" },
  { name: "Drama Festival", description: "Student-directed plays and performances", date: "February" },
  { name: "Music Concert", description: "Classical and contemporary music performances", date: "March" },
  { name: "Dance Competition", description: "Various dance forms and choreography", date: "November" },
  { name: "Literary Meet", description: "Poetry, storytelling, and creative writing", date: "September" }
];

const clubs = [
  { 
    name: "Science Club", 
    description: "Experiments, science fairs, and innovation projects",
    icon: BeakerIcon,
    activities: ["Science Fair", "Model Making", "Lab Experiments", "Innovation Projects"]
  },
  { 
    name: "Eco Club", 
    description: "Environmental awareness and conservation activities",
    icon: GlobeAltIcon,
    activities: ["Tree Plantation", "Waste Management", "Nature Walks", "Green Initiatives"]
  },
  { 
    name: "Literary Club", 
    description: "Reading, writing, and language development",
    icon: BookOpenIcon,
    activities: ["Book Reviews", "Creative Writing", "Debate Competitions", "Poetry Sessions"]
  },
  { 
    name: "Art Club", 
    description: "Visual arts, crafts, and creative expression",
    icon: PaintBrushIcon,
    activities: ["Painting Workshops", "Craft Making", "Art Exhibitions", "Design Projects"]
  },
  { 
    name: "Music Club", 
    description: "Vocal and instrumental music training",
    icon: MusicalNoteIcon,
    activities: ["Choir Practice", "Instrument Training", "Music Competitions", "Concerts"]
  },
  { 
    name: "Photography Club", 
    description: "Digital photography and visual storytelling",
    icon: CameraIcon,
    activities: ["Photo Walks", "Digital Editing", "Exhibitions", "Competitions"]
  }
];

export default function ActivitiesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="gradient-text">Activities & Sports</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fostering holistic development through sports, arts, culture, and extracurricular 
              activities that build character, teamwork, and leadership skills.
            </p>
          </div>
        </div>
      </section>

      {/* Sports & Physical Education */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sports & Physical Education
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Building physical fitness, teamwork, and sportsmanship through diverse sporting activities
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {sportsActivities.map((sport) => (
              <div key={sport.name} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{sport.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{sport.name}</h3>
                <p className="text-sm text-gray-600">{sport.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <TrophyIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Coaching</h3>
                <p className="text-gray-600">Qualified sports coaches and trainers for all activities</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <UserGroupIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Building</h3>
                <p className="text-gray-600">Focus on teamwork, leadership, and sportsmanship</p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <HeartIcon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Health & Fitness</h3>
                <p className="text-gray-600">Promoting physical health and mental well-being</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Events */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cultural Events
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Celebrating creativity, talent, and cultural diversity throughout the academic year
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {culturalEvents.map((event) => (
              <div key={event.name} className="card p-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.name}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      {event.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Art, Music & Dance */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Art, Music & Dance
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Nurturing creative expression and artistic talents in various forms
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <PaintBrushIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visual Arts</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Painting and Drawing</li>
                <li>• Sculpture and Pottery</li>
                <li>• Digital Art and Design</li>
                <li>• Art Exhibitions</li>
                <li>• Craft Workshops</li>
              </ul>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MusicalNoteIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Music</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Vocal Training (Classical & Western)</li>
                <li>• Instrumental Music</li>
                <li>• School Choir and Band</li>
                <li>• Music Competitions</li>
                <li>• Recording Studio</li>
              </ul>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <SparklesIcon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dance</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Classical Dance Forms</li>
                <li>• Contemporary and Modern</li>
                <li>• Folk and Cultural Dances</li>
                <li>• Choreography Workshops</li>
                <li>• Dance Competitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Club Activities */}
      <section className="section-padding bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Club Activities
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Specialized clubs for students to explore their interests and develop new skills
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {clubs.map((club) => (
              <div key={club.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <club.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{club.name}</h3>
                </div>
                <p className="text-blue-100 mb-4">{club.description}</p>
                <div className="space-y-2">
                  {club.activities.map((activity) => (
                    <div key={activity} className="flex items-center text-blue-100">
                      <div className="h-1.5 w-1.5 bg-blue-300 rounded-full mr-2"></div>
                      <span className="text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions and Olympiads */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Competitions & Olympiads
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Encouraging excellence through various competitions and academic olympiads
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Academic Competitions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-blue-900">Mathematics Olympiad</span>
                  <span className="text-sm text-blue-600">National Level</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="font-medium text-green-900">Science Olympiad</span>
                  <span className="text-sm text-green-600">International Level</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <span className="font-medium text-purple-900">English Olympiad</span>
                  <span className="text-sm text-purple-600">National Level</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                  <span className="font-medium text-yellow-900">Computer Olympiad</span>
                  <span className="text-sm text-yellow-600">State Level</span>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Other Competitions</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <span className="font-medium text-red-900">Debate Championships</span>
                  <span className="text-sm text-red-600">Inter-School</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                  <span className="font-medium text-indigo-900">Quiz Competitions</span>
                  <span className="text-sm text-indigo-600">Regional Level</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg">
                  <span className="font-medium text-pink-900">Art Competitions</span>
                  <span className="text-sm text-pink-600">District Level</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg">
                  <span className="font-medium text-teal-900">Sports Championships</span>
                  <span className="text-sm text-teal-600">State Level</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="card p-8 bg-gradient-to-r from-blue-50 to-green-50">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">Olympiad Medals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-sm text-gray-600">State Championships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Cultural Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">100+</div>
                  <div className="text-sm text-gray-600">Competition Winners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
