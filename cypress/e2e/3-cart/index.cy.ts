describe("cart functionality", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should add item to cart", () => {
    cy.login();

    cy.get(".shopping_cart_badge").should("not.exist");
    cy.contains(/Add to cart/).click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

  it("should remove item from cart", () => {
    cy.login();

    cy.get(".shopping_cart_badge").should("not.exist");
    cy.contains(/Add to cart/).click();
    cy.get(".shopping_cart_badge").should("contain", "1");

    cy.contains(/Remove/).click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });
});
