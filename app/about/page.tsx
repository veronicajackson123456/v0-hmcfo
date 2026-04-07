export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Hero Section */}
      <section className="px-4 py-24 text-center">
        <p className="mb-4 text-sm tracking-widest text-[#d4a574]">ABOUT OUR CREATIVE STUDIO</p>
        <h1 className="mb-6 text-5xl font-light leading-tight text-white md:text-6xl">
          The Art of Film Advertising — Perfected.
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-400">
          We are a passionate team of creatives, strategists, and filmmakers.
        </p>
      </section>

      {/* Cinema Image */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80"
              alt="Cinema with pink neon lights"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a] px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-4xl font-light text-white">Our Approach</h2>
            <p className="mb-6 leading-relaxed text-gray-300">
              We work with film producers, cinema chains, and distributors to deliver tailored marketing strategies that
              captivate audiences and generate measurable impact.
            </p>
            <p className="leading-relaxed text-gray-300">
              Every campaign we produce combines cinematic visuals, innovative digital storytelling, and audience
              insights — ensuring your brand not only stands out but stays memorable.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1594904578869-c011783103c7?w=1920&q=80"
              alt="Cinema interior"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-[#1a1f3a] px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
                alt="Luxury rooftop pool"
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-6 text-4xl font-light text-white">Our Mission</h2>
            <p className="leading-relaxed text-gray-300">
              Founded in the UK, HMCFO was built by creatives who live and breathe cinema. With over 15 years of
              experience in entertainment marketing, we understand what it takes to capture attention in a crowded
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-light text-white">Core Values</h2>
          <p className="mb-16 text-center text-gray-400">Our principles that guide our work.</p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden border border-gray-800 bg-black/30 p-8 text-center transition-all hover:border-[#d4a574]">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full border border-[#d4a574] p-6">
                  <svg className="h-8 w-8 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-light text-white">Creativity That Inspires</h3>
              <p className="leading-relaxed text-gray-400">Every idea begins with a story worth telling.</p>
            </div>

            <div className="group relative overflow-hidden border border-gray-800 bg-black/30 p-8 text-center transition-all hover:border-[#d4a574]">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full border border-[#d4a574] p-6">
                  <svg className="h-8 w-8 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-light text-white">Results That Matter</h3>
              <p className="leading-relaxed text-gray-400">
                We design campaigns that drive visibility, sales, and engagement.
              </p>
            </div>

            <div className="group relative overflow-hidden border border-gray-800 bg-black/30 p-8 text-center transition-all hover:border-[#d4a574]">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full border border-[#d4a574] p-6">
                  <svg className="h-8 w-8 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-light text-white">Industry Expertise</h3>
              <p className="leading-relaxed text-gray-400">Decades of experience in UK and global film advertising.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Credentials */}
      <section className="bg-[#0a0e27] px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-[#d4a574] bg-[#d4a574]/5 p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d4a574]">Company Registration</p>
              <p className="text-3xl font-semibold text-white">Co no. 16814928</p>
              <p className="mt-4 text-sm text-gray-400">Registered in England & Wales</p>
            </div>
            <div className="border border-gray-800 bg-black/30 p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d4a574]">Established</p>
              <p className="text-3xl font-semibold text-white">15+ Years</p>
              <p className="mt-4 text-sm text-gray-400">Industry experience in film advertising</p>
            </div>
            <div className="border border-gray-800 bg-black/30 p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d4a574]">Office</p>
              <p className="text-lg font-semibold text-white">London, UK</p>
              <p className="mt-4 text-sm text-gray-400">Fitzrovia, London W1T 6EB</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a0e27] px-4 py-16 text-center">
        <h2 className="mb-4 text-3xl font-light text-white">Let's bring your vision to life — talk to us today.</h2>
        <a
          href="/contact"
          className="inline-block border border-[#d4a574] px-8 py-3 text-sm tracking-wider text-[#d4a574] transition-colors hover:bg-[#d4a574] hover:text-black"
        >
          GET IN TOUCH
        </a>
        <p className="mt-4 text-sm text-gray-500">Available for projects worldwide</p>
      </section>
    </div>
  )
}
