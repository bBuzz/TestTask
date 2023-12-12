import { beforeEach, describe, expect, it } from "vitest";
import { useGetTestDataQuery } from "./services/test";
import { render, renderHook, waitFor, screen } from "@testing-library/react";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import type { ReactNode } from "react";
import App from "./App";

const store = setupStore();

const data = {
  terms_of_use: {
    paragraphs: [
      {
        title: "title",
        text: "text",
        content: "content",
      },
    ],
  },
};

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

beforeEach(() => {
  fetchMock.resetMocks();
  fetchMock.mockOnceIf("/static/test.json", () =>
    Promise.resolve({
      status: 200,
      body: JSON.stringify(data),
    })
  );
});

describe("useGetTestDataQuery", () => {
  it("renders hook", async () => {
    const { result } = renderHook(() => useGetTestDataQuery(), {
      wrapper: Wrapper,
    });

    expect(result.current).toMatchObject({
      status: "pending",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });
    const component = render(<App />, {
      wrapper: Wrapper,
    });

    expect(screen.getByText("Loading...")).not.toBe(null);

    expect(component).toMatchSnapshot();

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock).toBeCalledTimes(1);

    console.log({ res: result.current });

    expect(result.current).toMatchObject({
      status: "fulfilled",
      isLoading: false,
      isSuccess: true,
      isError: false,
      isFetching: false,
    });

    expect(screen.getByTestId("tou-container")).not.toBe(null);
  });
});
