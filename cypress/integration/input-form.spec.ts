describe("Input form", () => {
  it("focuses input on load", () => {
    cy.visit("http://localhost:3000");
    cy.focused().should("have.id", "input-todo");
  });
  it.only("accepts input", () => {
    const typedText = "Buy Milk";
    cy.visit("http://localhost:3000");
    cy.get("#input-todo").type(typedText).should("have.value", typedText);
  });
});
