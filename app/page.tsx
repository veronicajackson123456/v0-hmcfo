"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "Creative Campaigns That Move Audiences",
    description:
      "HMCFO is a UK-based advertising agency specialising in the film and cinema industry, helping studios, distributors, and cinemas deliver campaigns that inspire, engage, and perform.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80",
    button: "READ MORE",
    link: "/about",
  },
  {
    title: "Bringing Stories to Life",
    description:
      "We craft compelling narratives that resonate with audiences across all platforms, from cinema screens to digital channels.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80",
    button: "EXPLORE FILMS",
    link: "/portfolio",
  },
  {
    title: "Strategic Cinema Marketing",
    description:
      "Partner with us to create unforgettable campaigns that drive box office success and build lasting audience connections.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80",
    button: "OUR WORK",
    link: "/portfolio",
  },
  {
    title: "Innovative Digital Solutions",
    description:
      "From social media campaigns to immersive experiences, we leverage cutting-edge technology to amplify your film's reach.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
    button: "DISCOVER MORE",
    link: "/services",
  },
  {
    title: "Award-Winning Creativity",
    description:
      "Our passion for cinema drives us to create campaigns that not only win awards but also win hearts and box office numbers.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&q=80",
    button: "VIEW PORTFOLIO",
    link: "/portfolio",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 flex h-full items-center justify-center px-4">
              <div className="max-w-4xl text-center">
                <h1 className="mb-6 text-5xl font-light leading-tight text-white md:text-7xl">{slide.title}</h1>
                <p className="mb-8 text-lg text-gray-300 md:text-xl">{slide.description}</p>
                <Link
                  href={slide.link}
                  className="inline-block border border-white px-8 py-3 text-sm tracking-wider text-white transition-colors hover:bg-white hover:text-black"
                >
                  {slide.button}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white opacity-50 transition-opacity hover:opacity-100 md:left-8"
          aria-label="Previous slide"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white opacity-50 transition-opacity hover:opacity-100 md:right-8"
          aria-label="Next slide"
        >
          <ChevronRight size={48} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/30"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 left-8 z-20 text-sm text-white">
          {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      {/* About Section */}
      <section className="bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xl leading-relaxed text-gray-300 md:text-2xl">
            At <span className="text-[#d4a574]">HMCFO</span>, we blend{" "}
            <span className="text-[#d4a574]">creativity</span>, <span className="text-[#d4a574]">strategy</span>, and{" "}
            <span className="text-[#d4a574]">cinematic storytelling</span> to deliver advertising experiences that move
            people — both emotionally and visually.
          </p>
          <p className="mt-8 text-center text-lg text-gray-400">
            From blockbuster film launches to cinema rebranding, we help studios, distributors, and entertainment brands
            shine on every screen.
          </p>
          <div className="mt-12 text-center">
            <h2 className="mb-4 text-3xl font-light text-white">Let's bring your vision to life — talk to us today.</h2>
            <Link
              href="/contact"
              className="inline-block border border-[#d4a574] px-8 py-3 text-sm tracking-wider text-[#d4a574] transition-colors hover:bg-[#d4a574] hover:text-black"
            >
              GET IN TOUCH
            </Link>
            <p className="mt-4 text-sm text-gray-500">Available for projects worldwide</p>
          </div>
        </div>
      </section>
    </div>
  )
}
