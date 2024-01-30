import { configureStore } from "@reduxjs/toolkit";

import { jobApi } from "./job";

export const store = configureStore({
  reducer: { [jobApi.reducerPath]: jobApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobApi.middleware),
});
