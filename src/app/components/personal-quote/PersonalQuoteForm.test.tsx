import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { toast } from "sonner";

import { PersonalQuoteForm } from "./PersonalQuoteForm";

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

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

  it("shows validation errors via toast when submitted empty", async () => {
    render(<PersonalQuoteForm />);
    fireEvent.click(screen.getByRole("button", { name: "Submit Request" }));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });
});
