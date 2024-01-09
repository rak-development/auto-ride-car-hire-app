import React from "react";
import { render } from "@testing-library/react";

import { Testimonials } from "../components/testimonials/testimonials.component";

describe("<Testimonials />", () => {
  test("Loading Testimonials Component", async () => {
    render(<Testimonials />)
  });
});
