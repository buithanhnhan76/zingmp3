/// <reference types="cypress" />
// utils
import { getDataCy } from "../utils";

describe("Sidebar item test", () => {
  // varibles
  const baseUrl = "/";
  const sidebarCategoryItem = "sidebar-category-item";
  const sideBarItemActive = "sidebar-item-active";
  it("Sidebar item click", () => {
    // Action
    cy.visit(baseUrl);
    cy.get(getDataCy(sidebarCategoryItem)).first().click();
    // Assert
    cy.get(getDataCy(sidebarCategoryItem))
      .first()
      .should(($div) => {
        const classes = $div.attr("class");
        expect(classes).to.contain(sideBarItemActive);
      });
  });
});
