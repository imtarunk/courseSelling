import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaCog, FaGraduationCap, FaClock, FaTrophy, FaEdit } from 'react-icons/fa';

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate learner | Web Developer | AI Enthusiast',
    location: 'New York, USA',
    website: 'https://johndoe.com'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically send the updated info to your backend
    console.log('Updated user info:', userInfo);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">eDex Profile</h1>
          <nav className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Dashboard</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Courses</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Settings</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="md:col-span-1"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-center mb-4">
                <img 
                  src="/placeholder.svg?height=150&width=150&text=JD" 
                  alt="Profile" 
                  className="w-32 h-32 rounded-full border-4 border-blue-400"
                />
              </div>
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={userInfo.name} 
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={userInfo.email} 
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-400">Bio</label>
                      <textarea 
                        id="bio" 
                        name="bio" 
                        rows="3" 
                        value={userInfo.bio} 
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-white"
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-400">Location</label>
                      <input 
                        type="text" 
                        id="location" 
                        name="location" 
                        value={userInfo.location} 
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-400">Website</label>
                      <input 
                        type="url" 
                        id="website" 
                        name="website" 
                        value={userInfo.website} 
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-white"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button 
                      type="button" 
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-center mb-2">{userInfo.name}</h2>
                  <p className="text-gray-400 text-center mb-4">{userInfo.email}</p>
                  <p className="text-center mb-4">{userInfo.bio}</p>
                  <div className="flex justify-center items-center space-x-2 text-gray-400 mb-4">
                    <FaUser className="w-4 h-4" />
                    <span>{userInfo.location}</span>
                  </div>
                  <div className="flex justify-center items-center space-x-2 text-gray-400">
                    <FaGraduationCap className="w-4 h-4" />
                    <a href={userInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">{userInfo.website}</a>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <FaEdit className="mr-2" />
                      Edit Profile
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-2"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaGraduationCap className="mr-2 text-blue-400" /> Learning Statistics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-400">12</p>
                  <p className="text-gray-400">Courses Completed</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-400">156</p>
                  <p className="text-gray-400">Hours Learned</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-400">42</p>
                  <p className="text-gray-400">Certificates Earned</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-400">89%</p>
                  <p className="text-gray-400">Average Score</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaClock className="mr-2 text-blue-400" /> Recent Activity
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <p>Completed course "Advanced JavaScript Concepts"</p>
                  <span className="ml-auto text-sm text-gray-400">2 days ago</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <p>Started new course "Machine Learning Fundamentals"</p>
                  <span className="ml-auto text-sm text-gray-400">1 week ago</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <p>Earned certificate in "React Native Development"</p>
                  <span className="ml-auto text-sm text-gray-400">2 weeks ago</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaTrophy className="mr-2 text-blue-400" /> Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg flex items-center">
                  <FaTrophy className="text-yellow-400 mr-3 text-2xl" />
                  <div>
                    <p className="font-semibold">Course Completionist</p>
                    <p className="text-sm text-gray-400">Completed 10 courses</p>
                  </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg flex items-center">
                  <FaTrophy className="text-blue-400 mr-3 text-2xl" />
                  <div>
                    <p className="font-semibold">Quick Learner</p>
                    <p className="text-sm text-gray-400">Finished a course in record time</p>
                  </div>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg flex items-center">
                  <FaTrophy className="text-green-400 mr-3 text-2xl" />
                  <div>
                    <p className="font-semibold">Perfect Score</p>
                    <p className="text-sm text-gray-400">100% on a course final exam</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 mt-12">
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

export default UserProfile;