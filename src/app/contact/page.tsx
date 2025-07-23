'use client';

import { useState } from 'react';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  TruckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const contactInfo = {
  address: {
    street: "123 Education Street",
    area: "Knowledge City",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110001",
    country: "India"
  },
  phone: {
    main: "+91 98765 43210",
    admissions: "+91 98765 43211",
    accounts: "+91 98765 43212",
    transport: "+91 98765 43213"
  },
  email: {
    general: "info@sarasvatischool.edu",
    admissions: "admissions@sarasvatischool.edu",
    principal: "principal@sarasvatischool.edu",
    accounts: "accounts@sarasvatischool.edu"
  },
  officeHours: {
    weekdays: "Monday - Friday: 8:00 AM - 4:00 PM",
    saturday: "Saturday: 8:00 AM - 1:00 PM",
    sunday: "Sunday: Closed"
  }
};

const departments = [
  {
    name: "Admissions Office",
    icon: AcademicCapIcon,
    phone: contactInfo.phone.admissions,
    email: contactInfo.email.admissions,
    description: "For new admissions, application process, and enrollment queries"
  },
  {
    name: "Accounts Department",
    icon: CurrencyRupeeIcon,
    phone: contactInfo.phone.accounts,
    email: contactInfo.email.accounts,
    description: "For fee payments, financial queries, and account-related matters"
  },
  {
    name: "Principal&apos;s Office",
    icon: UserIcon,
    phone: contactInfo.phone.main,
    email: contactInfo.email.principal,
    description: "For academic matters, complaints, and administrative issues"
  },
  {
    name: "Transport Department",
    icon: TruckIcon,
    phone: contactInfo.phone.transport,
    email: "transport@sarasvatischool.edu",
    description: "For school bus routes, transport fees, and related services"
  }
];

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    department: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setContactForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        department: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch with us for any queries, admissions, or support. 
              We&apos;re here to help you and your child succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Multiple ways to reach us for your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <MapPinIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>
              <div className="text-gray-600 space-y-1">
                <p>{contactInfo.address.street}</p>
                <p>{contactInfo.address.area}</p>
                <p>{contactInfo.address.city}, {contactInfo.address.state}</p>
                <p>{contactInfo.address.pincode}, {contactInfo.address.country}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <PhoneIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
              <div className="text-gray-600 space-y-2">
                <p><span className="font-medium">Main Office:</span><br />{contactInfo.phone.main}</p>
                <p><span className="font-medium">Admissions:</span><br />{contactInfo.phone.admissions}</p>
              </div>
            </div>

            {/* Email */}
            <div className="card p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <EnvelopeIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
              <div className="text-gray-600 space-y-2">
                <p><span className="font-medium">General:</span><br />{contactInfo.email.general}</p>
                <p><span className="font-medium">Admissions:</span><br />{contactInfo.email.admissions}</p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="card p-8 text-center mb-16">
            <div className="mx-auto h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <ClockIcon className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Office Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
              <div>
                <p className="font-medium text-gray-900 mb-2">Weekdays</p>
                <p>Monday - Friday</p>
                <p>8:00 AM - 4:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Saturday</p>
                <p>8:00 AM - 1:00 PM</p>
                <p>(Limited Services)</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-2">Sunday</p>
                <p>Closed</p>
                <p>(Emergency Contact Available)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Department Contacts
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Direct contact information for specific departments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <dept.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h3>
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <PhoneIcon className="h-4 w-4 mr-2" />
                        {dept.phone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <EnvelopeIcon className="h-4 w-4 mr-2" />
                        {dept.email}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Send us a Message
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and we&apos;ll get back to you as soon as possible
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {formSubmitted ? (
              <div className="card p-8 text-center">
                <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={contactForm.name}
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
                      value={contactForm.email}
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
                      value={contactForm.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={contactForm.department}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Department</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academics</option>
                      <option value="accounts">Accounts</option>
                      <option value="transport">Transport</option>
                      <option value="administration">Administration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please describe your query or message..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary px-8 py-3 text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Find Us on Map
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Located in the heart of the educational district
            </p>
          </div>
          <div className="card overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Google Maps would be embedded here</p>
                  <p className="text-sm text-gray-500 mt-2">
                    123 Education Street, Knowledge City, New Delhi - 110001
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <MapPinIcon className="h-5 w-5 mr-2" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
