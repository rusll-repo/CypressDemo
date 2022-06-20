describe('The Internet-Herokuapp', () => {

    it('Should visit Home page', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('.heading').should('have.text', 'Welcome to the-internet');
    })

    it('Should open A/B Testing link', () => {
        cy.get('a[href="/abtest"]').click();
        cy.get('div[class="example"]').contains('A/B Test');
    })
})