import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, it, expect } from "vitest";
import { ContactForm } from "@/components/interactive";
afterEach(cleanup);
it("disables unconfigured lead delivery visibly", () => {
  render(<ContactForm configured={false} />);
  expect(
    screen.getByRole("button", { name: /not configured/i }),
  ).toBeDisabled();
  expect(screen.getByText(/No request will be sent/)).toBeInTheDocument();
});
