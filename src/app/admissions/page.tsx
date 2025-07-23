'use client';

import { useState } from 'react';
import {
  CalendarDaysIcon,
  DocumentTextIcon,
  CurrencyRupeeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ageCriteria = [
  { standard: "Nursery", age: "3+ years", cutoffDate: "As on 31st March" },
  { standard: "LKG", age: "4+ years", cutoffDate: "As on 31st March" },
  { standard: "UKG", age: "5+ years", cutoffDate: "As on 31st March" },
  { standard: "Class I", age: "6+ years", cutoffDate: "As on 31st March" },
  { standard: "Class II-V", age: "Age appropriate", cutoffDate: "Based on previous class" },
  { standard: "Class VI-VIII", age: "Age appropriate", cutoffDate: "Based on previous class" },
  { standard: "Class IX", age: "14+ years", cutoffDate: "Based on Class VIII completion" },
  { standard: "Class XI", age: "16+ years", cutoffDate: "Based on Class X results" }
];

const documents = [
  "Birth Certificate (Original + 2 copies)",
  "Previous School Transfer Certificate",
  "Previous School Report Card/Mark Sheet",
  "Aadhar Card of Student (Copy)",
  "Aadhar Card of Parents (Copy)",
  "Passport Size Photographs (6 copies)",
  "Medical Certificate from Registered Doctor",
  "Caste Certificate (if applicable)",
  "Income Certificate (for fee concession)",
  "Address Proof (Electricity Bill/Rent Agreement)"
];

const feeStructure = [
  { standard: "Nursery - UKG", admission: "₹5,000", tuition: "₹3,500", annual: "₹2,000", total: "₹10,500" },
  { standard: "Class I - V", admission: "₹7,000", tuition: "₹4,500", annual: "₹2,500", total: "₹14,000" },
  { standard: "Class VI - VIII", admission: "₹8,000", tuition: "₹5,500", annual: "₹3,000", total: "₹16,500" },
  { standard: "Class IX - X", admission: "₹10,000", tuition: "₹6,500", annual: "₹3,500", total: "₹20,000" },
  { standard: "Class XI - XII", admission: "₹12,000", tuition: "₹7,500", annual: "₹4,000", total: "₹23,500" }
];

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    gender: '',
    standard: '',
    previousSchool: '',
    fatherName: '',
    motherName: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="gradient-text">Admissions Open</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join the Sarasvati School family and embark on a journey of academic excellence, 
              character development, and holistic growth.
            </p>
            <div className="mt-10">
              <div className="inline-flex items-center rounded-full bg-green-100 px-6 py-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-800 font-semibold">Academic Year 2024-25 Admissions Open</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Admission Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple and transparent admission process designed for your convenience
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="card p-6 text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Application</h3>
              <p className="text-sm text-gray-600">Fill out the online application form or visit our campus</p>
            </div>
            <div className="card p-6 text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Verification</h3>
              <p className="text-sm text-gray-600">Submit required documents for verification</p>
            </div>
            <div className="card p-6 text-center">
              <div className="mx-auto h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interaction</h3>
              <p className="text-sm text-gray-600">Student and parent interaction with school counselor</p>
            </div>
            <div className="card p-6 text-center">
              <div className="mx-auto h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Admission</h3>
              <p className="text-sm text-gray-600">Fee payment and admission confirmation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Age Criteria */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Age Criteria
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Age requirements for admission to different standards
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="card overflow-hidden">
              <div className="bg-blue-600 px-6 py-4">
                <div className="grid grid-cols-3 gap-4 text-white font-semibold">
                  <div>Standard</div>
                  <div>Minimum Age</div>
                  <div>Cut-off Date</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {ageCriteria.map((criteria, index) => (
                  <div key={criteria.standard} className={`px-6 py-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="font-medium text-gray-900">{criteria.standard}</div>
                      <div className="text-gray-600">{criteria.age}</div>
                      <div className="text-gray-600">{criteria.cutoffDate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Online Application Form
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below to start your admission process
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl">
            <form onSubmit={handleSubmit} className="card p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="standard" className="block text-sm font-medium text-gray-700 mb-2">
                    Applying for Standard *
                  </label>
                  <select
                    id="standard"
                    name="standard"
                    required
                    value={formData.standard}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Standard</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="class1">Class I</option>
                    <option value="class2">Class II</option>
                    <option value="class3">Class III</option>
                    <option value="class4">Class IV</option>
                    <option value="class5">Class V</option>
                    <option value="class6">Class VI</option>
                    <option value="class7">Class VII</option>
                    <option value="class8">Class VIII</option>
                    <option value="class9">Class IX</option>
                    <option value="class10">Class X</option>
                    <option value="class11">Class XI</option>
                    <option value="class12">Class XII</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous School
                </label>
                <input
                  type="text"
                  id="previousSchool"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700 mb-2">
                    Father&apos;s Name *
                  </label>
                  <input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    required
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="motherName" className="block text-sm font-medium text-gray-700 mb-2">
                    Mother&apos;s Name *
                  </label>
                  <input
                    type="text"
                    id="motherName"
                    name="motherName"
                    required
                    value={formData.motherName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
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
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 text-lg"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Documents Required
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Please ensure all documents are ready for a smooth admission process
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-start">
                    <DocumentTextIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> All documents should be original for verification.
                  Photocopies will be retained by the school. Documents in regional languages
                  should be accompanied by certified English translations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fee Structure
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transparent and affordable fee structure for quality education
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="card overflow-hidden">
              <div className="bg-blue-600 px-6 py-4">
                <div className="grid grid-cols-5 gap-4 text-white font-semibold">
                  <div>Standard</div>
                  <div>Admission Fee</div>
                  <div>Monthly Tuition</div>
                  <div>Annual Charges</div>
                  <div>Total (First Month)</div>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {feeStructure.map((fee, index) => (
                  <div key={fee.standard} className={`px-6 py-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="grid grid-cols-5 gap-4">
                      <div className="font-medium text-gray-900">{fee.standard}</div>
                      <div className="text-gray-600">{fee.admission}</div>
                      <div className="text-gray-600">{fee.tuition}</div>
                      <div className="text-gray-600">{fee.annual}</div>
                      <div className="font-semibold text-blue-600">{fee.total}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6 text-center">
                <CurrencyRupeeIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Payment Options</h3>
                <p className="text-sm text-gray-600">Cash, Cheque, Online Transfer, UPI</p>
              </div>
              <div className="card p-6 text-center">
                <CalendarDaysIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Payment Schedule</h3>
                <p className="text-sm text-gray-600">Monthly, Quarterly, or Annual</p>
              </div>
              <div className="card p-6 text-center">
                <CheckCircleIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Scholarships</h3>
                <p className="text-sm text-gray-600">Merit-based and need-based available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need Help with Admissions?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Our admission team is here to assist you throughout the process
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <PhoneIcon className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100">+91 98765 43210</p>
              <p className="text-blue-100">+91 98765 43211</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <EnvelopeIcon className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-100">admissions@sarasvatischool.edu</p>
              <p className="text-blue-100">info@sarasvatischool.edu</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <MapPinIcon className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100">123 Education Street</p>
              <p className="text-blue-100">Knowledge City, KC 12345</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-blue-100 mb-4">Admission Office Hours</p>
            <p className="text-white font-semibold">Monday - Friday: 9:00 AM - 4:00 PM</p>
            <p className="text-white font-semibold">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}
