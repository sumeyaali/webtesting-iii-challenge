import React from "react";
import {render, fireEvent, getByTestId} from "@testing-library/react";
import Dashboard from "./Dashboard";

// import Controls from "../controls";

test("Controls and Display is being rendered",() => {
   const {getByTestId, rerender}= render(<Dashboard />);
    getByTestId("display")

    rerender(<Dashboard/>);
    getByTestId("controlsID")
});

