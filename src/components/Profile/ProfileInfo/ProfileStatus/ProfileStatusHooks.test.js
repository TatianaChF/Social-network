import {fireEvent, render, screen} from "@testing-library/react";
import ProfileStatusHooks from "./ProfileStatusHooks";

describe("ProfileStatus component", () => {
    test("passing status from props to state", () => {
        render(<ProfileStatusHooks status="Hello, my friends!" />);
        expect(screen.getByRole("span")).toHaveTextContent("Hello, my friends!");
    });
    test("status must not be null", () => {
        render(<ProfileStatusHooks status="Hello, my friends!" />);
        let span = screen.getByRole("span");
        expect(span).not.toBe(null);
    });
    test("input must be null", () => {
        render(<ProfileStatusHooks status="Hello, my friends!" />);
        expect( () => {
            screen.getByRole("input")
        }).toThrow();
    });
    test("changing span to input on double click", () => {
        render(<ProfileStatusHooks status="Hello, my friends!" />);
        let span = screen.getByRole("span");
        fireEvent.dblClick(span);
        expect(screen.getByRole("textbox")).toHaveAttribute("value","Hello, my friends!");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        render(<ProfileStatusHooks status="Hello, my friends!" updateUserStatus={mockCallback} />);
        let span = screen.getByRole("span");
        fireEvent.dblClick(span);
        let input = screen.getByRole("textbox");
        fireEvent.blur(input);
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});