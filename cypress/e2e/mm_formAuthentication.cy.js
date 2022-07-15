/// <reference types="Cypress" />

import data from '../fixtures/data.json'


describe("Test Form Authentication", function() { 
  
    before('Should navigate to Login Page', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('li a[href="/login"]').click();
    });

    it('verify user can log in and log out', function() {
        cy.get('h2').should('contain', data.headerLogin);
        cy.get('#username').type(data.username);
        cy.get('#password').type(data.password);
        cy.get('button[type="submit"]').click();

        cy.get('#flash').should('contain', data.textAlertLogin);
        cy.get('h2').should('contain', data.headerSecureArea);
        cy.get('h4.subheader').should('contain', data.subHeaderSecArea);

        cy.get('a.button').should('have.text', ' Logout').and('be.visible').click();
        cy.get('h2').should('contain', data.headerLogin);
        cy.get('#flash').should('contain', data.textAlertLogout);
    });
});

