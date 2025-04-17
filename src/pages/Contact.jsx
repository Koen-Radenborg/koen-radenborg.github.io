import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

 
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      message: '',
    });


    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <section className="px-6 md:px-24 py-16">
        <h1 className="text-5xl font-bold text-violet-400 mb-6">Neem contact op!</h1>
        <p className="text-lg mb-8">
        Ik sta altijd open voor nieuwe uitdagingen, samenwerkingen, of gewoon een goed gesprek!
        <br></br>
        Heb je vragen over mijn werk, wil je samenwerken aan een project, of wil je meer weten over mijn expertise? 
        Neem gerust contact op via het formulier hieronder, en ik zal zo snel mogelijk reageren. <br></br><br></br>

        P.S. Aangezien het formulier niet echt werkt op het moment, kunt u ook contact opnemen via de E-Mail: K.C.Radenborg@gmail.com
        </p>
 
        {isSubmitted && (
          <div className="text-green-500 mb-4 font-semibold">
            Dankuwel! Uw bericht is verstuurt! U krijgt zo snel mogelijk antwoord!
          </div>
        )}


        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-violet-400 mb-1">Naam</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-violet-400"
              placeholder="Voer uw naam in"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-violet-400 mb-1">E-Mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-violet-400"
              placeholder="Vul uw E-Mail in"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-violet-400 mb-1">Bericht</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:border-violet-400"
              rows="4"
              placeholder="Vul uw bericht in"
            ></textarea>
          </div>
<button
            type="submit"
            className="bg-violet-600 text-lg px-6 py-3 rounded-md hover:bg-violet-700 transition-colors"
          >
            Verstuur Bericht
          </button>
        </form>
      </section>
      <footer className="py-10 text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} Faith Incorporated. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact; 