import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import blogData from "../data/blog";

test("renders blog name, about text, and articles from props", () => {
  render(<App />);
  
  expect(screen.getByText(blogData.name)).toBeInTheDocument();
  expect(screen.getByText(blogData.about)).toBeInTheDocument();
  expect(screen.getByAltText("blog logo")).toBeInTheDocument();
});