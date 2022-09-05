/// <reference types="cypress" />

describe("sidebar item test", () => {
  it("sidebar item click test", () => {
    cy.visit("/");

    cy.get('*[data-cy^="sidebar-category-item"]').first().click();

    cy.get('*[data-cy^="sidebar-category-item"]')
      .first()
      .should(($div) => {
        const classes = $div.attr("class");
        expect(classes).to.contain("sidebar-item-active");
      });
  });
});
