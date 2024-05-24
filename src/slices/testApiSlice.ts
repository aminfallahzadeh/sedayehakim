// constant imports
import { API_URL } from "../constants";

// slice imports
import { apiSlice } from "./apiSlice";

export const testApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    testApi: builder.query({
      query: () => ({
        url: API_URL,
      }),
    }),
  }),
});

export const { useTestApiQuery } = testApiSlice;
