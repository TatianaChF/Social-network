import Paginator from "./Paginator";
import {render, screen} from "@testing-library/react";

describe("Paginator component", () => {
    test("pages count is 11 but only 10 should be show", () => {
        render(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        let spans = screen.getAllByRole("span");
        expect(spans.length).toBe(10);
    });

    test("if pages count is more then 10 button NEXT should be present", () => {
        render(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        let button = screen.getAllByRole("button");
        expect(button.length).toBe(1);
    });
})