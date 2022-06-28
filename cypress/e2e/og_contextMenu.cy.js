describe('Context Menu', () => {

    before(() => {
        cy.visit('https://the-internet.herokuapp.com/');
    })

    it('Opens Context Menu link', () => {
        cy.get('a[href="/context_menu"]').click();
        cy.get('h3').should('have.text', 'Context Menu');
    })

    it('Makes a right click on the box', () =>{
        cy.get('#hot-spot').rightclick();
        cy.on('window:alert',(alertWindow)=>{
            expect(alertWindow).to.contains('You selected a context menu');
         })
    })
})