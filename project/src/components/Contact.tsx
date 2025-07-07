import React, { useState } from 'react';
import { Send, User, Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#6d6875] mb-6"
            style={{ fontFamily: 'Unkempt, cursive' }}
          >
            Get In Touch
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row: Name and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6d6875]" size={20} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-none bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] placeholder-[#6d6875] text-[#6d6875] focus:outline-none focus:ring-2 focus:ring-[#6d6875] transition-all duration-200"
                  required
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6d6875]" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-none bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] placeholder-[#6d6875] text-[#6d6875] focus:outline-none focus:ring-2 focus:ring-[#6d6875] transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Second Row: Message */}
            <div className="relative">
              <MessageCircle className="absolute left-3 top-4 text-[#6d6875]" size={20} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-none bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] placeholder-[#6d6875] text-[#6d6875] focus:outline-none focus:ring-2 focus:ring-[#6d6875] transition-all duration-200 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#6d6875] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b5838d] transition-colors duration-200 flex items-center space-x-2 transform hover:scale-105"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>

        {/* Blog & Resume Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#6d6875] mb-4">Latest Blog Posts</h3>
            <div className="space-y-4">
              <div className="border-b border-[#6d6875]/20 pb-4">
                <h4 className="text-lg font-semibold text-[#6d6875] mb-2">Modern React Patterns</h4>
                <p className="text-white/90 text-sm mb-2">Exploring the latest patterns in React development...</p>
                <button className="text-[#6d6875] hover:text-[#b5838d] font-medium">Read more →</button>
              </div>
              <div className="border-b border-[#6d6875]/20 pb-4">
                <h4 className="text-lg font-semibold text-[#6d6875] mb-2">DevOps Best Practices</h4>
                <p className="text-white/90 text-sm mb-2">Essential practices for modern DevOps workflows...</p>
                <button className="text-[#6d6875] hover:text-[#b5838d] font-medium">Read more →</button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#6d6875] mb-4">My Resume</h3>
            <p className="text-white/90 mb-6">
              Download my comprehensive resume to learn more about my experience and skills.
            </p>
            <div className="space-y-4">
              <button className="w-full bg-[#6d6875] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b5838d] transition-colors duration-200">
                View Resume
              </button>
              <button className="w-full border-2 border-[#6d6875] text-[#6d6875] px-6 py-3 rounded-lg font-semibold hover:bg-[#6d6875] hover:text-white transition-all duration-200">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;