'use client';

import { useState } from 'react';
import { MapPin, Phone, Instagram, MessageCircle, Mail, Send } from 'lucide-react';
import { generateGeneralInquiry, generateWhatsAppLink } from '@/utils/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message with form data
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(generateWhatsAppLink(message), '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and 
            we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-foreground/70">Chandigarh, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                    <a
                      href="tel:+919878122555"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      +91 98781 22555
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <a
                      href="https://www.instagram.com/parizaadchd_07/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      @parizaadchd_07
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Button */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-3">Prefer WhatsApp?</h3>
              <p className="mb-6 text-white/90">
                Get instant responses to your queries on WhatsApp
              </p>
              <a
                href={generateWhatsAppLink(generateGeneralInquiry())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-muted rounded-xl p-6">
              <h3 className="font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm text-foreground/70">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">11:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 gradient-primary text-white px-6 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                <span>Send Message via WhatsApp</span>
              </button>

              <p className="text-sm text-foreground/60 text-center">
                This will open WhatsApp with your pre-filled message
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
