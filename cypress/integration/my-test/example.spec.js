/// <reference types="cypress" />

describe("desc", () => {
  it("test one", () => {
    cy.viewport("iphone-se2");
    cy.visit("http://localhost:3000");
    cy.contains("Edit src/App.tsx and save to reload.");
    cy.contains("reload.").should(
      "have.text",
      "Edit src/App.tsx and save to reload."
    );
  });

  it("test two", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").click();
    cy.contains("clicked!!");
  });

  it("test three", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "localhost");
  });
});
