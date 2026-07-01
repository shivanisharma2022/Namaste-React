import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("ContactUs Component", () => {
  test("Should load ContactUs Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside the form", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load inputName inside the form", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 3 input boxes inside the form", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes);
    expect(inputBoxes.length).toBe(3);
  });
});
