import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaStar, FaFilter } from 'react-icons/fa';

const courses = [
  { id: 1, title: "Introduction to Web Development", instructor: "John Doe", rating: 4.8, students: 1500, price: 49.99, image: "/placeholder.svg?height=200&width=300&text=Web+Dev" },
  { id: 2, title: "Advanced React Techniques", instructor: "Jane Smith", rating: 4.9, students: 1200, price: 69.99, image: "/placeholder.svg?height=200&width=300&text=React" },
  { id: 3, title: "Python for Data Science", instructor: "Mike Johnson", rating: 4.7, students: 2000, price: 59.99, image: "/placeholder.svg?height=200&width=300&text=Python" },
  { id: 4, title: "UI/UX Design Fundamentals", instructor: "Sarah Brown", rating: 4.6, students: 1800, price: 54.99, image: "/placeholder.svg?height=200&width=300&text=UI/UX" },
  { id: 5, title: "Machine Learning Basics", instructor: "David Lee", rating: 4.8, students: 1600, price: 79.99, image: "/placeholder.svg?height=200&width=300&text=ML" },
  { id: 6, title: "JavaScript for Beginners", instructor: "Emily Chen", rating: 4.5, students: 2200, price: 44.99, image: "/placeholder.svg?height=200&width=300&text=JavaScript" },
];

const categories = ["All", "Web Development", "Data Science", "Design", "Programming", "Machine Learning"];

function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || course.title.includes(selectedCategory))
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">eDex Courses</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">My Courses</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Profile</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.h2 
            className="text-3xl font-bold mb-4 md:mb-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Explore Our Courses
          </motion.h2>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <FaFilter />
              <span>Filter</span>
            </button>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 p-4 bg-gray-800 rounded-lg shadow-lg"
              >
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-2 py-1 rounded ${
                        selectedCategory === category ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          <p className="text-gray-400">{filteredCourses.length} courses found</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-gray-400 mb-4">{course.instructor}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`h-5 w-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-400">{course.rating.toFixed(1)}</span>
                  <span className="ml-4 text-gray-400">({course.students} students)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${course.price.toFixed(2)}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-blue-400 mb-2">eDex</h3>
              <p>Empowering learners worldwide</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 eDex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CoursesPage;