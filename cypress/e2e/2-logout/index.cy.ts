describe("logout functionality", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should logout", () => {
    cy.login();

    cy.get(".app_logo").should("be.visible");

    cy.contains("Open Menu").click();
    cy.contains("Logout").click();

    cy.contains("Login").should("be.visible");
  });
});
