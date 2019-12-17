import React from "react";
import {render, fireEvent} from "@testing-library/react";
import Controls from "./Controls";


test("Open and closed gates are responding ", () => {

    const {getByText, rerender} = render(<Controls closed={false}/> )

    const openGate = getByText(/Close Gate/i);
    fireEvent.click(openGate);
    getByText(/Close Gate/i)

    rerender(<Controls closed={true}/>)
    const closedGate = getByText(/Open Gate/i);
    fireEvent.click(closedGate);
    getByText(/Open Gate/i)
    
});

test("the closed toggle button is disabled if the gate is locked", () => {
    const {getByText} = render(<Controls closed={false} locked={false}/>)

    const toggledClosed = getByText(/Close Gate/i);

    fireEvent.click(toggledClosed);
    getByText(/Close Gate/i)


})


test("Lock button is responding", () => {
    
    const {getByText, rerender} = render(<Controls locked={true} />)


    const lockGate =  getByText(/unLock Gate/i)
    fireEvent.click(lockGate);
    getByText(/unLock Gate/i)

    rerender(<Controls locked={false} />)
    const unLockGate = getByText(/Lock Gate/i)
    fireEvent.click(unLockGate);
    getByText(/Lock Gate/i)

})

test("the locked toggle button is disabled if the gate is open", () => {
    const {getByText} = render(<Controls closed={true} locked={true}/>)

    const toggleLocked=getByText(/Unlock Gate/i);
    fireEvent.click(toggleLocked);
    getByText(/Unlock Gate/i)

})

