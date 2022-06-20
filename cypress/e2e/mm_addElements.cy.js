const ELEMENTS = 'div #elements';
const BTN_ADD_ELEMENT = 'button[onclick="addElement()"]';

describe('the-internet.herokuapp.com', () => {
    
    beforeEach('Should navigate to add_remove_elements Page', () => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.get('a[href="/add_remove_elements/"]').click();
    })

    it('Add/Remove one Element', () => {
        cy.get(BTN_ADD_ELEMENT).click();
        cy.get(ELEMENTS).find('button').should('exist').and('be.visible');

        cy.get(ELEMENTS).find('button').as('Delete').click();
        cy.get(ELEMENTS).find('button').should('not.exist');
    })

    it('Add/Remove multiple Elements', () => {
        let num = 3;
        for(let i = 0; i < num; i++){
            cy.get(BTN_ADD_ELEMENT).click();
        } 
        cy.get(ELEMENTS).find('button').should('have.length', num);

        cy.get(ELEMENTS).find('button').each(($el) => {
            if($el.text().includes('Delete')){
                cy.wrap($el).click();
                num--;
                cy.get(ELEMENTS).find('button').should('have.length', num);
            }
        })
        cy.get(ELEMENTS).find('button').should('not.exist');
    })
})
