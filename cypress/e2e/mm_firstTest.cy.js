describe('the-internet.herokuapp.com', () => {
    it('A/B Test Variation 1', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('a[href="/abtest"]').click();
        cy.get('h3').should('have.text', 'A/B Test Variation 1');
        cy.get('#content div p').should('be.visible');
    })
})
