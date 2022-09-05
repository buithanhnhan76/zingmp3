/// <reference types="cypress" />

describe("change language button test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Change language to en", () => {
    cy.get('*[data-cy^="change-language"]').select("en");

    cy.url().should("include", "/en");

    cy.get("span").contains("Personal");
  });

  it("Change language to vi", () => {
    cy.get('*[data-cy^="change-language"]').select("vi");

    cy.url().should("include", "/vi");

    cy.get("span").contains("Cá Nhân");
  });
});
