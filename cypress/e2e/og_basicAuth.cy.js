describe('Authorization with proper credentials', () => {

    it('Bypass login', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin',
             },
        })

        cy.get('#content').should(($div) => {
            expect($div).to.include.text('Congratulations! You must have the proper credentials.')
        })
    })
})
