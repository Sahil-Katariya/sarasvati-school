'use client';

import { useState } from 'react';
import { 
  ClockIcon,
  DocumentTextIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  ArrowDownTrayIcon,
  PlayIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

const timetables = {
  'class1-5': {
    name: 'Classes I - V',
    schedule: [
      { time: '8:00 - 8:40', monday: 'English', tuesday: 'Math', wednesday: 'Hindi', thursday: 'Science', friday: 'Art', saturday: 'Sports' },
      { time: '8:40 - 9:20', monday: 'Math', tuesday: 'Hindi', wednesday: 'English', thursday: 'Math', friday: 'Music', saturday: 'Library' },
      { time: '9:20 - 10:00', monday: 'Hindi', tuesday: 'Science', wednesday: 'Math', thursday: 'English', friday: 'Computer', saturday: 'Assembly' },
      { time: '10:00 - 10:20', monday: 'Break', tuesday: 'Break', wednesday: 'Break', thursday: 'Break', friday: 'Break', saturday: 'Break' },
      { time: '10:20 - 11:00', monday: 'Science', tuesday: 'English', wednesday: 'EVS', thursday: 'Hindi', friday: 'Math', saturday: 'Games' },
      { time: '11:00 - 11:40', monday: 'EVS', tuesday: 'Art', wednesday: 'Science', thursday: 'Computer', friday: 'English', saturday: 'Activity' },
      { time: '11:40 - 12:20', monday: 'Art', tuesday: 'Music', wednesday: 'Sports', thursday: 'EVS', friday: 'Hindi', saturday: 'Dismissal' }
    ]
  },
  'class6-8': {
    name: 'Classes VI - VIII',
    schedule: [
      { time: '8:00 - 8:40', monday: 'English', tuesday: 'Math', wednesday: 'Science', thursday: 'Hindi', friday: 'Social', saturday: 'Computer' },
      { time: '8:40 - 9:20', monday: 'Math', tuesday: 'Science', wednesday: 'Hindi', thursday: 'English', friday: 'Math', saturday: 'Art' },
      { time: '9:20 - 10:00', monday: 'Science', tuesday: 'Hindi', wednesday: 'Math', thursday: 'Social', friday: 'English', saturday: 'Music' },
      { time: '10:00 - 10:20', monday: 'Break', tuesday: 'Break', wednesday: 'Break', thursday: 'Break', friday: 'Break', saturday: 'Break' },
      { time: '10:20 - 11:00', monday: 'Hindi', tuesday: 'English', wednesday: 'Social', thursday: 'Math', friday: 'Science', saturday: 'Sports' },
      { time: '11:00 - 11:40', monday: 'Social', tuesday: 'Computer', wednesday: 'English', thursday: 'Science', friday: 'Hindi', saturday: 'Library' },
      { time: '11:40 - 12:20', monday: 'Computer', tuesday: 'Art', wednesday: 'Sports', thursday: 'Computer', friday: 'Art', saturday: 'Assembly' }
    ]
  },
  'class9-10': {
    name: 'Classes IX - X',
    schedule: [
      { time: '8:00 - 8:40', monday: 'English', tuesday: 'Math', wednesday: 'Science', thursday: 'Hindi', friday: 'Social', saturday: 'Computer' },
      { time: '8:40 - 9:20', monday: 'Math', tuesday: 'Science', wednesday: 'Hindi', thursday: 'English', friday: 'Math', saturday: 'Lab' },
      { time: '9:20 - 10:00', monday: 'Science', tuesday: 'Hindi', wednesday: 'Math', thursday: 'Social', friday: 'English', saturday: 'Sports' },
      { time: '10:00 - 10:20', monday: 'Break', tuesday: 'Break', wednesday: 'Break', thursday: 'Break', friday: 'Break', saturday: 'Break' },
      { time: '10:20 - 11:00', monday: 'Hindi', tuesday: 'English', wednesday: 'Social', thursday: 'Math', friday: 'Science', saturday: 'Library' },
      { time: '11:00 - 11:40', monday: 'Social', tuesday: 'Computer', wednesday: 'English', thursday: 'Science', friday: 'Hindi', saturday: 'Activity' },
      { time: '11:40 - 12:20', monday: 'Computer', tuesday: 'Lab', wednesday: 'Lab', thursday: 'Computer', friday: 'Social', saturday: 'Assembly' }
    ]
  }
};

const syllabusFiles = [
  { class: 'Class I', subject: 'English', size: '2.5 MB', lastUpdated: '2024-07-15' },
  { class: 'Class I', subject: 'Mathematics', size: '1.8 MB', lastUpdated: '2024-07-15' },
  { class: 'Class II', subject: 'English', size: '2.7 MB', lastUpdated: '2024-07-15' },
  { class: 'Class II', subject: 'Mathematics', size: '2.1 MB', lastUpdated: '2024-07-15' },
  { class: 'Class III', subject: 'English', size: '3.2 MB', lastUpdated: '2024-07-15' },
  { class: 'Class III', subject: 'Mathematics', size: '2.4 MB', lastUpdated: '2024-07-15' },
  { class: 'Class VI', subject: 'Science', size: '4.1 MB', lastUpdated: '2024-07-15' },
  { class: 'Class VI', subject: 'Social Science', size: '3.8 MB', lastUpdated: '2024-07-15' },
  { class: 'Class IX', subject: 'Physics', size: '5.2 MB', lastUpdated: '2024-07-15' },
  { class: 'Class IX', subject: 'Chemistry', size: '4.8 MB', lastUpdated: '2024-07-15' },
  { class: 'Class X', subject: 'Mathematics', size: '6.1 MB', lastUpdated: '2024-07-15' },
  { class: 'Class X', subject: 'English', size: '4.5 MB', lastUpdated: '2024-07-15' }
];

const homeworkAssignments = [
  { 
    class: 'Class V', 
    subject: 'Mathematics', 
    title: 'Fractions and Decimals Worksheet', 
    dueDate: '2024-08-20',
    description: 'Complete exercises 1-15 from Chapter 7',
    status: 'pending'
  },
  { 
    class: 'Class VIII', 
    subject: 'Science', 
    title: 'Light and Sound Project', 
    dueDate: '2024-08-25',
    description: 'Create a working model demonstrating properties of light or sound',
    status: 'pending'
  },
  { 
    class: 'Class X', 
    subject: 'English', 
    title: 'Essay on Environmental Conservation', 
    dueDate: '2024-08-18',
    description: 'Write a 500-word essay on the importance of environmental conservation',
    status: 'submitted'
  },
  { 
    class: 'Class VI', 
    subject: 'Hindi', 
    title: 'Poetry Recitation Practice', 
    dueDate: '2024-08-22',
    description: 'Memorize and practice the poem "Vande Mataram" for class presentation',
    status: 'pending'
  }
];

const elearningLinks = [
  {
    category: 'Mathematics',
    links: [
      { name: 'Khan Academy Math', url: 'https://www.khanacademy.org/math', description: 'Comprehensive math lessons and practice' },
      { name: 'Math Playground', url: 'https://www.mathplayground.com', description: 'Interactive math games and activities' },
      { name: 'Prodigy Math', url: 'https://www.prodigygame.com', description: 'Game-based learning platform' }
    ]
  },
  {
    category: 'Science',
    links: [
      { name: 'NASA Kids Club', url: 'https://www.nasa.gov/audience/forkids', description: 'Space science for young learners' },
      { name: 'National Geographic Kids', url: 'https://kids.nationalgeographic.com', description: 'Science, nature, and geography content' },
      { name: 'Crash Course Kids', url: 'https://thecrashcourse.com/courses/crashcourse-kids', description: 'Science videos for elementary students' }
    ]
  },
  {
    category: 'English',
    links: [
      { name: 'Storyline Online', url: 'https://www.storylineonline.net', description: 'Celebrity read-aloud stories' },
      { name: 'Grammar Bytes', url: 'https://www.chompchomp.com', description: 'Grammar exercises and lessons' },
      { name: 'ReadWriteThink', url: 'http://www.readwritethink.org', description: 'Reading and writing resources' }
    ]
  },
  {
    category: 'General Learning',
    links: [
      { name: 'Google Classroom', url: 'https://classroom.google.com', description: 'Access class materials and assignments' },
      { name: 'YouTube Education', url: 'https://www.youtube.com/education', description: 'Educational videos across subjects' },
      { name: 'Coursera for Kids', url: 'https://www.coursera.org', description: 'Online courses for various subjects' }
    ]
  }
];

export default function StudentCornerPage() {
  const [selectedTab, setSelectedTab] = useState('timetables');
  const [selectedTimetable, setSelectedTimetable] = useState('class1-5');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
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
              <span className="gradient-text">Student Corner</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your one-stop destination for timetables, syllabus, homework assignments, 
              and educational resources to support your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: 'timetables', name: 'Timetables', icon: ClockIcon },
              { id: 'syllabus', name: 'Syllabus PDFs', icon: DocumentTextIcon },
              { id: 'homework', name: 'Homework', icon: BookOpenIcon },
              { id: 'elearning', name: 'E-Learning', icon: ComputerDesktopIcon }
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
          {selectedTab === 'timetables' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Class Timetables
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  View your class schedule and plan your day effectively
                </p>
              </div>
              
              {/* Timetable Selector */}
              <div className="mb-8 flex justify-center">
                <div className="flex space-x-4">
                  {Object.entries(timetables).map(([key, timetable]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTimetable(key)}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        selectedTimetable === key
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {timetable.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timetable Display */}
              <div className="card overflow-hidden">
                <div className="bg-blue-600 px-6 py-4">
                  <h3 className="text-xl font-semibold text-white">
                    {timetables[selectedTimetable as keyof typeof timetables].name} - Weekly Schedule
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monday</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tuesday</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wednesday</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thursday</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Friday</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Saturday</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {timetables[selectedTimetable as keyof typeof timetables].schedule.map((period, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{period.time}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{period.monday}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{period.tuesday}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{period.wednesday}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{period.thursday}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{period.friday}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{period.saturday}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'syllabus' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Syllabus Downloads
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Download subject-wise syllabus PDFs for your class
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {syllabusFiles.map((file, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                          <DocumentTextIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{file.class}</h3>
                          <p className="text-sm text-gray-600">{file.subject}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Size: {file.size}</span>
                        <span>Updated: {formatDate(file.lastUpdated)}</span>
                      </div>
                      <button className="w-full btn-primary inline-flex items-center justify-center">
                        <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'homework' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Homework & Assignments
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Keep track of your assignments and submission deadlines
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {homeworkAssignments.map((assignment, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 mr-3">{assignment.title}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            assignment.status === 'submitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {assignment.status === 'submitted' ? 'Submitted' : 'Pending'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="font-medium">{assignment.class}</span>
                          <span>•</span>
                          <span>{assignment.subject}</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <CalendarDaysIcon className="h-4 w-4 mr-1" />
                            Due: {formatDate(assignment.dueDate)}
                          </div>
                        </div>
                        <p className="text-gray-600">{assignment.description}</p>
                      </div>
                      <div className="ml-4">
                        {assignment.status === 'pending' && (
                          <button className="btn-primary">
                            Submit Assignment
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'elearning' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  E-Learning Resources
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Explore online learning platforms and educational resources
                </p>
              </div>
              <div className="space-y-12">
                {elearningLinks.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="card p-6">
                          <div className="flex items-start">
                            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                              <LinkIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-2">{link.name}</h4>
                              <p className="text-sm text-gray-600 mb-4">{link.description}</p>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                              >
                                Visit Site
                                <PlayIcon className="h-4 w-4 ml-1" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
