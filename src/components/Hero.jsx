import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center">
      <nav className="w-full flex justify-between items-center pt-3 mb-10">
        <span className="text-3xl font-medium text-gray-700 tracking-wide">
          KewNomad
        </span>
        <button
          type="button"
          onClick={() => window.open("https://github.com/osaid500/kewnomad")}
          className="bg-black border-black border-2 py-2 px-5 text-sm rounded-3xl text-white transition hover:bg-white hover:text-black"
        >
          Github
        </button>
      </nav>
      <h1 className="text-5xl font-medium text-center">
        Discover Your Career Journey with{" "}
        <span className="bg-gradient-to-r from-green-600 via-cyan-600 to-blue-400 bg-clip-text text-transparent">
          KewNomad
        </span>
      </h1>
      <h2 className="text-gray-800 text-center text-lg mt-5">
        KewNomad is your gateway to a diverse array of job opportunities.
        Explore carefully curated job listings, simplify your application
        process, and connect with companies fostering career growth. No
        subscriptions or user licenses—just a seamless experience designed for
        your career exploration.
      </h2>
    </header>
  );
};

export default Hero;
