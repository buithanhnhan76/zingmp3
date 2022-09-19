/// <reference types="cypress" />
// utils
import { getDataCy } from "../utils";

describe("Sidebar brand component", () => {
  // varibles
  const baseUrl = "/";
  const sideBarBrand = "sidebar-brand";
  const testHeadingTitle = "Mới Phát Hành";
  it("Sidebar brand click", () => {
    // Action
    cy.visit(baseUrl);
    cy.get(getDataCy(sideBarBrand)).click();
    // Assert
    cy.get("h3").contains(testHeadingTitle);
  });
});
