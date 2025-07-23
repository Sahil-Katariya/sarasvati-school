'use client';

import { useState } from 'react';
import { 
  CalendarDaysIcon,
  MegaphoneIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  AcademicCapIcon,
  TrophyIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline';

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "2024-08-15",
    time: "9:00 AM - 4:00 PM",
    location: "School Auditorium",
    category: "Academic",
    description: "Students will showcase their innovative science projects and experiments.",
    icon: AcademicCapIcon
  },
  {
    id: 2,
    title: "Inter-House Sports Competition",
    date: "2024-08-22",
    time: "8:00 AM - 5:00 PM",
    location: "School Sports Complex",
    category: "Sports",
    description: "Annual sports competition between all four houses.",
    icon: TrophyIcon
  },
  {
    id: 3,
    title: "Cultural Festival",
    date: "2024-09-05",
    time: "6:00 PM - 9:00 PM",
    location: "Main Auditorium",
    category: "Cultural",
    description: "Celebration of arts, music, and cultural diversity.",
    icon: MusicalNoteIcon
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    date: "2024-08-30",
    time: "10:00 AM - 2:00 PM",
    location: "Respective Classrooms",
    category: "Academic",
    description: "Discussion about student progress and development.",
    icon: UserGroupIcon
  },
  {
    id: 5,
    title: "Mathematics Olympiad",
    date: "2024-09-12",
    time: "10:00 AM - 12:00 PM",
    location: "Examination Hall",
    category: "Academic",
    description: "National level mathematics competition for all grades.",
    icon: AcademicCapIcon
  }
];

const announcements = [
  {
    id: 1,
    title: "New Academic Session 2024-25 Begins",
    date: "2024-07-15",
    content: "We are excited to welcome all students back for the new academic year. Classes will commence from July 20th, 2024.",
    priority: "high"
  },
  {
    id: 2,
    title: "Library Renovation Complete",
    date: "2024-07-10",
    content: "Our library has been renovated with new furniture, additional study spaces, and upgraded digital resources.",
    priority: "medium"
  },
  {
    id: 3,
    title: "Swimming Pool Maintenance",
    date: "2024-07-08",
    content: "The swimming pool will be closed for maintenance from July 15-20. Swimming classes will resume from July 21st.",
    priority: "medium"
  },
  {
    id: 4,
    title: "New Bus Route Added",
    date: "2024-07-05",
    content: "We have added a new bus route covering the Green Valley area. Contact the transport office for details.",
    priority: "low"
  },
  {
    id: 5,
    title: "Scholarship Applications Open",
    date: "2024-07-01",
    content: "Merit-based scholarship applications are now open for the academic year 2024-25. Last date to apply: July 31st.",
    priority: "high"
  }
];

const holidays = [
  { date: "2024-08-15", name: "Independence Day", type: "National Holiday" },
  { date: "2024-08-26", name: "Janmashtami", type: "Religious Holiday" },
  { date: "2024-09-07", name: "Ganesh Chaturthi", type: "Religious Holiday" },
  { date: "2024-10-02", name: "Gandhi Jayanti", type: "National Holiday" },
  { date: "2024-10-12", name: "Dussehra", type: "Religious Holiday" },
  { date: "2024-11-01", name: "Diwali", type: "Religious Holiday" },
  { date: "2024-11-14", name: "Children's Day", type: "National Holiday" },
  { date: "2024-12-25", name: "Christmas", type: "Religious Holiday" },
  { date: "2025-01-26", name: "Republic Day", type: "National Holiday" },
  { date: "2025-03-08", name: "Holi", type: "Religious Holiday" }
];

const categoryColors = {
  Academic: "bg-blue-100 text-blue-800",
  Sports: "bg-green-100 text-green-800",
  Cultural: "bg-purple-100 text-purple-800",
  General: "bg-gray-100 text-gray-800"
};

const priorityColors = {
  high: "border-l-red-500 bg-red-50",
  medium: "border-l-yellow-500 bg-yellow-50",
  low: "border-l-green-500 bg-green-50"
};

export default function NewsEventsPage() {
  const [selectedTab, setSelectedTab] = useState('events');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="gradient-text">News & Events</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay updated with the latest happenings, upcoming events, and important 
              announcements from Sarasvati School.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: 'events', name: 'Upcoming Events', icon: CalendarDaysIcon },
              { id: 'announcements', name: 'Announcements', icon: MegaphoneIcon },
              { id: 'holidays', name: 'Holiday Calendar', icon: ClockIcon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`${
                  selectedTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm inline-flex items-center`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content based on selected tab */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {selectedTab === 'events' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Upcoming Events
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Mark your calendars for these exciting upcoming events
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="card p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <event.icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            categoryColors[event.category as keyof typeof categoryColors]
                          }`}>
                            {event.category}
                          </span>
                        </div>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <CalendarDaysIcon className="h-4 w-4 mr-2" />
                            {formatDate(event.date)}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <ClockIcon className="h-4 w-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPinIcon className="h-4 w-4 mr-2" />
                            {event.location}
                          </div>
                        </div>
                        <p className="mt-3 text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'announcements' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  School Announcements
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Important updates and information for students and parents
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className={`card p-6 border-l-4 ${priorityColors[announcement.priority as keyof typeof priorityColors]}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {announcement.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{announcement.content}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarDaysIcon className="h-4 w-4 mr-2" />
                          {formatDate(announcement.date)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                          announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {announcement.priority.charAt(0).toUpperCase() + announcement.priority.slice(1)} Priority
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'holidays' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Holiday Calendar
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Academic year 2024-25 holiday schedule
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="card overflow-hidden">
                  <div className="bg-blue-600 px-6 py-4">
                    <div className="grid grid-cols-3 gap-4 text-white font-semibold">
                      <div>Date</div>
                      <div>Holiday</div>
                      <div>Type</div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {holidays.map((holiday, index) => (
                      <div key={index} className={`px-6 py-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="font-medium text-gray-900">
                            {formatDate(holiday.date)}
                          </div>
                          <div className="text-gray-600">{holiday.name}</div>
                          <div>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              holiday.type === 'National Holiday' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                            }`}>
                              {holiday.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Holiday dates are subject to change based on government notifications. 
                    Any changes will be communicated in advance through official school channels.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox
            </p>
            <div className="mt-10 flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-r-md hover:bg-blue-50 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
