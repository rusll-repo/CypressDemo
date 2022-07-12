const url = 'https://the-internet.herokuapp.com/';

describe('Herokuapp', () => {
    beforeEach('load to MAIN page', () =>{
      cy.visit(url);
      cy.get('h1').should('contain', 'Welcome to the-internet');
      cy.get('h2').should('contain', 'Available Examples');
    })

    it('Scenario 1: a/b test', () => {
      cy.get('a[href="/abtest"]').should('contain','A/B Testing').and('be.visible').click();
      cy.get('h3').should('contain.text', 'A/B Test');   
    })
})

