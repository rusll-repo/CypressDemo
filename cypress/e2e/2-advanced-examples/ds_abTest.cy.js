const ABTESTBTN = 'a[href="/abtest"]';

describe('Herokuapp', () => {
    beforeEach('naigate to AB test', () =>{
      cy.visit('https://the-internet.herokuapp.com/');   
    })

    it('aB test btn exist', () =>{
      cy.get(ABTESTBTN).should('exist').and('be.visible');  
    })
    it('aB test button has a text', () => {
      cy.get(ABTESTBTN).should('have.text', 'A/B Testing');   
    })
    it('AB test text', () =>{
    cy.get(ABTESTBTN).click();
    cy.get('h3').should('have.text', 'A/B Test Variation 1');
    })
})
