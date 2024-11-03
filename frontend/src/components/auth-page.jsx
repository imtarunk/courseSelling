'use client'

import React, { useState, useEffect } from 'react'
import { Moon, Sun, Sparkles } from "lucide-react"

const StarryNight = () => {
  useEffect(() => {
    const canvas = document.getElementById('starry-night');
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      canvas.width = width = window.innerWidth;
      canvas.height = height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      stars.forEach(s => {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();

        s.x += s.vx / 30;
        s.y += s.vy / 30;

        if (s.x < 0 || s.x > width) s.vx = -s.vx;
        if (s.y < 0 || s.y > height) s.vy = -s.vy;
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return <canvas id="starry-night" className="absolute inset-0" />;
};

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen flex items-center justify-center overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-950"></div>
      <StarryNight />
      <div className="w-[400px] backdrop-blur-sm bg-white/10 dark:bg-black/20 border-none shadow-2xl relative z-10 rounded-lg p-8">
        <div className="relative mb-6">
          <div className="absolute top-0 right-0 text-yellow-500">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
            {isLogin ? "Welcome Back" : "Join Us"}
          </h2>
          <p className="text-gray-200 mt-2">
            {isLogin
              ? "Enter your credentials to access your account"
              : "Create a new account to get started"
            }
          </p>
        </div>
        <form className="space-y-4">
          {!isLogin && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-200">First Name</label>
                <input id="firstName" placeholder="John" className="w-full px-3 py-2 bg-white/20 border-none rounded-md placeholder:text-gray-400 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-200">Last Name</label>
                <input id="lastName" placeholder="Doe" className="w-full px-3 py-2 bg-white/20 border-none rounded-md placeholder:text-gray-400 text-white" />
              </div>
            </div>
          )}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
            <input id="email" type="email" placeholder="m@example.com" className="w-full px-3 py-2 bg-white/20 border-none rounded-md placeholder:text-gray-400 text-white" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
            <input id="password" type="password" className="w-full px-3 py-2 bg-white/20 border-none rounded-md text-white" />
          </div>
        </form>
        <div className="mt-6 space-y-4">
          <button className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-full transition-transform hover:scale-105">
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <div className="text-sm text-center text-gray-300">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  className="text-yellow-400 hover:text-yellow-300 underline"
                  onClick={() => setIsLogin(false)}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-yellow-400 hover:text-yellow-300 underline"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <button
        className="absolute top-4 right-4 text-white hover:bg-white/10 z-20 p-2 rounded-full"
        onClick={toggleMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>
    </div>
  )
}