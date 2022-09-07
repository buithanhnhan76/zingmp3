/// <reference types="cypress" />

describe("sidebar brand test", () => {
  it("sidebar brand logo click", () => {
    cy.visit("/");

    // cy.get('*[data-cy^="sidebar-brand"]').realHover().should('have.css', 'filter', 'brightness(0.9)');
    cy.get('*[data-cy^="sidebar-brand"]').click();
    // back to home page
    cy.get("h3").contains("Mới Phát Hành");
  });
});
