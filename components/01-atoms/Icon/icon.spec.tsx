import React from "react";
import { render } from "@testing-library/react";

import * as Icons from "./icon.composition";

describe("Icon", () => {
  test("snapshots", () => {
    const icons = Object.values(Icons).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    icons.forEach((icon) => {
      const Component = icon;

      const { asFragment } = render(<Component />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
