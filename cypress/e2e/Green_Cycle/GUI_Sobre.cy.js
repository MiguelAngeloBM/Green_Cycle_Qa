///<reference types="cypress"/>
describe('Verificaçao de Layout da pagina sobre', () => {
    
    it.only('Verificar os elementos da pagina Sobre', () => {
        cy.visit('https://green-cycle.netlify.app')
        cy.get('.header > :nth-child(2) > .nav > :nth-child(2) > .nav__link').click()
        cy.get('.sobre__title-box > h1').should('contain','QUEM SOMOS')///Verificando titulo Da pagina
        cy.get('.sobre__title-icon').should('be.visible')/// Verificano Icone 
        cy.get('.sobre__folder').should('be.visible')///Verificando a imagem
        cy.get('.sobre__folder-title').should('contain','Green Cycle')/// Verificando titulo da imagem
        cy.get('.sobre__folder-subtitle').should('contain','Mais que um marketplace online')///Verificando Subtitulo da imagem
        cy.get('.sobre__main-image_vasos').should('be.visible')///Verificando a imagem
        cy.get('.sobre__main-vasos > :nth-child(1)').should('contain','A Green Cycle um marketplace dedicado a conectar empresas que vendiam produtos sustentáveis com consumidores conscientes do meio ambiente.')///Verificando o texto
        cy.get('.sobre__main-vasos > :nth-child(2)').should('contain','Nossos anunciantes são cuidadosamente selecionados garantindo que cada item vendido tenha o menor impacto possível no meio ambiente. Desde pequenas lojas de artesãos que criam bolsas com tecidos reciclados até grandes marcas de moda que se tornaram ícones da sustentabilidade, todos compartilham nosso compromisso com o planeta.')///Verificando o texto
        cy.get('.sobre__main-vasos > :nth-child(3)').should('contain','Green Cycle não é apenas um lugar para compras, é também uma comunidade que incentiva a reciclagem e a reutilização de materiais. Os clientes podem trocar seus materiais recicláveis por cupons de desconto, uma iniciativa facilitada por uma rede de parceiros locais que coletam os materiais e os transformam em novos produtos ou os reciclam adequadamente, podendo até ser utilizados pelos anunciantes.')///Verificando o texto
        cy.get('.sobre__main-image_kids').should('be.visible')///Verificando a imagem
        cy.get('.sobre__main-kids > :nth-child(1)').should('contain','Nossa história de sucesso começou em um curso de formação onde a proposta era a criação de um projeto para um futuro sustentável. A equipe percebeu a necessidade de um espaço onde as pessoas pudessem comprar produtos sustentáveis sem comprometer seu estilo e assim surgiu a Green Cycle.')///Verificando o texto
        cy.get('.sobre__main-kids > :nth-child(2)').should('contain','Um dos primeiros desafios foi convencer as empresas a se juntarem à plataforma, mas, à medida que a conscientização ambiental crescia, mais marcas quiseram fazer parte desse movimento. Além disso, os consumidores estavam cada vez mais interessados em saber a origem dos produtos que compravam e como eram produzidos.')///Verificando o texto
        cy.get('.sobre__main-kids > :nth-child(3)').should('contain','Com o tempo, Green Cycle se tornou um modelo de como o comércio online poderia ser feito de maneira sustentável. Crescemos e nos expandimos, mas nosso compromisso com a sustentabilidade permanece inalterado. Green Cycle provou que é possível fazer negócios de uma maneira que respeite o planeta e suas pessoas, inspirando muitos outros empreendedores a seguir um caminho semelhante. Venha fazer parte desse movimento e descubra como pequenas escolhas podem fazer uma grande diferença.')///Verificando o texto


    });


});