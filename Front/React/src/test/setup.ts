import "@testing-library/jest-dom/vitest";
import createFetchMock from "vitest-fetch-mock";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

const fetchMocker = createFetchMock(vi);

fetchMocker.enableMocks();
