// libs
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// component
import SidebarCategoryItem from "src/layouts/Sidebar/components/SidebarCategoryItem";

describe("Sidebar Category component", () => {
  it("test renders Sidebar Category component label", () => {
    // arrange
    const item = {title: "Personal", src: "/_next/static/media/live-tag.9a546247.svg"}
    // action
    render(<SidebarCategoryItem item={item} />);
    // assert
    expect(screen.getByText("Personal")).toBeInTheDocument();
  });

  it("test renders Sidebar Category component image", () => {
    // arrange
    const item = {title: "Personal", src: "/_next/static/media/live-tag.9a546247.svg"}
    // action
    render(<SidebarCategoryItem item={item} />);
    // assert
    const testImage = document.querySelector("img");
    expect(testImage.src).toContain("/_next/static/media/live-tag.9a546247.svg");

  });
});
