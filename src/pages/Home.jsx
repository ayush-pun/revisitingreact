import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen bg-neutral-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Hero */}
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-xl">
          🌍 Welcome to Your Journey
        </div>

        {/* Title */}
        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-white">The World</span>
          <br />
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            Is Yours.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
          Discover endless possibilities, explore breathtaking destinations,
          and create unforgettable memories. Every journey begins with a single
          step.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <button className="rounded-full bg-white px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200">
            Explore Now
          </button>

          <button className="rounded-full border border-white/15 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:border-white/30 hover:bg-white/10">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-24 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10">
            <h2 className="text-4xl font-bold">150+</h2>
            <p className="mt-2 text-gray-400">Countries to Explore</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10">
            <h2 className="text-4xl font-bold">1M+</h2>
            <p className="mt-2 text-gray-400">Happy Travelers</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10">
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="mt-2 text-gray-400">Travel Support</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <div className="flex h-10 w-6 justify-center rounded-full border border-white/20">
            <div className="mt-2 h-2 w-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;