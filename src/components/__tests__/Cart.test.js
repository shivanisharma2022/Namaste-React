import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import MOCK_DATA from "../mocks/restaurantMenuMock.json";
import { Header } from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: MOCK_DATA }),
  }),
);

it("Should load Restaurant Menu component", async () => {
  render(
    <MemoryRouter initialEntries={["/restaurant/307799"]}>
      <Routes>
        <Route
          path="/restaurant/:resid"
          element={
            <Provider store={appStore}>
              <Header />
              <RestaurantMenu />
              <Cart />
            </Provider>
          }
        />
      </Routes>
    </MemoryRouter>,
  );

  const accordianHeader = await screen.findByText("Recommended (5)");

  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("food-items");
  const cartItemsBefore = await screen.findByText("Cart - (0 items)");
  expect(cartItemsBefore).toBeInTheDocument();

  expect(foodItems.length).toBe(5);

  const addButtons = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addButtons[0]);
  const cartItemsAfter = await screen.findByText("Cart - (1 items)");
  expect(cartItemsAfter).toBeInTheDocument();

  fireEvent.click(addButtons[1]);
  const cartItemsAfter2 = await screen.findByText("Cart - (2 items)");
  expect(cartItemsAfter2).toBeInTheDocument();

  const foodItemsAfterAdding2Items = screen.getAllByTestId("food-items");
  expect(foodItemsAfterAdding2Items.length).toBe(7);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  const cartItemsAfterClearing = await screen.findByText("Cart - (0 items)");
  expect(cartItemsAfterClearing).toBeInTheDocument();

  expect(
    screen.getByText("Your cart is empty. Please add items in your cart!"),
  ).toBeInTheDocument();
});
