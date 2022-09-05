/// <reference types="cypress" />

describe("slider arrow test", () => {
  it("slider left arrow test", () => {
    cy.visit("/");
    // wait
    cy.wait(3000);
    cy.get('*[data-cy^="carousel-left-button"]').first().click();
  });

  it("slider right arrow test", () => {
    // wait
    cy.wait(3000);
    cy.get('*[data-cy^="carousel-right-button"]').first().click();
  });
});
