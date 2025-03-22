"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-[#463A93] rounded shadow-lg"
    >
      <label className="block text-lg mb-2 text-white">Name</label>
      <input
        type="text"
        name="name"
        className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label className="block text-lg mb-2 text-white">Email</label>
      <input
        type="email"
        name="email"
        className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <button type="submit" className="w-full p-2 bg-black text-white rounded">
        Submit
      </button>
    </form>
  );
}
