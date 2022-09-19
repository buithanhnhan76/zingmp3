/// <reference types="cypress" />
// utils
import { getDataCy } from "../utils";

describe("Slider arrow component", () => {
  // Varibles
  const baseUrl = "/";
  const carouselLeftButton = "carousel-left-button";
  const carouselRightButton = "carousel-right-button";
  const waitTime = 3000;
  it("Click left Slider arrow", () => {
    // Action
    cy.visit(baseUrl);
    // wait
    cy.wait(waitTime);
    cy.get(getDataCy(carouselLeftButton)).first().click();
  });

  it("slider right arrow test", () => {
    // Action
    // wait
    cy.wait(waitTime);
    cy.get(getDataCy(carouselRightButton)).first().click();
  });
});
