// libs
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import FavoriteArtist from "src/views/Home/mains/FavoriteArtist";

describe("Favorite Artist component", () => {
  it("renders Favorite Artist component", () => {
    // Arrange
    const role = "heading";
    let heading = null;
    // Action
    render(<FavoriteArtist />);
    heading = screen.getByRole(role, {
      name: /Nghệ Sĩ Yêu Thích/i,
    });
    // Assert
    expect(heading).toBeInTheDocument();
  });
});
