import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
function About() {
  return (
    <div>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-white px-4 dark:text-black ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-4 leading-relaxed">
          Welcome to <strong>BookStore</strong> — your go-to destination for discovering and purchasing your favorite books online. Whether you’re a casual reader or a dedicated bibliophile, we aim to provide a seamless and enriching reading experience.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          Our platform is built using modern web technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Firebase</strong> to ensure a smooth and secure user experience. We care about design, accessibility, and performance.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          We are a passionate team of developers, designers, and book lovers on a mission to make reading more accessible and enjoyable for everyone. Your feedback helps us improve — feel free to <a href="/contact" className="text-blue-500 hover:underline">get in touch</a>!
        </p>
        <p className="text-lg leading-relaxed">
          Thank you for being part of our journey. Happy reading! 📚
        </p>
      </div>
    </div>
    <Footer/>
    </div>
   
  );
}

export default About;
