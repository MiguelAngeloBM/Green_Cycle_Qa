///<reference types="cypress"/>
describe('Fluxo de compra de produtos', () => {
    beforeEach(() => {
        cy.visit('https://green-cycle.netlify.app')
        cy.get('.header__login-button').click()
        cy.get('.login__input-wrapper > .login__input').type('greencycle@gmail.com')
        cy.get('.login__form > :nth-child(2)').type('Green-cycl3')
        cy.get('.login__button-wrapper > button').click()
        cy.wait
        cy.get('.lojamain__title').should('contain','PRODUTOS')
      
        

    });
    it.only('Compra realizada com sucesso', () => {
 
        /// Selecionando produtos de  categorias diferentes
        ///acessorios
       cy.wait
        cy.get('.lojamain__categories > :nth-child(2) > :nth-child(1)').click()
        cy.get(':nth-child(2) > .featured__container > .featured__description-wrapper').should('contain','Colar de papel reciclado')
        cy.get(':nth-child(3) > .featured__container > .featured__description-wrapper').should('contain','Brincos de papel reciclado')
       /// Entrando na pagina do produto
        cy.get('.lojamain__card-list > :nth-child(1) > img').click()
        cy.get('.product__button-add').click()
        cy.get('.product__buttons > :nth-child(1)').click() 
        ///Moveis
        cy.wait

        cy.get('.lojamain__categories > :nth-child(2) > :nth-child(3)').click()
        cy.get(':nth-child(1) > .featured__container > .featured__description-wrapper').should('contain','Casares Lounge Chair')
        cy.get(':nth-child(2) > .featured__container > .featured__description-wrapper').should('contain','Cadeira de plástico reciclado')
        cy.get(':nth-child(3) > .featured__container > .featured__description-wrapper').should('contain','Mesa de plástico reciclado')
          /// Entrando na pagina do produto
          cy.get('.lojamain__card-list > :nth-child(1) > img').click()
          cy.get('.product__button-add').click()
          cy.get('.product__buttons > :nth-child(1)').click() 
        ///Utilidades
        cy.wait
        cy.get('.lojamain__categories > :nth-child(2) > :nth-child(5)').click()
        cy.get(':nth-child(1) > .featured__container > .featured__description-wrapper').should('contain','Conjunto de cestos de borracha')
        cy.get(':nth-child(2) > .featured__container > .featured__description-wrapper').should('contain','Fruteira de metal reciclado')
        cy.get(':nth-child(3) > .featured__container > .featured__description-wrapper').should('contain','Enfeite em formato de peixe')
       /// Entrando na pagina do produto
       cy.get('.lojamain__card-list > :nth-child(1) > img').click()
       cy.get('.product__button-add').click()
    cy.get('.product__buttons > :nth-child(1)').click() 
    ///Checagem quantidade carrinho
    cy.get('.header__cart-quantity').should('have.text','3')
    ///Checagem Dentro do  carrinho
    cy.get('[style="position: relative;"] > .account-icon').click()
    cy.get('.cart__list > :nth-child(1)').should('contain','Rainbow necklace')
    cy.get('.cart__list > :nth-child(2)').should('contain','Casares Lounge Chair')
    cy.get('.cart__list > :nth-child(3)').should('contain','Conjunto de cestos de borracha')
    cy.get('.cart__checkout').click()
    ///Checkout Endereço
    cy.get('.checkout__adress > .checkout__form > :nth-child(1) > .checkout__input').type('Green Rua')
    cy.get('.checkout__adress > .checkout__form > .checkout__fit > :nth-child(1) > .checkout__input').type('110')
    cy.get('.checkout__adress > .checkout__form > .checkout__fit > :nth-child(2)').type(30555555)
    cy.get('.checkout__adress > .checkout__form > :nth-child(3) > .checkout__input').type(10)
    cy.get('.checkout__adress > .checkout__form > :nth-child(4) > .checkout__input').type('Green City')
    cy.get('.checkout__adress > .checkout__form > :nth-child(5) > .checkout__input').type('Green bairro')
///Pagamento
cy.get('[name="numeroCartao"]').type('123456789123456')
cy.get('[name=\"dataValidade\"]').type('1234')
cy.get('[name=\"codigoSeguranca\"]').type('123')
cy.get('[name=\"nomeCartao\"]').type("Green card")
cy.get('.checkout__button').click()
cy.get('.info__container').should('contain','Compra realizada com sucesso')
});




    });

