// libs
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// component
import SidebarCategoryItem from "src/layouts/Sidebar/components/SidebarCategoryItem";
import { async } from "storybook-static/40.50c5237b.iframe.bundle";

describe("Sidebar Category component", () => {
  // varibles
  const itemTilte = "Personal";
  const itemSrc = "/_next/static/media/live-tag.9a546247.svg";
  it("test renders Sidebar Category component label", () => {
    // Arrange
    const item = { title: itemTilte, src: itemSrc };
    // Action
    render(<SidebarCategoryItem item={item} />);
    // Assert
    expect(screen.getByText(itemTilte)).toBeInTheDocument();
  });

  it("test renders Sidebar Category Item image", async () => {
    // arrange
    const item = { title: itemTilte, src: itemSrc };
    let img = null;
    let resultImage = "";
    // action
    render(<SidebarCategoryItem item={item} />);
    img = screen.getByAltText("category item image");
    // wait for next image
    resultImage = await img.getAttribute("src");
    // assert
    expect(resultImage).toBe(itemSrc);
  });
});
