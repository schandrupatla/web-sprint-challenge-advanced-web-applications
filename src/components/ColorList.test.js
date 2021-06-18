import React from "react";
import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

let blankColor = [
  {
    code: { hex: "" },
    color: "Test",
    id: 1,
  },
  {
    code: { hex: "" },
    color: "Test",
    id: 2,
  },
];
let testColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
];

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={blankColor} />);
});

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={testColors} />);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  render(<ColorList colors={testColors} toggleEdit={false} />);
  const text = screen.queryByText(/edit color/i);
  if (!ColorList.toggleEdit) {
    expect(text).not.toBeInTheDocument();
  } else {
    expect(text).toBeInTheDocument();
  }
});
