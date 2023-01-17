import React from "react";
import { render } from "@testing-library/react";
import AuthFooter from "./AdminFooter.js"

describe("AuthFooter Component", () => {
  it("renders authfooter component without crash", () =>{
    render(<AuthFooter/>);
  });
});