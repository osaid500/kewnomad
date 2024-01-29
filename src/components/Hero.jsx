import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center">
      <nav className="w-full flex justify-between items-center pt-3">
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
    </header>
  );
};

export default Hero;
