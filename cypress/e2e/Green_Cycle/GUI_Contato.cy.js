///<reference types="cypress"/>
describe('Verificaçao de Layout da pagina Contato', () => {
    it.only('Verificar os elementos da pagina Contato', () => {
        cy.visit('https://green-cycle.netlify.app')
        cy.get('.header > :nth-child(2) > .nav > :nth-child(4) > .nav__link').click()
        cy.get('span').should('contain','Contato')
        cy.get('.footer__column-social > :nth-child(2) > img').should('be.visible')
        cy.get('.footer__mail').should('contain','grupo3ht4@gmail.com')
        cy.get('.footer__column-social > :nth-child(3) > img').should('be.visible')
        cy.get('.footer__column-social > :nth-child(3) > p').should('contain','(00) 00000-0000')    
    
    
    
    
    
    });


});