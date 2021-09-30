import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Winner from "./Winner";

describe("Winner module", () => {
    it("does image is rendered when Winner component is mounted", () => {
        render(<Winner />);
        const imageElement = screen.getByAltText("Winner");
        expect(imageElement).toBeInTheDocument();
    });
});