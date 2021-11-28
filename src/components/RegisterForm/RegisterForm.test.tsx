import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import userEvent from "@testing-library/user-event";

describe("Given a RegisterForm component", () => {
  describe("When it is render", () => {
    test("Then it should render a form with a 3 inputs and labels, and a button", () => {
      render(<RegisterForm />);

      const name = screen.getByLabelText("Name");
      const password = screen.getByLabelText("Password");
      const email = screen.getByLabelText("Email");

      expect(name).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
  });

  describe("When the user hasn't typed a name", () => {
    test("Then it should have a disabled button", () => {
      render(<RegisterForm />);
      const addButton = screen.getByRole("button", {
        name: "Create",
      });

      expect(addButton).toBeDisabled();
    });
  });

  describe("When the user has typed an username and a password", () => {
    test("Then login button should not be clickable", () => {
      render(<RegisterForm />);

      const nameInput = screen.getByPlaceholderText("Name");
      const passwordInput = screen.getByPlaceholderText("Password");
      const emailInput = screen.getByPlaceholderText("Email");
      userEvent.type(nameInput, "Arlet");
      userEvent.type(passwordInput, "Arlet");
      userEvent.type(emailInput, "arlet@arlet.com");
      const createButton = screen.getByRole("button", {
        name: "Create",
      });
      userEvent.click(createButton);

      expect(createButton).not.toBeDisabled();
    });
  });
});
