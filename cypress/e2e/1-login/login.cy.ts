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

    cy.contains(
      "Epic sadface: Username and password do not match any user in this service"
    ).should("be.visible");
  });

  it("should fail login if username is empty", () => {
    cy.get("#password").type("wrong_password");

    cy.get("#login-button").click();

    cy.contains("Epic sadface: Username is required").should("be.visible");
  });

  it("should fail login if password is empty", () => {
    cy.get("#user-name").type("standard_user");

    cy.get("#login-button").click();

    cy.contains("Epic sadface: Password is required").should("be.visible");
  });

  it("should fail login if username and password are empty", () => {
    cy.get("#login-button").click();

    cy.contains("Epic sadface: Username is required").should("be.visible");
  });
});
