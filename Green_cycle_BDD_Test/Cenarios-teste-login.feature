Feature: Login do usuario

Scenario: Login bem-sucedido com email e senha válidos
Given O usuario abre o login
When O usuario insere um email valido  "greencycle@gmail.com",
And O usuario  insere uma  senha valida "Green-cycl3"
Then  Então o usuário deve ser redirecionado para a página inicial o usuário deve ver a mensagem "Login realizado com sucesso"

Scenario: Login bem-sucedido com email  válidos
Given O usuario abre o login
When O usuario insere um email valido  "greencycle@gmail.com",
Then  Então o usuário deve ser redirecionado para a página inicial o usuário deve ver a mensagem "Login realizado com sucesso"

Scenario: Login bem-sucedido e senha válidos
Given O usuario abre o login
When  O usuario  insere uma  senha valida "Green-cycl3"
Then  Então o usuário deve ser redirecionado para a página inicial o usuário deve ver a mensagem "Login realizado com sucesso"

Scenario: Login falha com email inválido
Given O usuario abre o  login
When O  usuario insere um email inválido "usuario@invalido"
Then Então o usuário deve ver a mensagem de erro "Email ou senha inválidos"

Scenario: Login falha com senha inválida
Given O usuario abre o login
When o usuário insere uma senha inválida "senhaErrada"
Then Então o usuário deve ver a mensagem de erro "Email ou senha inválidos"

Scenario: Login falha com campos vazios
Given O usuario abre o login
When O  usuário não insere um email e o usuário não insere uma senha
And O usuario clica no botao de "login" 
Then Então o usuário deve ver a mensagem de erro "Preencha todos os campos"

Given Start to type your Given step here
When Start to type your When step here
And Start to type your And step here
Then Start to type your Then step here