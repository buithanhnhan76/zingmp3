/// <reference types="cypress" />
// utils
import { getDataCy } from "../utils";

describe("Change language button test", () => {
  // varibles
  const buttonDataCy = "change-language";
  const span = "span";
  const baseUrl = "/";
  const include = "include";
  const waitTime = 500;
  // before each
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Change language to vi", () => {
    // Arrange
    const itemTitle = "Cá Nhân";
    const locale = "vi";
    // Action
    cy.get(getDataCy(buttonDataCy)).select(locale);
    // Assert
    cy.url().should(include, `/${locale}`);
    // wait
    cy.wait(waitTime);
    cy.get(span).contains(itemTitle);
  });

  it("Change language to en", () => {
    // Arrange
    const itemTitle = "Personal";
    const locale = "en";
    // Action
    cy.get(getDataCy(buttonDataCy)).select(locale);
    // Assert
    cy.url().should(include, `/${locale}`);
    // wait
    cy.wait(waitTime);
    cy.get(span).contains(itemTitle);
  });
});
