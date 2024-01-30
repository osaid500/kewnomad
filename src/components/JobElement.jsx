import React from "react";

const JobElement = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-white border border-gray-400 p-4 cursor-pointer transition hover:border-cyan-700">
      <div className="flex gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0"
          alt="employer logo"
        />
        <div>
          <p className="text-cyan-700">Rockstar Games New York</p>
          <p className="text-lg">Project Manager</p>
          <p className="text-gray-500">Houston, TX, US</p>
        </div>
        <div className="ml-auto">
          <a href="/">
            <i class="fa-solid fa-diamond-turn-right text-3xl transition hover:text-cyan-600"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobElement;
