Feature: Loja

Testaremos  o Body 

Scenario: Ao clicar no "Produto"abre a pagina do produto 
Given O usuario abre a loja
When O usuario clica no produto
Then O usuario e redirecionado a pagina do produto

Scenario: Ao clicar no ícone "+" adiciona o produto na "Sacola"
Given O usuario abre  a loja
When O usuario clica no simbolo de + no produto
Then O produto e  adicionado a sacola e  aparece "Item adicionado com sucesso"

Scenario: Categorias: Ao clicar em "Acessorios" abre a pagima com todos os acessorios em grade
Given O usuario abre loja
When O usuario abre a Categorias 
And O usuario clica  em "acessorios"
Then Os produtos  sao  exibidos em grades de acordo com a categoria selecionada

Scenario: Categorias: Ao clicar em "Moveis" abre a pagima com todos os acessorios em grade
Given O usuario abre loja
When O usuario abre a Categorias 
And O usuario clica  em "Moveis"
Then Os produtos  sao  exibidos em grades de acordo com a categoria selecionada

Scenario: Categorias: Ao clicar em "Calçados" abre a pagima com todos os acessorios em grade
Given O usuario abre loja
When O usuario abre a Categorias 
And O usuario clica  em "Calçados"
Then Os produtos  sao  exibidos em grades de acordo com a categoria selecionada

Scenario: Categorias: Ao clicar em "Roupas" abre a pagima com todos os acessorios em grade
Given O usuario abre loja
When O usuario abre a Categorias 
And O usuario clica  em "Roupas"
Then Os produtos  sao  exibidos em grades de acordo com a categoria selecionada

Scenario: Categorias: Ao clicar em "Utilidades" abre a pagima com todos os acessorios em grade
Given O usuario abre loja
When O usuario abre a Categorias 
And O usuario clica  em "acessorios"
Then Os produtos  sao  exibidos em grades de acordo com a categoria selecionada

Scenario: Lojas: Ao clicar na "Loja" abre a pagina da loja com todos os seus produtos em grade 
Given O usuario abre a loja
When O usuario abre as Categorias
And O usuario seleciona alguma loja
Then  Abre a pagina da loja  com os  produtos em grades

