const AB_TEST_LINK = 'a[href="/abtest"]';

describe('Herokuapp', () => {
    beforeEach('naigate to AB test', () =>{
      cy.visit('https://the-internet.herokuapp.com/');   
    })

    it('aB test link', () =>{
      cy.get(AB_TEST_LINK).should('exist').and('be.visible');
      cy.get(AB_TEST_LINK).should('have.text', 'A/B Testing');
      cy.get(AB_TEST_LINK).click();
      cy.get('h3').should('contain.text', 'A/B Test');   
    })
})
