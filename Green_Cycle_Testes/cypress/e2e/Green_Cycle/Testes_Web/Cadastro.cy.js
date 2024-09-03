import { faker } from '@faker-js/faker';
const password = faker.internet.password({ length: 8,})
///<reference types="cypress"/>

describe('Cadastro de novos usuarios', () => {
    // Bloco principal que agrupa os testes relacionados ao cadastro de novos usuários

    beforeEach(() => {
        // Antes de cada teste, visitar a página principal do site e clicar no link de cadastro
        cy.visit('https://green-cycle.netlify.app');  // Acessa a página inicial do site
        cy.get('p.header__signup-link > .header__signup-link').click();  // Clica no link de "Cadastre-se" no cabeçalho
    });

    it.only('Entrando no cadastro pelo login', () => {
        // Teste específico que verifica a navegação para a página de cadastro via link de login
        cy.get('a > img').click();  // Clica no logotipo ou link que redireciona para a página de login/cadastro
    });
});

it.only('Teste de Cadastro valido', () => {
    // Preenche o campo do nome com um nome completo gerado pelo Faker
    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(15));

    // Preenche o campo de CPF (ou número similar) com uma sequência numérica de 11 dígitos gerada pelo Faker
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11));

    // Preenche o campo de e-mail com um e-mail gerado pelo Faker
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10));

    // Preenche o campo de telefone (ou outro número) com uma sequência numérica de 11 dígitos gerada pelo Faker
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11));

    // Preenche o campo de senha com uma senha gerada concatenada com '1'
    cy.get(':nth-child(5) > .register__input').type(password + '1');

    // Preenche o campo de confirmação de senha com a mesma senha gerada acima
    cy.get(':nth-child(6) > .register__input').type(password + '1');

    // Clica no botão de registro para submeter o formulário
    cy.get('.register__button-wrapper').click();

    // Aguarda o processamento e verifica se a página redirecionou para a página de login
    cy.wait(1000);  // Adicione um tempo de espera caso o processamento seja assíncrono
    cy.get('.login__title').should("contain", 'LOGIN');  // Verifica se o título da página contém "LOGIN"
});

iit.only('Nome com menos de 9 caracteres', () => {

    // Preenche o campo do nome com um nome completo gerado pelo Faker com menos de 9 caracteres
    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(8));

    // Preenche os demais campos de CPF, e-mail, telefone, senha e confirmação de senha
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11));
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10));
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11));
    cy.get(':nth-child(5) > .register__input').type(password);
    cy.get(':nth-child(6) > .register__input').type(password);

    // Clica no botão de registro para submeter o formulário
    cy.get('.register__button-wrapper').click();

    // Verifica se uma mensagem de erro específica é exibida para o campo de nome curto
    cy.get('.register__input-error') // Supondo que essa classe contenha as mensagens de erro do formulário
        .should('contain', 'O nome deve ter pelo menos 9 caracteres');
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

    // Preenche o campo de nome com um nome gerado aleatoriamente usando letras latinas.
    cy.get(':nth-child(1) > .register__input').type(faker.person.fullName(20))

    // Preenche o campo de CPF com um número de 11 dígitos gerado aleatoriamente.
    cy.get(':nth-child(2) > .register__input').type(faker.string.numeric(11))

    // Preenche o campo de e-mail com um e-mail gerado aleatoriamente.
    cy.get(':nth-child(3) > .register__input').type(faker.internet.email(10))

    // Preenche o campo de telefone com um número de telefone de 11 dígitos gerado aleatoriamente.
    cy.get(':nth-child(4) > .register__input').type(faker.string.numeric(11))

    // Preenche o campo de senha com uma combinação de caracteres, incluindo caracteres não latinos ('用户密码').
    cy.get(':nth-child(5) > .register__input').type(password+'用户密码')

    // Preenche o campo de confirmação de senha com a mesma combinação de senha.
    cy.get(':nth-child(6) > .register__input').type(password+'用户密码')

    // Clica no botão de registro para submeter o formulário.
    cy.get('.register__button-wrapper').click()

    // Verifica se a mensagem de erro de senha aparece, indicando que a senha não atende aos requisitos mínimos.
    cy.get('.register__input-error').should('contain','Senha deve ter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas e números.')
})
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

