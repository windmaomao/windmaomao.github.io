import React from "react";
import { shallow } from "enzyme";
import LayoutMessage from "../Layout/LayoutMessage";

describe('Layout Message', () => {
  const layout = {};
  const rendered = shallow(<LayoutMessage layout={layout} open={false} />);
  it("should render layout message", () => {
    expect(rendered.length).toBe(1);
  });
  it("should display paragraph", () => {
    expect(rendered.find('p').length).toBe(2);
  })
  it('should read props open', () => {
    expect(rendered.props().open).toBe(false);
  })
})
