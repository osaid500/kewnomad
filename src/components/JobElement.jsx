import React from "react";

const JobElement = (props) => {
  function handleClick(e) {
    console.log(e.target.tagName);
    if (e.target.tagName !== "I" && e.target.tagName !== "A") {
      window.open(props.applyLink);
    }
  }

  return (
    <div
      id="job-element"
      className="w-full h-36 flex flex-col justify-center gap-4 bg-white border border-gray-400 p-4 cursor-pointer transition hover:border-cyan-700"
      onClick={handleClick}
    >
      <div className="flex items-center gap-4">
        <img
          className="w-16 h-16 border border-gray-500 p-1 object-contain rounded-[100%]"
          src={props.imgLink || "https://shmector.com/_ph/13/188552034.png"}
          alt="employer logo"
        />
        <div className="overflow-hidden">
          <p className="text-cyan-700">{props.employerName}</p>
          <p className="text-lg w-full truncate">{props.jobTitle}</p>
          <div className="flex gap-1 items-center mt-1 text-sm text-gray-500">
            <i className="fa-solid fa-location-dot"></i>
            <p className="text-gray-500">{props.jobLocation}</p>
            <i className="fa-regular fa-calendar ml-6"></i>
            <span className="">{props.daysPosted} days ago</span>
          </div>
        </div>
        <div className="ml-auto">
          <a href={props.applyLink} target="_blank">
            <i className="fa-solid fa-diamond-turn-right text-3xl transition hover:text-cyan-600"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobElement;
