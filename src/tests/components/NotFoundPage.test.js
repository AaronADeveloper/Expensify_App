import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";
import { Link } from "react-router-dom";

test("should render test page", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
