describe("the-internet.herokuapp.com", () => {
  it("Check Basic Auth", () => {
    cy.visit('http://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.get("#content > div > p").should("contain.text", "Congratulations! You must have the proper credentials."
    );
  });
});
