import React from "react";
import { Form } from "react-router-dom";


export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    return null;
  } catch (error) {
    console.log(error)
  }
}


const Contact = () => {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
        method="POST" action="/contact">
        <h2 className="text-2xl font-bold text-center text-gray-800">Contact Form</h2>
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Username</label>
          <input
            type="text"
            name="username"
            required
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700 font-medium">Message</label>
          <textarea
            rows="4"
            placeholder="Enter your message"
            name="textarea"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition duration-300"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Contact;
