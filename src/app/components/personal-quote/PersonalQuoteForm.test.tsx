import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { PersonalQuoteForm } from "./PersonalQuoteForm";

describe("PersonalQuoteForm", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders detail, stay, and submit controls", () => {
    render(<PersonalQuoteForm />);

    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone Number")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit Request" })).toBeInTheDocument();
    expect(screen.getByText("Your Details")).toBeInTheDocument();
    expect(screen.getByText("Stay")).toBeInTheDocument();
  });

  it("logs validation failure when submitted empty", async () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<PersonalQuoteForm />);
    fireEvent.click(screen.getByRole("button", { name: "Submit Request" }));

    await waitFor(() => {
      expect(errorSpy).toHaveBeenCalled();
    });

    expect(errorSpy.mock.calls[0][0]).toBe("Personal quote validation failed:");
    errorSpy.mockRestore();
  });
});
