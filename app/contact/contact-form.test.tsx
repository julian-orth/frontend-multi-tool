import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "./contact-form";

describe("ContactForm", () => {
  it("shows validation errors when submitting empty form", () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole("button", { name: /validate and send/i }));

    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
    expect(
      screen.getByText(/please enter a valid email address/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/please enter a subject/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a message/i)).toBeInTheDocument();
  });

  it("validates email format on blur", () => {
    render(<ContactForm />);

    const emailInput = screen.getByLabelText(/email address/i);
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.blur(emailInput);

    expect(
      screen.getByText(/please enter a valid email address/i)
    ).toBeInTheDocument();
  });

  it("shows success state and clears fields for valid submission", () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: "Julian North" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "julian@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: "Portfolio feedback" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Great tools. I found one edge case in UUID parsing." },
    });

    fireEvent.click(screen.getByRole("button", { name: /validate and send/i }));

    expect(
      screen.getByText(/thanks\. your message is ready and validated/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/your name/i)).toHaveValue("");
    expect(screen.getByLabelText(/email address/i)).toHaveValue("");
    expect(screen.getByLabelText(/subject/i)).toHaveValue("");
    expect(screen.getByLabelText(/message/i)).toHaveValue("");
  });
});
