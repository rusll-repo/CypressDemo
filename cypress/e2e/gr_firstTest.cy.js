describe('The Internet-Herokuapp tests', () => {

  it('Should test dropdown functionality', () => {
    cy.visit('http://the-internet.herokuapp.com/');
    cy.get('a[href="/dropdown"]').click();
    cy.get('h3').should('have.text', 'Dropdown List');
    cy.get('select').select('Option 2');
    cy.get('select option:selected').should('have.text', 'Option 2')
  })
})

