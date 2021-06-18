import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blankColor = {
    code: {hex: ""},
   color: "Test",
   id: 1
}
const testColor = {
     code: {hex: "#f0f8ff"},
    color: "Test",
    id: 1
}


test("Renders without errors with blank color passed into component", () => {
    render (<Color color={blankColor}/>);
});
  
test("Renders the color passed into component", () => {
    render (<Color color={testColor}/>);
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    // const mockhandleDelete = jest.fn();
    // const mocktoggleEdit = jest.fn();

    // render(<Color toggleEdit={mocktoggleEdit} handleDelete={mockhandleDelete} />)
    // const button = screen.getByTestId("data-testid");
    // console.log("Button:",button);
    // userEvent.click(button);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});

// ------------
// test("calls getData when button is clicked", ()=> {
//     const mockGetData = jest.fn();

//     //Arrange: renders component
//     render(<MissionForm isFetchingData={false} getData={mockGetData}/>)

//     //Act: Click button
//     const button = screen.getByRole("button");
//     userEvent.click(button);
//     userEvent.click(button);
//     userEvent.click(button);

//     //Assert: ?
//     expect(mockGetData.mock.calls.length === 3).toBeTruthy();
//     expect(mockGetData.mock.calls.length).toBe(3);
//     expect(mockGetData.mock.calls).toHaveLength(3);
//     expect(mockGetData).toHaveBeenCalledTimes(3);
// });