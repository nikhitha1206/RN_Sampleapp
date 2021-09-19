import { render, fireEvent, cleanup } from "@testing-library/react-native";
import React from 'react';
import { Button } from "react-native";
import renderer from 'react-test-renderer';
import GoalItem from "../components/GoalItem";
import { configure ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
afterEach(cleanup);
describe("render",()=>{
    const onEventMock = jest.fn();
    test('renders correctly', () => {
        const tree = renderer.create(<GoalItem onDelete={onEventMock}/>).toJSON();
        expect(tree).toMatchSnapshot();
      });  
      
})