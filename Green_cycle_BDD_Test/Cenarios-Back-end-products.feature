 Feature: Criar Novo Produto (/products/new)

Scenario: É possível criar produtos novos
Given que eu tenho todos os dados válidos para criar um novo produto
When eu faço uma requisição para o endpoint /products/new
Then o produto deve ser criado com sucesso
And eu devo receber um status code 201 (Created)

Scenario: Não é possível criar um produto novo sem nome
Given que eu tenho um produto sem o nome
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o nome é obrigatório

Scenario: Não é possível criar produto novo sem cover
Given que eu tenho um produto sem o cover
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o cover é obrigatório

Scenario: Não é possível criar produto novo sem descrição
Given que eu tenho um produto sem a descrição
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que a descrição é obrigatória

Scenario: Não é possível criar produto novo sem preço
Given que eu tenho um produto sem o preço
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o preço é obrigatório

Scenario: Não é possível criar produto novo sem categoria
Given que eu tenho um produto sem a categoria
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que a categoria é obrigatória

Scenario: Não é possível criar produto novo sem company
Given que eu tenho um produto sem a company
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que a company é obrigatória

Scenario: Não é possível criar produto com number no nome
Given que eu tenho um produto com número no nome
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o nome é inválido

Scenario: Não é possível criar produto com number no parametro cover
Given que eu tenho um produto com número no cover
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o cover é inválido

Scenario: Não é possível criar produto com number na descrição
Given que eu tenho um produto com número na descrição
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que a descrição é inválida

Scenario: Não é possível criar produto com string no preço
Given que eu tenho um produto com string no preço
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o preço é inválido

Scenario: Não é possível criar produto com number na categoria
Given que eu tenho um produto com número na categoria
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que a categoria é inválida

Scenario: É possível criar produto com o parâmetro featured true
Given que eu tenho um produto com o parâmetro featured true
When eu faço uma requisição para o endpoint /products/new
Then o produto deve ser criado com sucesso
And eu devo receber um status code 201 (Created)

Scenario: É possível criar produto com o parâmetro featured false
Given que eu tenho um produto com o parâmetro featured false
When eu faço uma requisição para o endpoint /products/new
Then o produto deve ser criado com sucesso
And eu devo receber um status code 201 (Created)

Scenario: Não é possível criar produto com o parâmetro featured com string
Given que eu tenho um produto com o parâmetro featured como string
When eu faço uma requisição para o endpoint /products/new
Then eu devo receber um status code 400 (Bad Request)
And uma mensagem de erro informando que o parâmetro featured é inválido

 Feature: Listar Produtos (/products)

Scenario: É possível listar todos os produtos
Given que eu tenho produtos cadastrados
When eu faço uma requisição para o endpoint /products
Then eu devo receber uma lista de todos os produtos
And eu devo receber um status code 200 (OK)

 Feature: Listar Produtos por Categoria (/products/category/:category)

Scenario: É possível listar produtos de uma categoria existente
Given que eu tenho produtos cadastrados em uma categoria existente
When eu faço uma requisição para o endpoint /products/category/:category
Then eu devo receber uma lista de produtos da categoria especificada
And eu devo receber um status code 200 (OK)

Feature: Listar Produtos por Empresa (/products/company/:company)

Scenario: É possível listar produtos de uma empresa existente
Given que eu tenho produtos cadastrados de uma empresa existente
When eu faço uma requisição para o endpoint /products/company/:company
Then eu devo receber uma lista de produtos da empresa especificada
And eu devo receber um status code 200 (OK)

 Feature: Listar Produtos em Destaque (/products/feature)

Scenario: É possível listar produtos em destaque
Given que eu tenho produtos cadastrados como destaque
When eu faço uma requisição para o endpoint /products/feature
Then eu devo receber uma lista de produtos em destaque
And eu devo receber um status code 200 (OK)

 Feature: Pesquisar Produto (/products/search)

Scenario: É possível pesquisar produto existente
Given que eu tenho um produto existente
When eu faço uma requisição para o endpoint /products/search com o nome do produto
Then eu devo receber uma lista de produtos correspondentes à pesquisa
And eu devo receber um status code 200 (OK)
