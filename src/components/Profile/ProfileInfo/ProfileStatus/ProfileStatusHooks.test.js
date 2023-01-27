import {render, screen} from "@testing-library/react";
import ProfileStatusHooks from "./ProfileStatusHooks";

describe("ProfileStatus component", () => {
    test("passing status from props to state", () => {
        render(<ProfileStatusHooks status="Hello, my friends!" />);
        expect(screen.getByRole('span')).toHaveTextContent("Hello, my friends!");
    });
});