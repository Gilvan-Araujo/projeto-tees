describe("shopping cart screen", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login();
  });

  it("should add items on shopping cart accordingly", () => {
    const value1 = 29.99;
    const value2 = 49.99;

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

    cy.get(".shopping_cart_link").click();

    cy.contains(`$${value1}`).should("be.visible");
    cy.contains(`$${value2}`).should("be.visible");
  });

  it("should remove items from shopping cart accordingly", () => {
    const value1 = 29.99;
    const value2 = 49.99;

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

    cy.get(".shopping_cart_link").click();

    cy.contains(`$${value1}`).should("be.visible");
    cy.contains(`$${value2}`).should("be.visible");

    cy.contains(`$${value1}`)
      .siblings()
      .contains(/Remove/)
      .click();
    cy.get(".shopping_cart_badge").should("contain", "1");

    cy.contains(`$${value2}`)
      .siblings()
      .contains(/Remove/)
      .click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });
});
