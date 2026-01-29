import { notFound } from "next/navigation"
import { DollarSign, MapPin, FilmIcon, Calendar } from "lucide-react"

const projects = {
  "a-beautiful-kill": {
    title: "A Beautiful Kill",
    subtitle: "A psychological thriller redefining cinematic storytelling",
    description:
      "A Beautiful Kill takes viewers on a thrilling journey into the enigmatic life of a woman who becomes entangled in a high-stakes web of deceit, luxury, and betrayal. As secrets unravel, the film explores the depths of human nature and the lengths people go to protect their truths.",
    budget: "€4M",
    location: "Marbella",
    genre: "Drama",
    release: "2025",
    tags: ["Psychological Thriller", "Suspense", "Spain Production"],
    videoUrl: "/a-beautiful-kill-poster.jpg",
    images: ["/a-beautiful-kill-hero.jpg", "/a-beautiful-kill-poster.jpg", "/a-beautiful-kill-scene.jpg"],
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Hero Section */}
      <section className="px-4 py-24 text-center">
        <h1 className="mb-6 text-5xl font-light text-white md:text-6xl">{project.title}</h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-400">{project.subtitle}</p>
      </section>

      {/* Video/Image Section */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <div className="absolute right-4 top-4 z-10 bg-white/10 px-4 py-2 text-sm tracking-wider text-white backdrop-blur-sm">
              UPCOMING RELEASE
            </div>
            <img
              src={project.videoUrl || "/placeholder.svg"}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-center text-lg leading-relaxed text-gray-300">{project.description}</p>

          <h2 className="mb-8 text-center text-3xl font-light text-white">Project Overview</h2>

          <p className="mb-12 text-center text-gray-400">
            Immerse yourself in the intrigue of <span className="text-[#d4a574]">{project.title}</span>, a psychological
            thriller set against the luxurious backdrop of Marbella, Spain. This project exemplifies our dedication to
            compelling narratives and stunning visuals.
          </p>

          {/* Project Details Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-gray-800 bg-black/30 p-6 text-center">
              <DollarSign className="mx-auto mb-4 h-8 w-8 text-[#d4a574]" />
              <div className="mb-2 text-2xl font-light text-white">{project.budget}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Budget</div>
            </div>
            <div className="border border-gray-800 bg-black/30 p-6 text-center">
              <MapPin className="mx-auto mb-4 h-8 w-8 text-[#d4a574]" />
              <div className="mb-2 text-2xl font-light text-white">{project.location}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Location</div>
            </div>
            <div className="border border-gray-800 bg-black/30 p-6 text-center">
              <FilmIcon className="mx-auto mb-4 h-8 w-8 text-[#d4a574]" />
              <div className="mb-2 text-2xl font-light text-white">{project.genre}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Genre</div>
            </div>
            <div className="border border-gray-800 bg-black/30 p-6 text-center">
              <Calendar className="mx-auto mb-4 h-8 w-8 text-[#d4a574]" />
              <div className="mb-2 text-2xl font-light text-white">{project.release}</div>
              <div className="text-sm uppercase tracking-wider text-gray-500">Release</div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="border border-gray-700 bg-black/30 px-4 py-2 text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
