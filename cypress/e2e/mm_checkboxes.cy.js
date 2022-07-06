/// <reference types="Cypress" />

describe('checkboxes test', () => {
    
    beforeEach('Should navigate to checkboxes Page', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('li a[href="/checkboxes"]').click();
    });

    it('verify checkboxes are checked', () => {
        cy.get('#checkboxes input:nth-child(1)').check().should('be.checked');
        cy.get('#checkboxes input:nth-child(3)').uncheck().should('not.be.checked');
    });
});

