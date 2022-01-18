/// <reference types="cypress" />

describe("desc", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("test: contain and should", () => {
    cy.viewport("iphone-se2");
    cy.contains("Edit src/App.tsx and save to reload.");
    cy.contains("reload.").should(
      "have.text",
      "Edit src/App.tsx and save to reload."
    );
  });

  it("test: click action", () => {
    cy.get("button").click();
    cy.contains("clicked!!");
  });

  it("test: get url", () => {
    cy.url().should("include", "localhost");
  });

  it("test: type some word", () => {
    cy.get("input").type("hello world");
  });
});
