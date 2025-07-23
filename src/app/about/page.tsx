import {
  AcademicCapIcon,
  TrophyIcon,
  UserGroupIcon,
  SparklesIcon,
  HeartIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About <span className="gradient-text">Sarasvati School</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover our rich heritage, unwavering commitment to excellence, and the values 
              that have shaped generations of successful students.
            </p>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600"></div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl">
                  <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"></div>
                </div>
                <figure className="relative isolate">
                  <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                    <p>
                      &ldquo;Education is the most powerful weapon which you can use to change the world.&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                    <strong className="font-semibold text-white">Nelson Mandela</strong>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Rich Heritage
                </h2>
                <div className="max-w-xl">
                  <p className="mt-6">
                    Founded in 1999, Sarasvati School began as a small educational institution with a 
                    big dream - to provide quality education that nurtures both academic excellence and 
                    character development. Named after Sarasvati, the Hindu goddess of knowledge, music, 
                    arts, wisdom, and learning, our school embodies these very principles.
                  </p>
                  <p className="mt-8">
                    Over the past 25 years, we have grown from a modest beginning with just 50 students 
                    to a thriving educational community of over 1,200 students. Our journey has been 
                    marked by continuous innovation in teaching methodologies, infrastructure development, 
                    and a steadfast commitment to our core values.
                  </p>
                  <p className="mt-8">
                    Today, Sarasvati School stands as a beacon of educational excellence, having produced 
                    thousands of successful graduates who have gone on to excel in various fields including 
                    medicine, engineering, business, arts, and public service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Detailed */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Vision & Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Guiding principles that shape our educational philosophy
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <SparklesIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To be a leading educational institution that empowers students to become confident, 
                creative, and compassionate global citizens who contribute positively to society.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <LightBulbIcon className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  Foster innovation and critical thinking
                </li>
                <li className="flex items-start">
                  <HeartIcon className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  Develop empathy and social responsibility
                </li>
                <li className="flex items-start">
                  <UserGroupIcon className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  Build global citizenship and cultural awareness
                </li>
              </ul>
            </div>
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <AcademicCapIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To provide quality education that nurtures intellectual curiosity, moral values, 
                and life skills, preparing students for academic excellence and personal growth 
                in a supportive environment.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <AcademicCapIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Deliver comprehensive CBSE curriculum
                </li>
                <li className="flex items-start">
                  <TrophyIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Promote holistic development
                </li>
                <li className="flex items-start">
                  <UserGroupIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Create inclusive learning environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Principal&apos;s Message
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="card p-8 text-center">
                <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center mb-6">
                  <UserGroupIcon className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Dr. Priya Sharma</h3>
                <p className="text-gray-600 mt-2">Principal</p>
                <p className="text-sm text-gray-500 mt-1">M.Ed., Ph.D. in Education</p>
                <p className="text-sm text-gray-500">25+ Years Experience</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="card p-8">
                <blockquote className="text-lg text-gray-700 leading-8">
                  <p className="mb-4">
                    &ldquo;Dear Students, Parents, and Well-wishers,
                  </p>
                  <p className="mb-4">
                    It gives me immense pleasure to welcome you to Sarasvati School, where we believe 
                    that every child is unique and has the potential to excel. Our commitment goes 
                    beyond academic achievement; we strive to nurture confident, compassionate, and 
                    responsible citizens of tomorrow.
                  </p>
                  <p className="mb-4">
                    In today&apos;s rapidly evolving world, education must prepare students not just for
                    examinations, but for life itself. At Sarasvati School, we focus on developing 
                    critical thinking, creativity, and character alongside academic excellence. Our 
                    dedicated faculty, modern infrastructure, and innovative teaching methods create 
                    an environment where students can discover their passions and reach their full potential.
                  </p>
                  <p className="mb-4">
                    We believe in the power of collaboration between school, students, and parents. 
                    Together, we can create a learning community that celebrates diversity, encourages 
                    curiosity, and instills values that will guide our students throughout their lives.
                  </p>
                  <p>
                    I invite you to join our school family and be part of this exciting journey of 
                    learning, growth, and discovery.
                  </p>
                </blockquote>
                <div className="mt-6">
                  <p className="text-gray-900 font-semibold">Warm regards,</p>
                  <p className="text-gray-900 font-semibold">Dr. Priya Sharma</p>
                  <p className="text-gray-600">Principal, Sarasvati School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Achievements */}
      <section className="section-padding bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Achievements
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Academic Excellence</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• Consistently 95%+ CBSE Board pass rate for the last 10 years</li>
                <li>• 50+ students scored 90%+ in Class XII (2023-24)</li>
                <li>• State topper in Science stream (2022)</li>
                <li>• 100+ students qualified for JEE/NEET in last 5 years</li>
                <li>• Excellence Award from CBSE for Academic Performance (2023)</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Recognition & Awards</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• Best School Award - State Education Department (2023)</li>
                <li>• Green School Certification - Environmental Excellence</li>
                <li>• Digital India School Award (2022)</li>
                <li>• Outstanding Contribution to Education - Rotary Club</li>
                <li>• ISO 9001:2015 Certified for Quality Management</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Sports & Activities</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• State Champions - Basketball (Boys & Girls) 2023</li>
                <li>• National Level Science Olympiad - 25 Gold Medals</li>
                <li>• Inter-School Cultural Fest Winners (3 consecutive years)</li>
                <li>• Best School Band - Regional Competition 2023</li>
                <li>• Environmental Conservation Project - National Recognition</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Infrastructure & Facilities</h3>
              <ul className="space-y-3 text-blue-100">
                <li>• State-of-the-art Science and Computer Labs</li>
                <li>• Modern Library with 10,000+ books and digital resources</li>
                <li>• Olympic-size Swimming Pool and Sports Complex</li>
                <li>• Smart Classrooms with Interactive Boards</li>
                <li>• Dedicated Arts and Music Studios</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
