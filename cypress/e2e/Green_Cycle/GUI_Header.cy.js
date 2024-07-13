///<reference types="cypress"/>
describe('Verificaçao de Layout do Header', () => {
    beforeEach(() => {
        cy.visit('https://green-cycle.netlify.app')
   
    });
    it.only('Verificar os elementos do Header Deslogado', () => {
        cy.get('.header__logo > a > img').should('be.visible')
        cy.get('.header__top > .search-container > .search__form > input').should('be.visible')
        cy.get('.header__top > .search-container > .search__form > .header__search > .search-icon').should('be.visible')
        cy.get('.header__corner-menu > button > .account-icon').should('be.visible')
        cy.get('.header__login-button').should('contain','LOGIN')
        cy.get('p.header__signup-link').should('contain','crie sua conta')
        cy.get('.header > :nth-child(2) > .nav > :nth-child(1) > .nav__link').should('contain','LOJA')
        cy.get('.header > :nth-child(2) > .nav > :nth-child(2) > .nav__link').should('contain','SOBRE')
        cy.get('.header > :nth-child(2) > .nav > :nth-child(3) > .nav__link').should('contain','PONTOS DE COLETA')
        cy.get('.header > :nth-child(2) > .nav > :nth-child(4) > .nav__link').should('contain','CONTATO')
    });
    it.only('Verificar os elementos do header Logado', () => {
        cy.get('.header__login-button').click()
        cy.get('.login__input-wrapper > .login__input').type('greencycle@gmail.com')
        cy.get(':nth-child(2) > .login__input').type('Green-cycl3')
        cy.get('.login__button-wrapper > button').click()
        cy.wait
         cy.get('.lojamain__title').should('contain','PRODUTOS')
         cy.get('.header__logo > a > img').should('be.visible')
         cy.get('.header__top > .search-container > .search__form > input').should('be.visible')
         cy.get('.header__top > .search-container > .search__form > .header__search > .search-icon').should('be.visible')
         cy.get('[style="position: relative;"] > .account-icon').should('be.visible')
         cy.get('.header__user-button > .account-icon').should('be.visible')
         cy.get('.header > :nth-child(2) > .nav > :nth-child(1) > .nav__link').should('contain','LOJA')
         cy.get('.header > :nth-child(2) > .nav > :nth-child(2) > .nav__link').should('contain','SOBRE')
         cy.get('.header > :nth-child(2) > .nav > :nth-child(3) > .nav__link').should('contain','PONTOS DE COLETA')
         cy.get('.header > :nth-child(2) > .nav > :nth-child(4) > .nav__link').should('contain','CONTATO')
    });
});