import React from "react";
import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br  flex flex-col items-center justify-center p-6 text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg text-center max-w-lg mb-6">
          Feel free to reach out to me for collaborations or any inquiries.
        </p>

        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Connect with me:</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/vaibhav-panchal12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="hover:underline">
              Email
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
