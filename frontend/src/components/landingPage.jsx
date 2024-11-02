import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaStar, FaChevronLeft, FaChevronRight, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import studentHoldingBookImgage from '../assets/img1.png'

function LandingPage() {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    { title: "Introduction to Web Development", price: 499, rating: 4.8, reviews: 120 },
    { title: "Advanced React Techniques", price: 699, rating: 4.9, reviews: 85 },
    { title: "UI/UX Design Masterclass", price: 599, rating: 4.7, reviews: 150 },
    { title: "Data Science Fundamentals", price: 799, rating: 4.6, reviews: 95 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a href="/" className="text-2xl font-bold text-blue-400" whileHover={{ scale: 1.05 }}>
            <h1 className='text-3xl font-bold'>Versity</h1>
          </motion.a>
          <nav className="hidden md:flex items-center space-x-6">
            {['Home', 'About', 'Course', 'Blog', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <motion.button
              className="text-blue-400 hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Login
            </motion.button>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Sign Up
            </motion.button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <motion.nav
            className="mt-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {['Home', 'About', 'Course', 'Blog', 'Contact'].map((item) => (
              <a key={item} href="#" className="block py-2 hover:text-blue-400 transition-colors">
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
          <motion.div className="space-y-6" {...fadeInUp}>
            <div>
              <motion.p
                className="text-sm uppercase tracking-wider mb-4 text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                START TO SUCCESS
              </motion.p>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Access To <span className="text-blue-400">5000+</span> Courses from{" "}
                <span className="text-blue-400">300</span> Instructors & Institutions
              </motion.h1>
              <motion.p
                className="text-lg opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Various versions have evolved over the years, sometimes by accident.
              </motion.p>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="w-full pl-4 pr-12 py-3 rounded-full bg-gray-800 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors"
              >
                <FaSearch className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden md:block justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={studentHoldingBookImgage}

              alt="Student studying"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "300", label: "Instructor", color: "bg-blue-900" },
              { number: "20,000+", label: "Student", color: "bg-purple-900" },
              { number: "10,000+", label: "Video", color: "bg-red-900" },
              { number: "1,00,000+", label: "User's", color: "bg-green-900" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.color} mb-4`}>
                  <span className="text-2xl font-bold">{stat.number}</span>
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Most <span className="text-blue-400">Popular Course</span>
            </motion.h2>
            <div className="flex space-x-2">
              <motion.button
                className="p-2 border border-gray-700 rounded hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                onClick={() => setCurrentCourseIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length)}
              >
                <FaChevronLeft className="h-4 w-4" />
              </motion.button>
              <motion.button
                className="p-2 border border-gray-700 rounded hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                onClick={() => setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length)}
              >
                <FaChevronRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={`/placeholder.svg?height=200&width=300&text=Course+${index + 1}`}
                  alt={`Course ${index + 1} thumbnail`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">({course.reviews})</span>
                  </div>
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-400">${course.price}</span>
                    <motion.button
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      Buy Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Most <span className="text-blue-400">Popular Category</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Design",
              "Development",
              "Marketing",
              "Business",
              "Lifestyle",
              "Photography",
              "Music",
              "Data Science",
            ].map((category, index) => (
              <motion.button
                key={category}
                className="bg-gray-700 hover:bg-gray-600 border border-gray-600 rounded-lg py-4 px-6 flex items-center justify-center text-center transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gray-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Join World's largest learning platform today
              </h2>
              <p className="opacity-90 mb-6">
                Start learning by registering for free
              </p>
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Register Now
              </motion.button>
            </div>
            <motion.img
              src="/placeholder.svg?height=300&width=300&text=Join+Now"
              alt="Join illustration"
              className="w-64"
              whileHover={{ rotate: 5 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">eDex</h3>
              <p className="mb-4">
                Call: +123 456 789
              </p>
              <div className="flex space-x-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                  <motion.button
                    key={index}
                    className="text-gray-400  hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <Icon />
                  </motion.button>
                ))}
              </div>
            </div>
            {['Explore', 'Category'].map((title, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-white">{title}</h4>
                <ul className="space-y-2">
                  {['About', 'Course', 'Blog', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="font-semibold mb-4 text-white">Subscribe</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-l-lg px-4 py-2 w-full bg-gray-800 text-white border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;