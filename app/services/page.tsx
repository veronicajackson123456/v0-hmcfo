import { Briefcase, Film, Smartphone, Palette, MapPin, Users } from "lucide-react"

const services = [
  {
    number: "01",
    icon: Briefcase,
    title: "Film Launch Campaigns",
    description:
      "Strategic multi-channel campaigns — from teaser to premiere — that build awareness, anticipation, and box office success.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
  },
  {
    number: "02",
    icon: Film,
    title: "Cinema Branding & Marketing",
    description:
      "Brand identity design, promotional materials, and audience engagement strategies tailored for cinema networks and local theatres.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Digital & Social Media Advertising",
    description:
      "Performance-driven campaigns across YouTube, Meta, TikTok, and streaming platforms — built to connect with target audiences at scale.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    number: "04",
    icon: Palette,
    title: "Creative Production & Design",
    description:
      "High-impact visuals, posters, trailers, and motion graphics with cinematic quality that reinforce your brand identity.",
    image: "https://images.unsplash.com/photo-1574267432644-f74f5503f5bb?w=800&q=80",
  },
  {
    number: "05",
    icon: MapPin,
    title: "Outdoor & Experiential Advertising",
    description:
      "Immersive campaigns, billboard designs, and event activations that transform public spaces into storytelling experiences.",
    image: "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?w=800&q=80",
  },
  {
    number: "06",
    icon: Users,
    title: "Public Relations & Influencer Collaboration",
    description:
      "Integrated PR and influencer outreach to amplify your message across traditional and digital media channels.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="mb-4 text-sm tracking-widest text-[#d4a574]">WHAT WE DO</p>
          <h1 className="mb-6 text-5xl font-light text-white md:text-6xl">Our Services</h1>
          <p className="max-w-2xl text-lg text-gray-300">
            Comprehensive Advertising Solutions for the Film & Cinema Industry
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-gray-300">
            From <span className="text-white">concept development</span> to{" "}
            <span className="text-white">campaign execution</span>, HMCFO provides a complete range of services designed
            to meet the unique marketing demands of film studios, distributors, and cinemas.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-[#1a1f3a] px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-light text-white">Expertise That Delivers Results</h2>
          <p className="mb-16 text-center text-gray-400">Six core services designed to elevate your brand</p>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="group relative overflow-hidden border border-gray-800 bg-black/30 transition-all hover:border-[#d4a574]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="relative p-8">
                  <div className="absolute right-8 top-4 text-6xl font-light text-gray-800">{service.number}</div>
                  <div className="relative">
                    <div className="mb-6 inline-block rounded-sm border border-gray-700 p-4">
                      <service.icon className="h-8 w-8 text-[#d4a574]" />
                    </div>
                    <h3 className="mb-4 text-2xl font-light text-white">{service.title}</h3>
                    <p className="leading-relaxed text-gray-400">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
