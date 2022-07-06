/// <reference types="Cypress" />

describe('challenging DOM test', () => {
    
    beforeEach('Should navigate to brokenImg Page', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('li a[href="/challenging_dom"]').click();
    });

    it('verify buttons change id after clicking', () => {
        cy.get('.row .large-12 a.button').as('button');

        cy.get('@button').each(($el,index,$list) => {
            cy.get('@button').eq(index).then(function($el) { 
                const bthID = $el.attr('id');
                cy.wrap($el).click(); 

                    cy.get('@button').eq(index).then(function($el) {   
                        const btnNewID = $el.attr('id');     
                        expect(btnNewID).not.equal(bthID);
                    });
            });
        });
    });
});

