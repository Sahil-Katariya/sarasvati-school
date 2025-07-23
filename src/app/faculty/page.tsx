import { 
  AcademicCapIcon,
  BeakerIcon,
  CalculatorIcon,
  GlobeAltIcon,
  LanguageIcon,
  PaintBrushIcon,
  HeartIcon,
  UserGroupIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const departments = [
  {
    name: "Mathematics",
    icon: CalculatorIcon,
    color: "blue",
    faculty: [
      { name: "Dr. Rajesh Kumar", qualification: "M.Sc., Ph.D. Mathematics", experience: "15 years", specialization: "Advanced Calculus, Statistics" },
      { name: "Mrs. Priya Sharma", qualification: "M.Sc. Mathematics, B.Ed.", experience: "12 years", specialization: "Algebra, Geometry" },
      { name: "Mr. Amit Singh", qualification: "M.Sc. Mathematics", experience: "8 years", specialization: "Trigonometry, Coordinate Geometry" }
    ]
  },
  {
    name: "Science",
    icon: BeakerIcon,
    color: "green",
    faculty: [
      { name: "Dr. Sunita Patel", qualification: "M.Sc. Physics, Ph.D.", experience: "18 years", specialization: "Quantum Physics, Mechanics" },
      { name: "Mrs. Kavita Joshi", qualification: "M.Sc. Chemistry, B.Ed.", experience: "14 years", specialization: "Organic Chemistry, Biochemistry" },
      { name: "Mr. Ravi Gupta", qualification: "M.Sc. Biology", experience: "10 years", specialization: "Botany, Ecology" },
      { name: "Dr. Neha Agarwal", qualification: "M.Sc. Chemistry, Ph.D.", experience: "16 years", specialization: "Physical Chemistry, Environmental Science" }
    ]
  },
  {
    name: "English",
    icon: LanguageIcon,
    color: "purple",
    faculty: [
      { name: "Mrs. Sarah Johnson", qualification: "M.A. English Literature, B.Ed.", experience: "20 years", specialization: "Literature, Creative Writing" },
      { name: "Mr. David Wilson", qualification: "M.A. English, TESOL", experience: "12 years", specialization: "Grammar, Communication Skills" },
      { name: "Ms. Anjali Verma", qualification: "M.A. English Literature", experience: "9 years", specialization: "Poetry, Drama" }
    ]
  },
  {
    name: "Social Science",
    icon: GlobeAltIcon,
    color: "yellow",
    faculty: [
      { name: "Dr. Vikram Singh", qualification: "M.A. History, Ph.D.", experience: "22 years", specialization: "Ancient History, Archaeology" },
      { name: "Mrs. Meera Jain", qualification: "M.A. Geography, B.Ed.", experience: "15 years", specialization: "Physical Geography, Environmental Studies" },
      { name: "Mr. Suresh Kumar", qualification: "M.A. Political Science", experience: "11 years", specialization: "Indian Constitution, Civics" }
    ]
  },
  {
    name: "Hindi",
    icon: BookOpenIcon,
    color: "red",
    faculty: [
      { name: "Dr. Ramesh Chandra", qualification: "M.A. Hindi, Ph.D.", experience: "25 years", specialization: "Hindi Literature, Poetry" },
      { name: "Mrs. Sushma Devi", qualification: "M.A. Hindi, B.Ed.", experience: "18 years", specialization: "Grammar, Composition" }
    ]
  },
  {
    name: "Computer Science",
    icon: AcademicCapIcon,
    color: "indigo",
    faculty: [
      { name: "Mr. Rohit Sharma", qualification: "M.Tech Computer Science", experience: "13 years", specialization: "Programming, Web Development" },
      { name: "Ms. Pooja Agarwal", qualification: "MCA, B.Ed.", experience: "10 years", specialization: "Database Management, Software Engineering" }
    ]
  },
  {
    name: "Arts & Music",
    icon: PaintBrushIcon,
    color: "pink",
    faculty: [
      { name: "Mrs. Lalita Kumari", qualification: "M.F.A. Fine Arts", experience: "16 years", specialization: "Painting, Sculpture" },
      { name: "Mr. Sandeep Mishra", qualification: "M.A. Music, Sangeet Visharad", experience: "14 years", specialization: "Classical Music, Instruments" }
    ]
  },
  {
    name: "Physical Education",
    icon: HeartIcon,
    color: "teal",
    faculty: [
      { name: "Mr. Ajay Kumar", qualification: "M.P.Ed., NIS Certified", experience: "12 years", specialization: "Athletics, Basketball" },
      { name: "Mrs. Rekha Singh", qualification: "M.P.Ed.", experience: "8 years", specialization: "Yoga, Gymnastics" }
    ]
  }
];

const colorClasses = {
  blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
  green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
  purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-600", border: "border-yellow-200" },
  red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
  pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
  teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200" }
};

export default function FacultyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our <span className="gradient-text">Expert Faculty</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet our dedicated team of qualified educators who are committed to nurturing 
              young minds and fostering academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Excellence in Teaching
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our faculty brings together experience, expertise, and passion for education
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="card p-8 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
            <div className="card p-8 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Average Experience</div>
            </div>
            <div className="card p-8 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Ph.D. Holders</div>
            </div>
            <div className="card p-8 text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
              <div className="text-gray-600">Qualified Teachers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Department-wise Faculty */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Faculty by Department
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Specialized educators for every subject and discipline
            </p>
          </div>
          <div className="mx-auto mt-16 space-y-12">
            {departments.map((department) => {
              const colors = colorClasses[department.color as keyof typeof colorClasses];
              return (
                <div key={department.name} className="card p-8">
                  <div className="flex items-center mb-8">
                    <div className={`h-12 w-12 ${colors.bg} rounded-lg flex items-center justify-center mr-4`}>
                      <department.icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{department.name} Department</h3>
                      <p className="text-gray-600">{department.faculty.length} Faculty Members</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {department.faculty.map((teacher, index) => (
                      <div key={index} className={`border ${colors.border} rounded-lg p-6 bg-white`}>
                        <div className="flex items-center mb-4">
                          <div className={`h-12 w-12 ${colors.bg} rounded-full flex items-center justify-center mr-3`}>
                            <UserGroupIcon className={`h-6 w-6 ${colors.text}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{teacher.name}</h4>
                            <p className="text-sm text-gray-600">{teacher.experience}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <p className="text-sm font-medium text-gray-700">Qualification:</p>
                            <p className="text-sm text-gray-600">{teacher.qualification}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Specialization:</p>
                            <p className="text-sm text-gray-600">{teacher.specialization}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Development */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Development
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Continuous learning and growth for our educators
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <AcademicCapIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Regular Training</h3>
              <p className="text-gray-600">
                Ongoing professional development workshops and training sessions to keep 
                our faculty updated with latest teaching methodologies.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <BookOpenIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Support</h3>
              <p className="text-gray-600">
                Encouraging faculty to pursue higher education, research projects, 
                and academic publications in their respective fields.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <UserGroupIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                Inter-departmental collaboration and knowledge sharing to enhance 
                the overall quality of education and teaching practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Our Teaching Community
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Are you passionate about education? We&apos;re always looking for dedicated educators
            </p>
            <div className="mt-10">
              <a
                href="mailto:careers@sarasvatischool.edu"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-colors duration-200"
              >
                Apply for Teaching Position
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
