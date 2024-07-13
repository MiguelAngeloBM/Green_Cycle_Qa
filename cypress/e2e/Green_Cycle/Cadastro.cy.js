import { faker } from '@faker-js/faker';
const password = faker.internet.password({ length: 8,})
///<reference types="cypress"/>

describe('Cadastro de novos usuarios', () => {
 
});
beforeEach(() => {
   
    cy.visit('https://green-cycle.netlify.app')
    cy.get('p.header__signup-link > .header__signup-link').click()
    
});
it.only('Entrando no cadastro pelo login', () => {
    cy.get('a > img').click()
});
it.only('Teste de Cadastro valido', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(15))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password+'1')
    cy.get(':nth-child(6) > .register__input').type(password+'1')
    cy.get('.register__button-wrapper').click()
    cy.wait
    cy.get('.login__title').should("contain",'LOGIN')
});
it.only('Nome com menos de 9 caracteres', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(9))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
'Falta implementar o erro para o nome'

});
it.only('Nome com mais de 40 caracteres', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(41))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
'Falta implementar o erro para o nome'

});
it.only('Nome com letras nao latinas', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20)+'使用者密碼')
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
'Falta implementar o erro para o nome'

});
it.only('Nome com Simbolos', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20)+'!@#!@#')
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
'Falta implementar o erro para o nome'

});
it.only('Nome Obrigatorio', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20)+'!@#!@#') .clear()
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    cy.get('.register__input-error').should('contain','Nome é obrigatório.')

});

it.only('CPF com menos de 11 caracteres', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(8))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    'Falta implementar o erro para o cpf'

});
it.only('CPF com mais de 11 caracteres', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(12))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    'Falta implementar o erro para o cpf'

});
it.only('CPF Obrigatorio', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(8)).clear()
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    cy.get('.register__input-error').should('contain','CPF é obrigatório.')

});
    
it.only('Email com menos de 5 caracteres', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(4))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    'Falta implementar o erro para o Email'

});
it.only('Email com mais de 50 caracteres', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(51))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    'Falta implementar o erro para o Email'

});
it.only('Email com Letras nao latinas', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10)+'用户@例子.广告')
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    'Falta implementar o erro para o Email'

});
it.only('Email Obrigatorio', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10)+'用户@例子.广告').clear()
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    cy.get('.register__input-error').should('contain','Favor digitar um email válido.')

});
it.only('Telefone com menos de 11 caracteres', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(8))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    'Falta implementar o erro para o cpf'

});
it.only('Telefone com mais de 11 caracteres', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(12))
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    'Falta implementar o erro para o Telefone'

});
it.only('Telefone Obrigatorio', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11)).clear()
    cy.get(':nth-child(5) > .register__input').type(password)
    cy.get(':nth-child(6) > .register__input').type(password)
    cy.get('.register__button-wrapper').click()
    cy.get(':nth-child(4) > .register__input-error').should('contain','Favor digitar um telefone válido no formato (00)00000-0000.')
});
it.only('Senha usando menos que 8 caracteres', () => {
    const Senha = faker.internet.password({ length: 6,})

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(Senha)
    cy.get(':nth-child(6) > .register__input').type(Senha)
    cy.get('.register__button-wrapper').click()
    cy.get('.register__input-error').should('contain','Senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números.')
});
it.only('Senha usando mais que 12 caracteres', () => {
    const senha = faker.internet.password ({ length: 14,})

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(senha)
    cy.get(':nth-child(6) > .register__input').type(senha)
    cy.get('.register__button-wrapper').click()
    cy.get('.register__input-error').should('contain','Senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números.')
});
it.only('Senha Obrigatoria', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password).clear()
    cy.get(':nth-child(6) > .register__input').type(password).clear()
    cy.get('.register__button-wrapper').click()
    cy.get('.register__input-error').should('contain','Senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números.')
});
it.only('Senha Usando letras nao latinas', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password+'用户密码')
    cy.get(':nth-child(6) > .register__input').type(password+'用户密码')
    cy.get('.register__button-wrapper').click()
    cy.get('.register__input-error').should('contain','Senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números.')
});
it.only('Senha Usando Simbolos', () => {

    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))
    cy.get(':nth-child(5) > .register__input').type(password+'!@#')
    cy.get(':nth-child(6) > .register__input').type(password+'!@#')
    cy.get('.register__button-wrapper').click()
    cy.get('.register__input-error').should('contain','Senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números.')
});

