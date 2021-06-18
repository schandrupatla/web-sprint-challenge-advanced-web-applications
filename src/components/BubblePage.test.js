import React from 'react';
import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';
import { renderSync } from 'sass';
import fetchColorService from '../services/fetchColorService';
//jest.mock('../services/fetchColorService');

  

test("Renders without errors", ()=> {
    render(<BubblePage/>)
    
});
test("Renders appropriate number of colors passed in through mock", async ()=> {
     //Keep in mind that our service is called on mount for this component.
});

//test("Renders appropriate number of colors passed in through mock", async ()=> {
    // render(<BubblePage  mockfetchColorService={mockfetchColorService}/>)
    //render(<BubblePage />);
    // fetchColorService.mockResolvedValueOnce({
    //      colors : [
    //         {
    //           color: "aliceblue",
    //           code: {
    //             hex: "#f0f8ff",
    //           },
    //           id: 1,
    //         },
    //         {
    //           color: "limegreen",
    //           code: {
    //             hex: "#99ddbc",
    //           },
    //           id: 2,
    //         },
    //         {
    //           color: "aqua",
    //           code: {
    //             hex: "#00ffff",
    //           },
    //           id: 3,
    //         },
    //     ]
    // });
    //Keep in mind that our service is called on mount for this component.
    //await waitFor(()=> {
        //let colorsNum = screen.queryAllByTestId("color");
       // expect(colorsNum).toHaveLength(3);
   // });
    
//  });