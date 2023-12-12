import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TestResponseDTO } from "../types/test";

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getTestData: build.query<TestResponseDTO, void>({
      query: () => "static/test.json",
    }),
  }),
});

export const { useGetTestDataQuery } = testApi;
