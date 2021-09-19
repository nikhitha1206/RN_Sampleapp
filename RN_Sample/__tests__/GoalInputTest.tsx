import { render, fireEvent, cleanup } from "@testing-library/react-native";
import React from 'react';
import { Button } from "react-native";
import renderer from 'react-test-renderer';
import GoalInput from '../components/GoalInput'
import { configure ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Modal } from "react-native";

configure({ adapter: new Adapter() });

//Failing to call cleanup when you've called render could result in a memory leak and tests which are not "idempotent" (which can lead to difficult to debug errors in your tests).
afterEach(cleanup);

describe("render",()=>{
    const onEventMock = jest.fn();
    test('renders correctly', () => {
        const tree = renderer.create(<GoalInput />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    test("test presence of input field",()=>{
        const { getByPlaceholderText } = render(<GoalInput />);
        const input = getByPlaceholderText("Course Goal");
        expect(input).not.toBeNull();
    })  
    test("test setting value to input field",()=>{
        // const { getByPlaceholderText } = render(<GoalInput handleChangeText={onEventMock} />);
        // const input = getByPlaceholderText("Course Goal");
        // fireEvent.changeText(input, "abc");

     
      //expect(onEventMock.mockName).toHaveBeenCalledTimes(1);
    })
    test("wheater it is modal component",()=>{
        const wrapper=shallow(<GoalInput />)
        expect(wrapper.type()).toEqual(Modal)
    })
    test("wheater add button present or not",()=>{
        const { getByText} = render(<GoalInput />);
        const btn = getByText("ADD");
        expect(btn).not.toBeNull();
    })
    test("wheater cancel button present or not",()=>{
        const { getByText} = render(<GoalInput />);
        const btn = getByText("CANCEL");
        expect(btn).not.toBeNull();
    })
    test("number of buttons test",()=>{
        const wrapper=shallow(<GoalInput />)
        console.log(wrapper)
        expect(wrapper.find("Button")).toHaveLength(2)
    })
})