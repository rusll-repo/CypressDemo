/// <reference types="Cypress" />

describe('broken images test', () => {
    
    beforeEach('Should navigate to brokenImg Page', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('li a[href="/broken_images"]').click();
    });

    it('should find broken images', () => {
        const arr = [];
        cy.get('.example img', { includeShadowDom: true }).each(($img) => {
            cy.wrap($img)
                .filter('[src]')
                .filter(':visible')
                .should(($img) => $img.map((i, /** @type {HTMLImageElement} */ img) => arr.push(img.naturalWidth)));
        });
        
        cy.get('.example img').then(function(){
            const actualValueBrokenImg = arr.filter(el => el == 0).length
            const expectedValueBrokenImg  = 2;
            expect(actualValueBrokenImg).to.eq(expectedValueBrokenImg)
        })
        
    });

    // it('should find broken images', () => {
    //     cy.get('.example img', { includeShadowDom: true }).each(($img) => {
    //         cy.wrap($img)
    //             .filter('[src]')
    //             .filter(':visible')
    //             .should(($img) => $img.map((i, /** @type {HTMLImageElement} */ img) => 
    //             img.naturalHeight > 0 ? expect(img.naturalWidth).to.be.greaterThan(0) : expect(img.naturalWidth).to.equal(0)));  
    //     });
    // });
});
 
