describe("filter functionality", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login();
  });

  it("should filter by alphabetical order correctly", async () => {
    cy.get(".inventory_item_name").then(($items) => {
      expect($items[0].innerText).to.equal("Sauce Labs Backpack");
      expect($items[5].innerText).to.equal("Test.allTheThings() T-Shirt (Red)");
    });

    cy.get(".product_sort_container").select("Name (Z to A)");

    cy.get(".inventory_item_name").then(($items) => {
      expect($items[0].innerText).to.equal("Test.allTheThings() T-Shirt (Red)");
      expect($items[5].innerText).to.equal("Sauce Labs Backpack");
    });
  });

  it("should filter by price correctly", async () => {
    cy.get(".product_sort_container").select("Price (high to low)");

    cy.get(".inventory_item_name").then(($items) => {
      expect($items[0].innerText).to.equal("Sauce Labs Onesie");
      expect($items[5].innerText).to.equal("Sauce Labs Fleece Jacket");
    });

    cy.get(".product_sort_container").select("Price (low to high)");

    cy.get(".inventory_item_name").then(($items) => {
      expect($items[0].innerText).to.equal("Sauce Labs Fleece Jacket");
      expect($items[5].innerText).to.equal("Sauce Labs Onesie");
    });
  });
});
