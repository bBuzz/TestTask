import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TermsOfUse } from ".";

describe("ErrorMessage", () => {
  it("renders default error state", () => {
    render(<TermsOfUse onAccept={() => {}} />);
    expect(screen.getByTestId("no-terms")).toHaveTextContent("There");
  });

  it('renders "There are no terms of use provided" message when termsOfUse is not provided', () => {
    const { getByTestId } = render(<TermsOfUse onAccept={() => {}} />);
    const noTermsElement = getByTestId("no-terms");
    expect(noTermsElement.textContent).toBe(
      "There are no terms of use provided"
    );
  });

  it("renders terms of use when termsOfUse is provided", () => {
    const mockTermsOfUse = {
      paragraphs: [
        {
          index: 1,
          title: "Introduction",
          content: "This is the introduction content.",
        },
        {
          index: 2,
          title: "Usage",
          text: "Please use this app responsibly.",
        },
      ],
    };

    const { getByTestId, getByText } = render(
      <TermsOfUse termsOfUse={mockTermsOfUse} onAccept={() => {}} />
    );
    const titleContainer = getByTestId("title-container");
    expect(titleContainer.textContent).toBe("Terms of Use");

    const introductionTitle = getByText("Introduction");
    const usageTitle = getByText("Usage");
    expect(introductionTitle).toBeDefined();
    expect(usageTitle).toBeDefined();
  });

  it("calls onAccept when Accept button is clicked", () => {
    const mockOnAccept = vi.fn();
    const { getByText } = render(
      <TermsOfUse termsOfUse={{ paragraphs: [] }} onAccept={mockOnAccept} />
    );

    const acceptButton = getByText("Accept");
    acceptButton.click();

    expect(mockOnAccept).toHaveBeenCalled();
  });
});
