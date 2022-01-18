/// <reference types="cypress" />

describe("desc", () => {
  it("test: contain and should", () => {
    cy.viewport("iphone-se2");
    cy.visit("http://localhost:3000");
    cy.contains("Edit src/App.tsx and save to reload.");
    cy.contains("reload.").should(
      "have.text",
      "Edit src/App.tsx and save to reload."
    );
  });

  it("test: click action", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").click();
    cy.contains("clicked!!");
  });

  it("test: get url", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "localhost");
  });

  it("test: type some word", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("hello world");
  });
});
