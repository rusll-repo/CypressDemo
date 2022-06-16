describe('the-internet.herokuapp.com', () => {
    it('Add/Remove Elements', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('a[href="/add_remove_elements/"]').click();
        cy.get('h3').should('have.text', 'Add/Remove Elements');

        cy.get('button[onclick="addElement()"]').click();
        let elements = 'div #elements';
        cy.get(elements).find('button').should('exist');
        cy.get(elements).find('button').as('Delete').click();
        cy.get(elements).find('button').should('not.exist');
    })
})
