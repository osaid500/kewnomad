import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsearch.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "jsearch.p.rapidapi.com");
    },
  }),
  endpoints: (builder) => ({
    getJobInfo: builder.query({
      query: (params) => `/search?query=${params.searchQuery}`,
    }),
  }),
});

export const { useLazyGetJobInfoQuery } = jobApi;
