/// <reference types="cypress" />

describe("desc", () => {
  it("test one", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Edit src/App.tsx and save to reload.");
    cy.contains("reload.").should("exist");
  });

  it("test two", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").click();
    cy.contains("clicked!!");
  });
});
