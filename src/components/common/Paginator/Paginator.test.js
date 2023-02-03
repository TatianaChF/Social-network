import Paginator from "./Paginator";
import {render, screen} from "@testing-library/react";

describe("Paginator component", () => {
    test("pages count is 11 but only 10 should be show", () => {
        render(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        let spans = screen.getAllByRole("span");
        expect(spans.length).toBe(10);
    })
})