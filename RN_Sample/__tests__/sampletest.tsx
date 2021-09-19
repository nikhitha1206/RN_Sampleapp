// __tests__/Intro-test.js
import { render, fireEvent, cleanup } from "@testing-library/react-native";
import React from 'react';
import { Button } from "react-native";
import renderer from 'react-test-renderer';
import App from '../App';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
describe("add new goal button test",()=>{
  const onPress = jest.fn();
    test("button test", () => {
      const { getByText } = render(<App />);
      const btn = getByText("Add new Goal");
      expect(btn).not.toBeNull();
    });
    test("number of buttons test",()=>{
      const { getByText }=render(<App />);
      const btn=getByText("Add new Goal");
      expect(btn.findAllByType).toHaveLength(1)
    });
    test("button on press",()=>{
      const { getByText }=render(<Button title="Add new Goal" onPress={onPress} />)
    });
})