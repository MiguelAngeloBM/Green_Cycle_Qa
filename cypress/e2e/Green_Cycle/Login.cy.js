///<reference types="cypress"/>
describe('Teste de login', () => {
    
});
  


beforeEach(() => {
    cy.visit('https://green-cycle.netlify.app')
    cy.get('.header__login-button').click()
});
it.only('Teste de  login valido', () => {
    cy.wait
    cy.get('.login__input-wrapper > .login__input').type('greencycle@gmail.com')
    cy.get(':nth-child(2) > .login__input').type('Green-cycl3')
    cy.get('.login__button-wrapper > button').click()
    cy.wait
     cy.get('.lojamain__title').should('contain','PRODUTOS')
});

it.only('E-mail com  menos de 5 caracteres', () => {
    cy.wait
    cy.get('.login__input-wrapper > .login__input').type('g@gmail.com')
    cy.get(':nth-child(2) > .login__input').type('Green-cycl3')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.errorPopup > p').should('contain','Falha ao fazer login. Verifique suas credenciais e tente novamente.')

});
it.only('E-mail com mais de 50 caracteres', () => {
    cy.wait
    cy.get('.login__input-wrapper > .login__input').type('a'.repeat(51) + '@example.com')
    cy.get(':nth-child(2) > .login__input').type('Green-cycl3')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.errorPopup > p').should('contain','Falha ao fazer login. Verifique suas credenciais e tente novamente.')
});
it.only('E-mail Vazio(Falta ID pra automaçao)', () => {
    cy.get('.login__input-wrapper > .login__input').type('a').clear()
    cy.get(':nth-child(2) > .login__input').type('Green-cycl3')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.errorPopup > p').should('contain','Falha ao fazer login. Verifique suas credenciais e tente novamente.')

});
it.only('E-mail Com letras nao Latinas(Falta ID Para automaçao))', () => {
    cy.get('.login__input-wrapper > .login__input').type('用户@例子.广告')
    cy.get(':nth-child(2) > .login__input').type('Green-cycl3')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.errorPopup > p').should('contain','Falha ao fazer login. Verifique suas credenciais e tente novamente.')

});
it.only('E-mail Com  Espaços(Falta ID Para automaçao))', () => {
    cy.get('.login__input-wrapper > .login__input').type(" " +'gmail.com')
    cy.get(':nth-child(2) > .login__input').type('Green-cycl3')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.errorPopup > p').should('contain','Falha ao fazer login. Verifique suas credenciais e tente novamente.')

});
it.only('Senha com menos de 8 caracteres', () => {
    cy.get('.login__input-wrapper > .login__input').type('greencycle@gmail.com')
    cy.get(':nth-child(2) > .login__input').type('G-ccl3')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.login__input-error').should('contain','Senha tem que ter no mínimo 8 caracteres e conter letras maiúsculas, minúsculas e números.')

});
it.only('Senha com mais de 12 caracteres', () => {
    cy.get('.login__input-wrapper > .login__input').type('greencycle@gmail.com')
    cy.get(':nth-child(2) > .login__input').type('G'.repeat(10) + '-ccl3')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.login__input-error').should('contain','Senha tem que ter no mínimo 8 caracteres e conter letras maiúsculas, minúsculas e números.')

});
it.only('Senha Vazia', () => {
    cy.get('.login__input-wrapper > .login__input').type('greencycle@gmail.com')
    cy.get(':nth-child(2) > .login__input').type('G'.repeat(10) + '-ccl3').clear()
    cy.get('.login__button-wrapper > button').click()
    cy.get('.login__input-error').should('contain','Senha tem que ter no mínimo 8 caracteres e conter letras maiúsculas, minúsculas e números.')
it.only('Senha com espaços', () => {
    cy.get('.login__input-wrapper > .login__input').type('greencycle@gmail.com')
    cy.get(':nth-child(2) > .login__input').type('Gr ee n -cycl3')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.login__input-error').should('contain','Senha tem que ter no mínimo 8 caracteres e conter letras maiúsculas, minúsculas e números.')

});
});
it.only('Senha com letras nao latinas', () => {
    cy.get('.login__input-wrapper > .login__input').type('greencycle@gmail.com')
    cy.get(':nth-child(2) > .login__input').type('用户密码')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.login__input-error').should('contain','Senha tem que ter no mínimo 8 caracteres e conter letras maiúsculas, minúsculas e números.')

});
it.only('Senha com espaços', () => {
    cy.get('.login__input-wrapper > .login__input').type('greencycle@gmail.com')
    cy.get(':nth-child(2) > .login__input').type('Gr ee n -cycl3')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.login__input-error').should('contain','Senha tem que ter no mínimo 8 caracteres e conter letras maiúsculas, minúsculas e números.')

});
it.only('Senha com Simbolos', () => {
    cy.get('.login__input-wrapper > .login__input').type('greencycle@gmail.com')
    cy.get(':nth-child(2) > .login__input').type('!@#!@#!@#')
    cy.get('.login__button-wrapper > button').click()
    cy.get('.login__input-error').should('contain','Senha tem que ter no mínimo 8 caracteres e conter letras maiúsculas, minúsculas e números.')

});




