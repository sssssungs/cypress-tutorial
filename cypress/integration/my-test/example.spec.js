/// <reference types="cypress" />

describe("desc", () => {
  it("test one", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Edit src/App.tsx and save to reload.");
    cy.contains("reload.").should("exist");
  });
});
