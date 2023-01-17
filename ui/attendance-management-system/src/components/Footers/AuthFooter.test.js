import React from "react";
import { render } from "@testing-library/react";
import AuthFooter from "./AdminFooter.js"

describe("Index Component", () => {
  it("renders index component without crash", () =>{
    render(<AuthFooter/>);
  });
});