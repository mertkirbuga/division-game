import { screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button component", () => {
    it("does props function is NOT called when button is NOT clicked", () => {
        const propsFunc = jest.fn();
        render(<Button clicked={propsFunc}/>);
        expect(propsFunc).not.toHaveBeenCalled();
    });
    it("does props function is called when button is clicked", () => {
        const propsFunc = jest.fn();
        render(<Button clicked={propsFunc}/>);
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        expect(propsFunc).toHaveBeenCalled();
    });
});