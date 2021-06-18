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
    const mockhandleDelete = jest.fn();
    const mocktoggleEdit = jest.fn();
    const mocksetEditColor=jest.fn();

    render(<Color  setEditColor={mocksetEditColor} color={testColor} toggleEdit={mocktoggleEdit} deleteColor={mockhandleDelete} />)
     const button = screen.getByTestId("delete");
     userEvent.click(button);
     expect(mocktoggleEdit).toHaveBeenCalledTimes(1);
     expect(mockhandleDelete).toHaveBeenCalledTimes(1);
     const colorNum =screen.queryAllByTestId("color");
     expect(colorNum).toHaveLength(1);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
     const mockhandleDelete = jest.fn();
     const mocktoggleEdit = jest.fn();
     const mocksetEditColor=jest.fn();
    render(<Color  setEditColor={mocksetEditColor} color={testColor} toggleEdit={mocktoggleEdit} deleteColor={mockhandleDelete} />)
     let colorDiv = screen.queryByTestId('box');
     userEvent.click(colorDiv);
     expect(mocksetEditColor).toHaveBeenCalledTimes(1);
     expect(mocktoggleEdit).toHaveBeenCalledTimes(1);
    
    
});

