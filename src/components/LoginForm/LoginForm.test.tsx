import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is render", () => {
    test("Then it should render a form with a 2 inputs and labels, and a button", () => {
      const labelName = "Name";
      const labelPassword = "Password";

      render(<LoginForm />);

      const name = screen.getByLabelText(labelName);
      const password = screen.getByLabelText(labelPassword);

      expect(name).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    });
  });

  describe("When the user hasn't typed a name", () => {
    test("Then it should have a disabled button", () => {
      render(<LoginForm />);
      const addButton = screen.getByRole("button", {
        name: "Login",
      });

      expect(addButton).toBeDisabled();
    });
  });

  describe("When the user has typed an username and a password", () => {
    test("Then login button should not be clickable", () => {
      const labelName = "Name";
      const labelPassword = "Password";

      render(<LoginForm />);

      const nameInput = screen.getByPlaceholderText(labelName);
      const passwordInput = screen.getByPlaceholderText(labelPassword);

      userEvent.type(nameInput, "Arlet");
      userEvent.type(passwordInput, "Arlet");

      const createButton = screen.getByRole("button", {
        name: "Login",
      });
      userEvent.click(createButton);

      expect(createButton).not.toBeDisabled();
    });
  });
});
