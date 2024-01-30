import { useState, useEffect } from "react";

const Demo = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://arbeitnow.com/api/job-board-api");
        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    // fetchData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    alert("submitted");
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full px-10 py-5 text-gray-700 rounded-md focus:outline-none"
            type="text"
            placeholder="Search for a job"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
          <button className="absolute right-0 mr-4 px-4 py-2 rounded-md font-medium bg-emerald-600 text-white transition hover:bg-emerald-700">
            Find Jobs
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
