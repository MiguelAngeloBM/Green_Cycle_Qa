///<reference types="cypress"/>
describe('Verificaçao de Layout da pagina Pontos de coletas', () => {
    it.only('Verificar os elementos da pagina Sobre', () => {
        cy.visit('https://green-cycle.netlify.app')
        cy.get('.header > :nth-child(2) > .nav > :nth-child(3) > .nav__link').click()
        cy.get('.maps__title').should('contain','PONTOS DE COLETA')
        cy.get('.maps__text > img').should('be.visible')
        cy.get('.maps__text-container > :nth-child(1)').should('contain','Descubra os pontos de coleta dos nossos parceiros e desfrute dos benefícios exclusivos do nosso programa de incentivo à reciclagem.')
        cy.get('.maps__text-container > :nth-child(2)').should('contain','Ao entregar seus materiais recicláveis em um de nossos pontos de coleta, não só você contribui para o meio ambiente, mas também garante descontos em todo o nosso site.')
        cy.get('.maps__text-container > :nth-child(3)').should('contain','Junte-se a nós na jornada rumo a um planeta mais sustentável enquanto economiza em suas compras online.')
        cy.get('.maps__info > :nth-child(3)').should('contain','ENCONTRE UM PONTO DE COLETA PERTO DE VOCÊ:')
        cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').should('be.visible')
    });


});