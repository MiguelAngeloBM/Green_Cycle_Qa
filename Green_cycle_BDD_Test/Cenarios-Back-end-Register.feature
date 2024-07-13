Feature: /register

Scenario: Adicionar usuário com dados válidos
Given que eu tenho um usuário com dados válidos
When eu faço uma requisição para o endpoint /register
Then o usuário deve ser adicionado com sucesso
And eu devo receber um status code 201 (Created)

Scenario: Não é possível adicionar um usuário com nome inválido
Given que eu tenho um usuário com um nome inválido
When eu faço uma requisição para o endpoint /register
Then eu não devo conseguir adicionar o usuário
And eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o nome é inválido

Scenario: Não é possível adicionar um usuário com CPF inválido
Given que eu tenho um usuário com um CPF inválido
When eu faço uma requisição para o endpoint /register
Then eu não devo conseguir adicionar o usuário
And eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o CPF é inválido

Scenario: Não é possível adicionar um usuário com e-mail inválido
Given que eu tenho um usuário com um e-mail inválido
When eu faço uma requisição para o endpoint /register
Then eu não devo conseguir adicionar o usuário
And eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o e-mail é inválido

Scenario:Não é possível adicionar um usuário com telefone inválido
Given que eu tenho um usuário com um telefone inválido
When eu faço uma requisição para o endpoint /register
Then eu não devo conseguir adicionar o usuário
And eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o telefone é inválido

Scenario:: Não é possível adicionar um usuário com senha inválida
Given que eu tenho um usuário com uma senha inválida
When eu faço uma requisição para o endpoint /register
Then eu não devo conseguir adicionar o usuário
And eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que a senha é inválida

Scenario:: Não é possível adicionar um usuário com a confirmação de senha inválida
Given que eu tenho um usuário com a confirmação de senha inválida
When eu faço uma requisição para o endpoint /register
Then eu não devo conseguir adicionar o usuário
And eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que a confirmação de senha é inválida

Scenario:: Não é possível adicionar um usuário existente
Given que eu tenho um usuário que já existe no sistema
When eu faço uma requisição para o endpoint /register
Then eu não devo conseguir adicionar o usuário
And eu devo receber um status code 409 (Conflict)
And uma mensagem de erro informando que o usuário já existe

Scenario:: Não é possível validar a solicitação com o parâmetro confirmPassword diferente do parâmetro password
Given que eu tenho um usuário com confirmPassword diferente de password
When eu faço uma requisição para o endpoint /register
Then eu não devo conseguir adicionar o usuário
And eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que a confirmação de senha não corresponde à senha

Feature: PARÂMETRO NAME

   
Scenario:É possível validar o parâmetro name com string letras latinas
Given que eu tenho um parâmetro name com string de letras latinas
When eu faço uma requisição para o endpoint /register
Then o parâmetro name deve ser validado com sucesso

Scenario: Não é possível validar o parâmetro name com string de mais de 40 caracteres
Given que eu tenho um parâmetro name com string de mais de 40 caracteres
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro name é muito longo

Scenario: Não é possível validar o parâmetro name vazio
Given que eu tenho um parâmetro name vazio
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro name não pode ser vazio

Scenario: Não é possível validar o parâmetro name com number
Given que eu tenho um parâmetro name com números
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro name é inválido

Scenario: É possível validar o parâmetro name com caractere traço
Given que eu tenho um parâmetro name com um caractere traço
When eu faço uma requisição para o endpoint /register
Then o parâmetro name deve ser validado com sucesso

Scenario: Não é possível validar o parâmetro name com outros caracteres especiais
Given que eu tenho um parâmetro name com caracteres especiais
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro name é inválido

Scenario: Não é possível validar a solicitação sem o parâmetro name
Given que a requisição não possui o parâmetro name
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro name é obrigatório

Scenario: É possível validar o parâmetro name sem espaços
Given que eu tenho um parâmetro name sem espaços
When eu faço uma requisição para o endpoint /register
Then o parâmetro name deve ser validado com sucesso

