import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("Should render Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  // const loginButton = screen.getByText("Login");
  //const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Login" });
  // use this, when multiple buttons are present
  expect(loginButton).toBeInTheDocument();
});

it("Should change login button to logout button on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});

it("Should render Header component with cart 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const cartItems = screen.getByText("Cart - (0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("Should render Header component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const cartItems = screen.getByText(/Cart/); // regex to match the text
  expect(cartItems).toBeInTheDocument();
});
