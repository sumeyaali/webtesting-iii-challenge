import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Display from "./Display";


test("Open and closed are displaying", () => {

    const {getByText,rerender} = render(<Display closed={false} />);

    const openDisplay = getByText(/Open/i)
    fireEvent.click(openDisplay);
    getByText(/Open/i)

    rerender(<Display closed={true} />)
    const closeDisplay = getByText(/Closed/i);
    fireEvent.click(closeDisplay);
    getByText(/Closed/i)
});

test("Locked and Unlocked are displaying depending on if the lock prop is true or not", () => {
    const {getByText, rerender} = render(<Display locked = {false} />)

    const unlockedDisplay = getByText(/Unlocked/i);
    fireEvent.click(unlockedDisplay);
    getByText(/Unlocked/i)

    rerender(<Display locked={true}/>)
    const lockedDisplay = getByText(/Locked/i);
    fireEvent.click(lockedDisplay);
    getByText(/Locked/i)
})

test("locked or closed are using the red-led class", () => {
    const {getByText} = render(<Display  locked={true} closed={true}/>)

    const redLocked = getByText(/locked/i);
    expect(redLocked.classList.contains("red-led")).toBe(true);
    const redClosed= getByText(/closed/i);
    expect(redClosed.classList.contains("red-led")).toBe(true);
})

test("locked or closed are using the red-led class", () => {
    const {getByText} = render(<Display  locked={false} closed={false}/>)

    const greenUnlocked = getByText(/Unlocked/i);
    expect(greenUnlocked.classList.contains("green-led")).toBe(true);
    const greenOpen= getByText(/Open/i);
    expect(greenOpen.classList.contains("green-led")).toBe(true);
})