Scenario:É possível validar o parâmetro name com espaços
Given que eu tenho um parâmetro name com espaços
When eu faço uma requisição para o endpoint /register
Then o parâmetro name deve ser validado com sucesso

Feature: Description

    
Scenario: É possível validar o parâmetro cpf com 11 caracteres
Given que eu tenho um parâmetro cpf com 11 caracteres
When eu faço uma requisição para o endpoint /register
Then o parâmetro cpf deve ser validado com sucesso

Scenario: Não é possível validar o parâmetro cpf com 9 caracteres
Given que eu tenho um parâmetro cpf com 9 caracteres
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro cpf é inválido

Scenario: Não é possível validar o parâmetro cpf com string letras latinas
Given que eu tenho um parâmetro cpf com string de letras latinas
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro cpf é inválido

Scenario: Não é possível validar o parâmetro cpf com string caracteres especiais
Given que eu tenho um parâmetro cpf com caracteres especiais
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro cpf é inválido

Scenario: Não é possível validar a solicitação com o parâmetro cpf vazio
Given que eu tenho um parâmetro cpf vazio
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro cpf não pode ser vazio

Scenario: Não é possível validar a solicitação sem o parâmetro cpf
Given que a requisição não possui o parâmetro cpf
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro cpf é obrigatório

Scenario:Não é possível validar a solicitação com o parâmetro cpf como objeto
Given que eu tenho um parâmetro cpf como objeto
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro cpf é inválido

Feature: PARÂMETRO EMAIL

    
Scenario: É possível validar o parâmetro email com caractere especial @
Given que eu tenho um parâmetro email com o caractere especial @
When eu faço uma requisição para o endpoint /register
Then o parâmetro email deve ser validado com sucesso

Scenario: É possível validar o parâmetro email com ponto
Given que eu tenho um parâmetro email com ponto
When eu faço uma requisição para o endpoint /register
Then o parâmetro email deve ser validado com sucesso

Scenario: Não é possível validar o parâmetro email sem o caractere especial @
Given que eu tenho um parâmetro email sem o caractere especial @
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro email é inválido

Scenario: Não é possível validar a solicitação com o parâmetro email vazio
Given que eu tenho um parâmetro email vazio
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro email não pode ser vazio

Scenario: Não é possível validar o parâmetro email com mais de 50 caracteres
Given que eu tenho um parâmetro email com mais de 50 caracteres
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro email é muito longo

Scenario: Não é possível validar o parâmetro email com menos de 5 caracteres
Given que eu tenho um parâmetro email com menos de 5 caracteres
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro email é muito curto

Scenario: É possível validar o parâmetro email com caractere especial hífen
Given que eu tenho um parâmetro email com o caractere especial hífen
When eu faço uma requisição para o endpoint /register
Then o parâmetro email deve ser validado com sucesso

Scenario: Não é possível validar o parâmetro email com number
Given que eu tenho um parâmetro email com números
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro email é inválido

Scenario: Não é possível validar a solicitação sem o parâmetro email
Given que a requisição não possui o parâmetro email
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro email é obrigatório

Feature: PARÂMETRO TELEFONE

Scenario:É possível validar o parâmetro telefone com number
Given que eu tenho um parâmetro telefone com números
When eu faço uma requisição para o endpoint /register
Then o parâmetro telefone deve ser validado com sucesso

Scenario: Não é possível validar o parâmetro telefone com string letras latinas
Given que eu tenho um parâmetro telefone com string de letras latinas
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro telefone é inválido

Scenario: É possível validar o parâmetro telefone com 11 caracteres
Given que eu tenho um parâmetro telefone com 11 caracteres
When eu faço uma requisição para o endpoint /register
Then o parâmetro telefone deve ser validado com sucesso

Scenario: Não é possível validar o parâmetro telefone com menos de 11 caracteres
Given que eu tenho um parâmetro telefone com menos de 11 caracteres
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro telefone é muito curto

