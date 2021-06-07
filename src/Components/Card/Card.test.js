import React from "react";
import { render } from "@testing-library/react";
import card from "./card";

describe("card tests", () => {
  it("should render", () => {
    expect(render(<card />)).toBeTruthy();
  });
});
