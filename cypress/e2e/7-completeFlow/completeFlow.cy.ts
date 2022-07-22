describe("flow of a regular user", () => {
  it("should complete the flow", () => {
    const value1 = 29.99;
    const value2 = 49.99;

    // visit and login
    cy.visit("");
    cy.login();
    cy.get(".app_logo").should("be.visible");

    // add items to cart
    cy.get(".shopping_cart_badge").should("not.exist");

    cy.contains(`$${value1}`)
      .siblings()
      .contains(/Add to cart/)
      .click();
    cy.get(".shopping_cart_badge").should("contain", "1");

    cy.contains(`$${value2}`)
      .siblings()
      .contains(/Add to cart/)
      .click();
    cy.get(".shopping_cart_badge").should("contain", "2");

    // go to cart
    cy.get(".shopping_cart_link").click();

    cy.contains(`$${value1}`).should("be.visible");
    cy.contains(`$${value2}`).should("be.visible");

    // perform checkout
    cy.get(".checkout_button").click();

    cy.contains("Checkout").should("be.visible");

    cy.get("#first-name").type("John");
    cy.get("#last-name").type("Doe");
    cy.get("#postal-code").type("12345");

    cy.get("#continue").click();
    cy.get("#finish").click();

    cy.get(".complete-header").should("be.visible");

    // logout
    cy.contains("Open Menu").click();
    cy.contains("Logout").click();

    cy.get(".app_logo").should("not.exist");
    cy.contains("Login").should("be.visible");
  });
});
