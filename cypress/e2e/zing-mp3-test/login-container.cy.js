/// <reference types="cypress" />
// varibles
import { visible } from "../varibles";
// utils
import { getDataCy } from "../utils";

describe("Authentication test", () => {
  // varibles
  const baseUrl = "/";
  const loginButton = "login-button";
  const userButton = "user-button";
  it("User login test", () => {
    // Action
    cy.visit(baseUrl);
    cy.get(getDataCy(loginButton)).click();
    // Assert
    cy.get(getDataCy(userButton)).should(visible);
  });

  it("User logout test", () => {
    // Action
    cy.get(getDataCy(userButton)).click();
    // Assert
    cy.get(getDataCy(loginButton)).should(visible);
  });
});