Scenario:Não é possível validar o parâmetro telefone com mais de 11 caracteres
Given que eu tenho um parâmetro telefone com mais de 11 caracteres
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro telefone é muito longo

Scenario: Não é possível validar o parâmetro telefone vazio
Given que eu tenho um parâmetro telefone vazio
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro telefone não pode ser vazio

Scenario: Não é possível validar a solicitação sem o parâmetro telefone
Given que a requisição não possui o parâmetro telefone
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro telefone é obrigatório

Feature: PASSWORD E CONFIRMPASSWORD


Scenario:É possível validar os parâmetros de senha e confirmação de senha com 10 caracteres
Given que eu tenho os parâmetros password e confirmPassword com 10 caracteres
When eu faço uma requisição para o endpoint /register
Then os parâmetros password e confirmPassword devem ser validados com sucesso

Scenario: Não é possível validar os parâmetros de senha e confirmação de senha com menos de 10 caracteres
Given que eu tenho os parâmetros password e confirmPassword com menos de 10 caracteres
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que os parâmetros de senha e confirmação de senha são muito curtos

Scenario: Não é possível validar os parâmetros de senha e confirmação de senha com mais de 15 caracteres
Given que eu tenho os parâmetros password e confirmPassword com mais de 15 caracteres
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que os parâmetros de senha e confirmação de senha são muito longos

Scenario: Não é possível validar os parâmetros de senha e confirmação de senha somente com string letra latina maiúscula
Given que eu tenho os parâmetros password e confirmPassword somente com letras latinas maiúsculas
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que os parâmetros de senha e confirmação de senha são inválidos

Scenario:Não é possível validar os parâmetros de senha e confirmação de senha somente com string letra latina minúscula
Given que eu tenho os parâmetros password e confirmPassword somente com letras latinas minúsculas
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que os parâmetros de senha e confirmação de senha são inválidos

Scenario: Não é possível validar os parâmetros de senha e confirmação de senha somente com string caracteres especiais
Given que eu tenho os parâmetros password e confirmPassword somente com caracteres especiais
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que os parâmetros de senha e confirmação de senha são inválidos

Scenario: Não é possível validar os parâmetros de senha e confirmação de senha somente com números
Given que eu tenho os parâmetros password e confirmPassword somente com números
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que os parâmetros de senha e confirmação de senha são inválidos

Scenario: Não é possível validar o parâmetro password vazio
Given que eu tenho o parâmetro password vazio
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro password não pode ser vazio

Scenario: Não é possível validar a solicitação sem o parâmetro password
Given que a requisição não possui o parâmetro password
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro password é obrigatório

Scenario:Não é possível validar o parâmetro confirmPassword vazio
Given que eu tenho o parâmetro confirmPassword vazio
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro confirmPassword não pode ser vazio

Scenario:Não é possível validar a solicitação sem o parâmetro confirmPassword
Given que a requisição não possui o parâmetro confirmPassword
When eu faço uma requisição para o endpoint /register
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro confirmPassword é obrigatório

Feature: Login de Usuário (/login)
Scenario: Não é possível fazer login com um e-mail diferente do cadastrado
Given que eu tenho um e-mail diferente do cadastrado
When eu faço uma requisição para o endpoint /login
Then eu não devo conseguir fazer login
And eu devo receber um status code 401 (Unauthorized)
And uma mensagem de erro informando que o e-mail é inválido

Scenario: Não é possível fazer login com uma senha diferente da cadastrada
Given que eu tenho uma senha diferente da cadastrada
When eu faço uma requisição para o endpoint /login
Then eu não devo conseguir fazer login
And eu devo receber um status code 401 (Unauthorized)
And uma mensagem de erro informando que a senha é inválida

Scenario: É possível fazer login somente com dados cadastrados corretamente
Given que eu tenho um e-mail e senha cadastrados corretamente
When eu faço uma requisição para o endpoint /login
Then eu devo conseguir fazer login
And eu devo receber um status code 200 (OK)
And uma mensagem de sucesso informando que o login foi realizado com sucesso