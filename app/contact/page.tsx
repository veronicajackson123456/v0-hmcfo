"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 text-5xl font-light text-white md:text-6xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">Let's discuss how we can bring your vision to life</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="border border-gray-800 bg-black/30 p-8 text-center">
            <div className="mb-4 inline-block rounded-sm border border-gray-700 p-4">
              <Mail className="h-8 w-8 text-[#d4a574]" />
            </div>
            <h3 className="mb-3 text-xl font-light text-white">Email</h3>
            <a href="mailto:info@hmcfo.cc" className="text-gray-400 transition-colors hover:text-[#d4a574]">
              info@hmcfo.cc
            </a>
          </div>
          <div className="border border-gray-800 bg-black/30 p-8 text-center">
            <div className="mb-4 inline-block rounded-sm border border-gray-700 p-4">
              <Phone className="h-8 w-8 text-[#d4a574]" />
            </div>
            <h3 className="mb-3 text-xl font-light text-white">Phone</h3>
            <a href="tel:+447400730791" className="text-gray-400 transition-colors hover:text-[#d4a574]">
              +44 7400 730791
            </a>
          </div>
          <div className="border border-gray-800 bg-black/30 p-8 text-center">
            <div className="mb-4 inline-block rounded-sm border border-gray-700 p-4">
              <MapPin className="h-8 w-8 text-[#d4a574]" />
            </div>
            <h3 className="mb-3 text-xl font-light text-white">Location</h3>
            <p className="text-sm text-gray-400">
              HMCFO LTD
              <br />
              Silverstream House
              <br />
              Fitzroy Street
              <br />
              Fitzrovia, London
              <br />
              W1T 6EB
            </p>
          </div>
        </div>
      </section>

      {/* Registered Office */}
      <section className="bg-[#1a1f3a] px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="border border-gray-800 bg-black/30 p-8 text-center">
            <h3 className="mb-4 text-xl font-light text-white">Registered Office</h3>
            <p className="text-sm text-gray-400">
              HMCFO LTD
              <br />
              Co no. 16814928
              <br />
              Silverstream House
              <br />
              Fitzroy Street
              <br />
              Fitzrovia, London
              <br />
              W1T 6EB
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-light text-white">Send Us a Message</h2>
          <p className="mb-12 text-center text-gray-400">
            Fill out the form below, and we'll get back to you within 24 hours
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm text-gray-400">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full border border-gray-700 bg-black/30 px-4 py-3 text-white placeholder-gray-600 focus:border-[#d4a574] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-gray-400">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full border border-gray-700 bg-black/30 px-4 py-3 text-white placeholder-gray-600 focus:border-[#d4a574] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="company" className="mb-2 block text-sm text-gray-400">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full border border-gray-700 bg-black/30 px-4 py-3 text-white placeholder-gray-600 focus:border-[#d4a574] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-gray-400">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 7407 730791"
                  className="w-full border border-gray-700 bg-black/30 px-4 py-3 text-white placeholder-gray-600 focus:border-[#d4a574] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-gray-400">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                rows={6}
                className="w-full border border-gray-700 bg-black/30 px-4 py-3 text-white placeholder-gray-600 focus:border-[#d4a574] focus:outline-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-[#d4a574] bg-transparent px-8 py-3 text-sm tracking-wider text-[#d4a574] transition-colors hover:bg-[#d4a574] hover:text-black"
              >
                SEND MESSAGE
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
