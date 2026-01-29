import Link from "next/link"

const projects = [
  {
    id: "a-beautiful-kill",
    title: "A Beautiful Kill",
    subtitle: "A psychological thriller redefining cinematic storytelling",
    badge: "UPCOMING RELEASE",
    image: "/a-beautiful-kill-hero.jpg",
  },
]

export default function PortfolioPage() {
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
          <p className="mb-4 text-sm tracking-widest text-[#d4a574]">FILM PORTFOLIO</p>
          <h1 className="mb-6 text-5xl font-light text-white md:text-6xl">Portfolio</h1>
          <div className="mb-4 h-px w-24 bg-[#d4a574]" />
          <p className="max-w-2xl text-2xl font-light text-white">Film Production and Broadcasting</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl leading-relaxed text-gray-300">
            Our work combines <span className="text-white">creativity</span> and{" "}
            <span className="text-white">commercial success</span> — driving measurable growth for film studios, cinema
            chains, and entertainment brands.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-[#1a1f3a] px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm tracking-widest text-[#d4a574]">UPCOMING</p>

          <div className="grid gap-12">
            {projects.map((project) => (
              <div key={project.id} className="grid gap-8 md:grid-cols-2 md:items-center">
                <Link href={`/portfolio/${project.id}`} className="group relative overflow-hidden rounded-lg">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.badge && (
                      <div className="absolute right-4 top-4 bg-white/10 px-3 py-1 text-xs tracking-wider text-white backdrop-blur-sm">
                        {project.badge}
                      </div>
                    )}
                  </div>
                </Link>
                <div>
                  <h2 className="mb-4 text-4xl font-light text-white">{project.title}</h2>
                  <p className="text-lg text-gray-400">{project.subtitle}</p>
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="mt-6 inline-block border border-[#d4a574] px-6 py-2 text-sm tracking-wider text-[#d4a574] transition-colors hover:bg-[#d4a574] hover:text-black"
                  >
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-light text-white">More Projects</h2>
          <div className="mb-8 flex justify-center">
            <div className="h-px w-24 bg-[#d4a574]" />
          </div>
          <h3 className="mb-6 text-2xl font-light text-[#d4a574]">Coming Soon...</h3>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-400">
            We're working on exciting new projects that will showcase our expertise in film production and broadcasting.
            Stay tuned for updates.
          </p>
        </div>
      </section>
    </div>
  )
}
