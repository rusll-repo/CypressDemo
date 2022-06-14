describe('Navigate herokuapp', () => {
    it('first test', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('a[href="/abtest"]').click();
        cy.get('h3').should('have.text', 'A/B Test Variation 1');
    })
})
