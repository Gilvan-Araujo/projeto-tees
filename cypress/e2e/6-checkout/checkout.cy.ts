describe("checkout functionality", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login();
  });

  it("should checkout", () => {
    cy.get(".shopping_cart_badge").should("not.exist");

    cy.contains(`$${29.99}`)
      .siblings()
      .contains(/Add to cart/)
      .click();
    cy.get(".shopping_cart_badge").should("contain", "1");

    cy.contains(`$${49.99}`)
      .siblings()
      .contains(/Add to cart/)
      .click();
    cy.get(".shopping_cart_badge").should("contain", "2");

    cy.get(".shopping_cart_link").click();

    cy.contains(`$${29.99}`).should("be.visible");
    cy.contains(`$${49.99}`).should("be.visible");

    cy.get(".checkout_button").click();

    cy.contains("Checkout").should("be.visible");

    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Doe");
    cy.get("#postal-code").type("12345");

    cy.get("#continue").click();
    cy.get("#finish").click();

    cy.get(".complete-header").should("be.visible");
  });
});
