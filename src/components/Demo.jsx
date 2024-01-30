import { useState, useEffect } from "react";

const Demo = () => {
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

    fetchData();
  }, []);

  return <div>Demo</div>;
};

export default Demo;
