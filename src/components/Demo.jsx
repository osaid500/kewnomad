import { useState, useEffect } from "react";

import { jobApi, useLazyGetJobInfoQuery } from "../services/job";
import JobElement from "./JobElement";

const Demo = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState();

  const [getJobInfo, { error, isFetching }] = useLazyGetJobInfoQuery();

  async function handleSubmit(e) {
    e.preventDefault();

    const { data } = await getJobInfo({ searchQuery: searchQuery });

    if (data?.data) {
      setJobs(data?.data);
    }
  }

  const jobElements = jobs?.map((job, index) => {
    return (
      <JobElement
        key={`job_${index}`}
        imgLink={job.employer_logo}
        jobTitle={job.job_title}
        employerName={job.employer_name}
        jobLocation={`${job.job_city}, ${job.job_state}, ${job.job_country}`}
        applyLink={job.job_apply_link}
      />
    );
  });

  return (
    <section className="mt-16 w-full flex flex-col items-center">
      <form
        className="relative w-full gap-2 flex flex-col justify-center items-center max-w-xl"
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
      <div className="w-full grid grid-cols-1 gap-5 bg-green md:grid-cols-2 mt-10">
        {jobElements}
      </div>
    </section>
  );
};

export default Demo;
