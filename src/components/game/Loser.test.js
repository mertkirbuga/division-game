import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loser from "./Loser";

describe("Loser module", () => {
    it("does image is rendered when Winner component is mounted", () => {
        render(<Loser />);
        const imageElement = screen.getByAltText("Loser");
        expect(imageElement).toBeInTheDocument();
    });
});