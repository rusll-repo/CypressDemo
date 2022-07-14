describe('Herokuapp', () => {
    
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/');
    })

    it('Opens Drag and Drop link', () => {
        cy.get('a[href="/drag_and_drop"]').click();
        cy.get('h3').should('have.text', 'Drag and Drop');
    })

    it('Drags A to B', () => {
        const squareToMove = new DataTransfer();

        cy.get('#column-a').trigger('dragstart', {
            dataTransfer: squareToMove
        });

        cy.get('#column-b').trigger('drop', {
            dataTransfer: squareToMove
        });
        
        cy.get('#column-a').should('have.text', 'B');
        cy.get('#column-b').should('have.text', 'A');
    })
})
