///<reference types="cypress"/>

// Descrição do conjunto de testes: Verificação de Layout da página Contato
describe('Verificaçao de Layout da pagina Contato', () => {

    // Teste específico: Verificar os elementos da página Contato
    it.only('Verificar os elementos da pagina Contato', () => {

        // Acessa o site Green Cycle
        cy.visit('https://green-cycle.netlify.app');

        // Clica no link de navegação para ir até a página "Contato"
        cy.get('.header > :nth-child(2) > .nav > :nth-child(4) > .nav__link').click();

        // Verifica se a página contém o texto "Contato"
        cy.get('span').should('contain', 'Contato');

        // Verifica se o ícone social na segunda posição do rodapé está visível
        cy.get('.footer__column-social > :nth-child(2) > img').should('be.visible');

        // Verifica se o rodapé contém o e-mail "grupo3ht4@gmail.com"
        cy.get('.footer__mail').should('contain', 'grupo3ht4@gmail.com');

        // Verifica se o ícone social na terceira posição do rodapé está visível
        cy.get('.footer__column-social > :nth-child(3) > img').should('be.visible');

        // Verifica se o texto do telefone "(00) 00000-0000" está presente no rodapé
        cy.get('.footer__column-social > :nth-child(3) > p').should('contain', '(00) 00000-0000');
    });
});
