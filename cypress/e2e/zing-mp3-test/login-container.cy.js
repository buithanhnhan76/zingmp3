/// <reference types="cypress" />

describe("authentication test", () => {
  it("User login test", () => {
    cy.visit("/");

    cy.get('*[data-cy^="login-button"]').click();

    cy.get('[data-cy="user-button"]').should("be.visible");
  });

  it("User logout test", () => {
    cy.get('*[data-cy^="user-button"]').click();

    cy.get('[data-cy="login-button"]').should("be.visible");
  });
});
