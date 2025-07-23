'use client';

import { useState } from 'react';
import { 
  InformationCircleIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  BellAlertIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const notices = [
  {
    id: 1,
    title: "Fee Payment Reminder",
    date: "2024-08-05",
    content: "This is a reminder that the second quarter fees are due by August 15, 2024. Please ensure timely payment to avoid late fees. Payments can be made online through the school portal or at the accounts office during working hours.",
    category: "Fees",
    priority: "high"
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting Schedule",
    date: "2024-08-10",
    content: "The Parent-Teacher Meeting for Classes I-V will be held on August 30, 2024, from 10:00 AM to 2:00 PM. Parents are requested to meet their child&apos;s class teacher as per the time slots that will be shared via email.",
    category: "Meeting",
    priority: "medium"
  },
  {
    id: 3,
    title: "School Uniform Update",
    date: "2024-08-12",
    content: "The school uniform shop will remain open on all Saturdays of August from 9:00 AM to 1:00 PM for parents to purchase new uniforms or replacements. Winter uniforms will be available from September 15, 2024.",
    category: "General",
    priority: "low"
  },
  {
    id: 4,
    title: "Annual Health Check-up",
    date: "2024-08-15",
    content: "The annual health check-up for all students will be conducted from August 25-30, 2024. Please ensure your child is present on the designated day. The schedule for each class will be shared via email.",
    category: "Health",
    priority: "medium"
  }
];

const circulars = [
  {
    id: 1,
    title: "Revised School Timings",
    date: "2024-08-01",
    reference: "SSPS/2024-25/C-001",
    content: "This is to inform all parents that the school timings will be revised from August 15, 2024. The new timings will be 8:30 AM to 3:00 PM for all classes. This change is being implemented to optimize the learning hours and reduce traffic congestion during arrival and departure times.",
    attachmentName: "Revised_Timings_Circular.pdf"
  },
  {
    id: 2,
    title: "Annual Day Celebration",
    date: "2024-08-08",
    reference: "SSPS/2024-25/C-002",
    content: "We are pleased to announce that the Annual Day celebration will be held on September 25, 2024, at the school auditorium. Students participating in the cultural programs will have practice sessions after school hours. Detailed information regarding the schedule and arrangements will be shared soon.",
    attachmentName: "Annual_Day_Circular.pdf"
  },
  {
    id: 3,
    title: "Introduction of New Extracurricular Activities",
    date: "2024-08-12",
    reference: "SSPS/2024-25/C-003",
    content: "The school is introducing new extracurricular activities for the academic year 2024-25, including Robotics, Western Dance, and Public Speaking. Interested students can register for these activities by filling out the attached form and submitting it to their class teacher by August 20, 2024.",
    attachmentName: "New_Activities_Form.pdf"
  }
];

const faqItems = [
  {
    question: "How can I check my child&apos;s academic progress?",
    answer: "You can check your child&apos;s academic progress through the Parent Portal. Regular updates on assessments, test scores, and teacher comments are available. Additionally, report cards are issued at the end of each term, and parent-teacher meetings are scheduled periodically."
  },
  {
    question: "What is the school&apos;s policy on attendance?",
    answer: "Students are expected to maintain at least 85% attendance throughout the academic year. In case of absence, parents should inform the class teacher through a written note or email. For extended absences due to medical reasons, a doctor&apos;s certificate should be submitted."
  },
  {
    question: "How can I pay the school fees?",
    answer: "School fees can be paid online through the Parent Portal using credit/debit cards or net banking. Alternatively, you can pay at the school accounts office by cash, cheque, or demand draft during working hours (9:00 AM to 2:00 PM on weekdays)."
  },
  {
    question: "What is the procedure for applying for leave?",
    answer: "For short leaves (1-2 days), a written note in the school diary is sufficient. For longer leaves, a formal application addressed to the Principal should be submitted in advance. In case of emergency or illness, parents can inform the class teacher via email or phone."
  },
  {
    question: "How can I meet my child&apos;s teacher?",
    answer: "Teachers are available for meetings during designated visiting hours, which are typically from 3:00 PM to 4:00 PM on working days. It is advisable to schedule an appointment through the school office or via email to ensure the teacher&apos;s availability."
  }
];

export default function ParentZonePage() {
  const [selectedTab, setSelectedTab] = useState('info');
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    class: '',
    section: '',
    feedbackType: '',
    message: ''
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFeedbackForm({
      ...feedbackForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFeedbackForm({
        name: '',
        email: '',
        phone: '',
        childName: '',
        class: '',
        section: '',
        feedbackType: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

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
              <span className="gradient-text">Parent Zone</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your dedicated space for school communications, updates, and resources 
              to support your child&apos;s educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: 'info', name: 'Information', icon: InformationCircleIcon },
              { id: 'notices', name: 'Notices', icon: BellAlertIcon },
              { id: 'circulars', name: 'Circulars', icon: DocumentTextIcon },
              { id: 'feedback', name: 'Feedback', icon: ChatBubbleLeftRightIcon }
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
          {selectedTab === 'info' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Parent Information
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Essential information and resources for parents
                </p>
              </div>
              
              {/* Quick Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <div className="card p-6 text-center">
                  <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <CalendarDaysIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Calendar</h3>
                  <p className="text-sm text-gray-600 mb-4">View important dates, holidays, and events</p>
                  <button className="btn-primary w-full">View Calendar</button>
                </div>
                <div className="card p-6 text-center">
                  <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CurrencyRupeeIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fee Payment</h3>
                  <p className="text-sm text-gray-600 mb-4">Pay school fees online and view payment history</p>
                  <button className="btn-primary w-full">Pay Fees</button>
                </div>
                <div className="card p-6 text-center">
                  <div className="mx-auto h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <AcademicCapIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Progress</h3>
                  <p className="text-sm text-gray-600 mb-4">Track your child&apos;s academic performance</p>
                  <button className="btn-primary w-full">View Progress</button>
                </div>
                <div className="card p-6 text-center">
                  <div className="mx-auto h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <UserGroupIcon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Parent Portal</h3>
                  <p className="text-sm text-gray-600 mb-4">Access all parent services in one place</p>
                  <button className="btn-primary w-full">Login to Portal</button>
                </div>
              </div>

              {/* FAQs */}
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="card overflow-hidden">
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <h4 className="text-lg font-medium text-gray-900">{faq.question}</h4>
                        <span className={`transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                          <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'notices' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  School Notices
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Important announcements and updates for parents
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className={`card p-6 border-l-4 ${
                      notice.priority === 'high' ? 'border-l-red-500 bg-red-50' :
                      notice.priority === 'medium' ? 'border-l-yellow-500 bg-yellow-50' :
                      'border-l-green-500 bg-green-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {notice.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <CalendarDaysIcon className="h-4 w-4 mr-1" />
                            {formatDate(notice.date)}
                          </div>
                          <span>•</span>
                          <span className="font-medium">{notice.category}</span>
                        </div>
                        <p className="text-gray-600">{notice.content}</p>
                      </div>
                      <div className="ml-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          notice.priority === 'high' ? 'bg-red-100 text-red-800' :
                          notice.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {notice.priority.charAt(0).toUpperCase() + notice.priority.slice(1)} Priority
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'circulars' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Official Circulars
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Formal communications and policy updates from the school administration
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {circulars.map((circular) => (
                  <div key={circular.id} className="card p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{circular.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <div className="flex items-center">
                            <CalendarDaysIcon className="h-4 w-4 mr-1" />
                            {formatDate(circular.date)}
                          </div>
                          <span>•</span>
                          <span>Ref: {circular.reference}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-600">{circular.content}</p>
                    </div>
                    <div className="flex justify-end">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                        <DocumentTextIcon className="h-4 w-4 mr-2" />
                        Download {circular.attachmentName}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'feedback' && (
            <div>
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Parent Feedback
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  We value your input to help us improve our services and educational quality
                </p>
              </div>
              <div className="max-w-3xl mx-auto">
                {formSubmitted ? (
                  <div className="card p-8 text-center">
                    <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your feedback has been submitted successfully. We appreciate your input and will review it carefully.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="card p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={feedbackForm.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={feedbackForm.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={feedbackForm.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-2">
                          Child&apos;s Name *
                        </label>
                        <input
                          type="text"
                          id="childName"
                          name="childName"
                          required
                          value={feedbackForm.childName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-2">
                          Class *
                        </label>
                        <select
                          id="class"
                          name="class"
                          required
                          value={feedbackForm.class}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Class</option>
                          <option value="Nursery">Nursery</option>
                          <option value="LKG">LKG</option>
                          <option value="UKG">UKG</option>
                          <option value="I">I</option>
                          <option value="II">II</option>
                          <option value="III">III</option>
                          <option value="IV">IV</option>
                          <option value="V">V</option>
                          <option value="VI">VI</option>
                          <option value="VII">VII</option>
                          <option value="VIII">VIII</option>
                          <option value="IX">IX</option>
                          <option value="X">X</option>
                          <option value="XI">XI</option>
                          <option value="XII">XII</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="section" className="block text-sm font-medium text-gray-700 mb-2">
                          Section
                        </label>
                        <select
                          id="section"
                          name="section"
                          value={feedbackForm.section}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Section</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-700 mb-2">
                          Feedback Type *
                        </label>
                        <select
                          id="feedbackType"
                          name="feedbackType"
                          required
                          value={feedbackForm.feedbackType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Type</option>
                          <option value="Academic">Academic</option>
                          <option value="Infrastructure">Infrastructure</option>
                          <option value="Administration">Administration</option>
                          <option value="Transportation">Transportation</option>
                          <option value="Extracurricular">Extracurricular</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Feedback *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={feedbackForm.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Please share your feedback, suggestions, or concerns..."
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn-primary px-8 py-3 text-lg"
                      >
                        Submit Feedback
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
