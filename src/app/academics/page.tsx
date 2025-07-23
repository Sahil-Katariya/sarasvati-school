import {
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  BeakerIcon,
  CalculatorIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const standards = [
  { level: "Pre-Primary", grades: "Nursery, LKG, UKG", ages: "3-5 years", focus: "Play-based learning, Motor skills, Social development" },
  { level: "Primary", grades: "Class I - V", ages: "6-10 years", focus: "Foundation subjects, Creative expression, Basic concepts" },
  { level: "Middle School", grades: "Class VI - VIII", ages: "11-13 years", focus: "Subject specialization, Critical thinking, Project work" },
  { level: "Secondary", grades: "Class IX - X", ages: "14-15 years", focus: "Board preparation, Career guidance, Skill development" },
  { level: "Senior Secondary", grades: "Class XI - XII", ages: "16-17 years", focus: "Stream selection, Competitive exam prep, College readiness" }
];

const subjects = {
  primary: ["English", "Hindi", "Mathematics", "Environmental Studies", "Computer Science", "Art & Craft", "Physical Education"],
  middle: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Science", "Sanskrit", "Art Education", "Physical Education"],
  secondary: ["English", "Hindi", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Science", "Computer Applications", "Sanskrit/French", "Art Education", "Physical Education"],
  senior: {
    science: ["Physics", "Chemistry", "Mathematics", "Biology/Computer Science", "English", "Physical Education"],
    commerce: ["Accountancy", "Business Studies", "Economics", "Mathematics/Computer Science", "English", "Physical Education"],
    humanities: ["History", "Geography", "Political Science", "Economics", "English", "Psychology/Sociology"]
  }
};

export default function AcademicsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="gradient-text">Academic Excellence</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive CBSE curriculum from Pre-Primary to Class XII, designed to foster 
              intellectual growth, critical thinking, and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Standards Overview */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Educational Standards
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From Pre-Primary to Class XII - A journey of continuous learning and growth
            </p>
          </div>
          <div className="mx-auto mt-16 space-y-8">
            {standards.map((standard) => (
              <div key={standard.level} className="card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center">
                      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <AcademicCapIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{standard.level}</h3>
                        <p className="text-sm text-gray-600">{standard.grades}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <p className="text-sm font-medium text-gray-900">Age Group</p>
                    <p className="text-gray-600">{standard.ages}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-sm font-medium text-gray-900">Focus Areas</p>
                    <p className="text-gray-600">{standard.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CBSE Curriculum */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              CBSE Curriculum
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Following the Central Board of Secondary Education framework for comprehensive learning
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <BookOpenIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Structured Learning</h3>
              <p className="text-gray-600">
                Well-defined curriculum structure that ensures progressive learning from 
                foundational concepts to advanced topics across all subjects.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <ClipboardDocumentCheckIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Assessment</h3>
              <p className="text-gray-600">
                Regular evaluation through formative and summative assessments, 
                ensuring comprehensive understanding and skill development.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <ChartBarIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skill Development</h3>
              <p className="text-gray-600">
                Focus on 21st-century skills including critical thinking, creativity, 
                communication, and collaboration alongside academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Subjects Offered
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive subject offerings across all educational levels
            </p>
          </div>
          <div className="mx-auto mt-16 space-y-12">
            {/* Primary Level */}
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <AcademicCapIcon className="h-5 w-5 text-blue-600" />
                </div>
                Primary Level (Classes I-V)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {subjects.primary.map((subject) => (
                  <div key={subject} className="bg-blue-50 rounded-lg p-3 text-center">
                    <p className="text-sm font-medium text-blue-900">{subject}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle School */}
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <BeakerIcon className="h-5 w-5 text-green-600" />
                </div>
                Middle School (Classes VI-VIII)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {subjects.middle.map((subject) => (
                  <div key={subject} className="bg-green-50 rounded-lg p-3 text-center">
                    <p className="text-sm font-medium text-green-900">{subject}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary */}
            <div className="card p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="h-8 w-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                  <CalculatorIcon className="h-5 w-5 text-yellow-600" />
                </div>
                Secondary (Classes IX-X)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {subjects.secondary.map((subject) => (
                  <div key={subject} className="bg-yellow-50 rounded-lg p-3 text-center">
                    <p className="text-sm font-medium text-yellow-900">{subject}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Senior Secondary Streams */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="card p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BeakerIcon className="h-5 w-5 text-blue-600 mr-2" />
                  Science Stream
                </h4>
                <div className="space-y-2">
                  {subjects.senior.science.map((subject) => (
                    <div key={subject} className="bg-blue-50 rounded p-2 text-center">
                      <p className="text-sm font-medium text-blue-900">{subject}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-green-600 mr-2" />
                  Commerce Stream
                </h4>
                <div className="space-y-2">
                  {subjects.senior.commerce.map((subject) => (
                    <div key={subject} className="bg-green-50 rounded p-2 text-center">
                      <p className="text-sm font-medium text-green-900">{subject}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <GlobeAltIcon className="h-5 w-5 text-purple-600 mr-2" />
                  Humanities Stream
                </h4>
                <div className="space-y-2">
                  {subjects.senior.humanities.map((subject) => (
                    <div key={subject} className="bg-purple-50 rounded p-2 text-center">
                      <p className="text-sm font-medium text-purple-900">{subject}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Teaching Methodology
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Innovative approaches to make learning engaging and effective
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Interactive Learning</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• Smart classrooms with interactive whiteboards</li>
                <li>• Hands-on experiments and practical sessions</li>
                <li>• Group discussions and collaborative projects</li>
                <li>• Educational games and simulations</li>
                <li>• Field trips and educational excursions</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Personalized Approach</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• Individual attention and mentoring</li>
                <li>• Differentiated instruction methods</li>
                <li>• Regular parent-teacher consultations</li>
                <li>• Remedial classes for struggling students</li>
                <li>• Advanced programs for gifted learners</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Technology Integration</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• Digital learning platforms and resources</li>
                <li>• Online assignments and assessments</li>
                <li>• Virtual labs and simulations</li>
                <li>• Educational apps and software</li>
                <li>• Coding and robotics programs</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Holistic Development</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• Project-based learning approach</li>
                <li>• Life skills and value education</li>
                <li>• Creative arts and cultural activities</li>
                <li>• Sports and physical fitness programs</li>
                <li>• Community service and social awareness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Examination & Evaluation */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Examination & Evaluation System
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive assessment framework following CBSE guidelines
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Formative Assessment</h3>
              <p className="text-gray-600 mb-4">
                Continuous evaluation through class tests, assignments, projects, and activities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Weekly tests and quizzes</li>
                <li>• Project work and presentations</li>
                <li>• Practical assessments</li>
                <li>• Participation in activities</li>
              </ul>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <BookOpenIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Summative Assessment</h3>
              <p className="text-gray-600 mb-4">
                Periodic examinations to evaluate comprehensive understanding.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mid-term examinations</li>
                <li>• Annual examinations</li>
                <li>• Board examinations (X & XII)</li>
                <li>• Practical examinations</li>
              </ul>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <ChartBarIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Progress Tracking</h3>
              <p className="text-gray-600 mb-4">
                Regular monitoring and feedback for continuous improvement.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Monthly progress reports</li>
                <li>• Parent-teacher meetings</li>
                <li>• Individual counseling</li>
                <li>• Performance analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
