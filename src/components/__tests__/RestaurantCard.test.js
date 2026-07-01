import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/restaurantCardMock.json";

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const restaurantName = screen.getByText("Barbeque Nation");
  expect(restaurantName).toBeInTheDocument();
});

it("Should render RestaurantCard with promoted label", () => {
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);
  const promotedLabel = screen.getByText("Newly Opened");
  expect(promotedLabel).toBeInTheDocument();
});
