/// <reference types="cypress" />

describe("basic login functionalities", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should login", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.get(".app_logo").should("be.visible");
  });

  it("should fail login", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("wrong_password");

    cy.get("#login-button").click();

    cy.get("[data-test=error]").should("be.visible");
  });
});
