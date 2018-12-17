import React from "react";
import { shallow } from "enzyme";
import LayoutMessage from "../Layout/LayoutMessage";

it("renders layout without crashing", () => {
  const layout = {};
  shallow(<LayoutMessage layout={layout} open={true} />);
});
