describe('The Internet-Herokuapp tests', () => {

  it('Testing dropdown', () => {
      cy.visit('https://the-internet.herokuapp.com/dropdown');
      cy.get('h3').should('have.text', 'Dropdown List');
      cy.get('#dropdown').should('be.visible');
     })

  it('Should test dropdown functionality', () => {
    cy.get('select').select('Option 2');
    cy.get('select option:selected').should('have.text', 'Option 2')
  })
})
