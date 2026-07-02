import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/restaurantListMock.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: MOCK_DATA }),
  }),
);

it("Should search Restaurant List for Pizza text input", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>,
  );
  const restaurantsBeforeSearch = await screen.findAllByTestId("restaurant-card");
  expect(restaurantsBeforeSearch.length).toBe(8);

  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("SearchInput");
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    const restaurantsAfterSearch = screen.getAllByTestId("restaurant-card");
    expect(restaurantsAfterSearch.length).toBe(1);
  });
});

it("Should search for top rated restaurants", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>,
  );
  const restaurantsBeforeFilter = await screen.findAllByTestId("restaurant-card");
  expect(restaurantsBeforeFilter.length).toBe(8);

  const topRatedRestaurantsButton = screen.getByRole("button", { name: "Top Rated Restaurants" });
  fireEvent.click(topRatedRestaurantsButton);

  await waitFor(() => {
    const restaurantsAfterFilter = screen.getAllByTestId("restaurant-card");
    expect(restaurantsAfterFilter.length).toBe(4);
  });
});
