Feature: Cabeçalho

Scenario: Campo de busca

Given O usuario entra no site greencycle
When O usuario clica no icone de busca
Then O campo de busca e exibida com sucesso

Scenario: Logo GreenCycle leva para Home
    Given O usuario entra no site greencycle
    When O usuario clica na Logo 
    Then O usuario e redirecionado a Home

    Scenario: Botão "Sacola" abre o pop-up da sacola
    Given O usuario adiciona um produto
    When o usuario  clica no botao "sacola"
    Then o pop-up da sacola abre

    Scenario: Botão "Login" abre  a página de Login
    Given O usuario enta no site da greencycle
    When O usuario clica no icone de "Login"
    Then O  pop-up  de login abre

    Scenario:Botão "Crie sua conta" abre a página de Criar conta
    Given O usuario enta  no site da greencycle
    When O usuario clica em crie sua conta
    Then Abre o pop-up de crie sua conta

    Scenario: Botão "Loja" abre a página da Loja
    Given O usuario entra no site da greencycle
    When O usuario clica no botao "Loja"
    Then O usuario e redirecionado para a  Loja

    Scenario: Botão "Sobre" abre a página Sobre Empresa
     Given O usuario entra no site da greencycle
    When O usuario clica no botao "Sobre"
    Then O usuario e redirecionado para o Sobre

    Scenario: Botão "Pontos de Coleta" abre a página do Mapa
     Given O usuario entra no site da greencycle
    When O usuario clica no botao "Ponto de coleta"
    Then O usuario e redirecionado para o Ponto de coleta

    Scenario: Botão "Contato" ancora o footer com as informações de contato
    Given  O usuario entra no site da greencycle
    When O usuario clica botao "contato"
    Then O usuario e redirecionado paro o footer com as informações de contato

    Scenario: Produtos listados nos Destaques abre a página do produto
    Given O usuario vai para os Destaques
    When O usuario clica nos Destaques
    Then O usuario e redirecionado para a pagina do produto

    Scenario: Botão "Ir para a Loja >" abre a página da loja
    Given o usuario vai para o body
    When O usuario clica no botao "Ir para a loja"
    Then O usuario e redirecionado para a loja

    Scenario: Botão "Encontre um na sua região" abre a página dos pontos de coleta
    Given O usuario vai para o body
    When O usuario clica no botao "encontre um na sua regiao"
    Then O usuario e redirecionado para os pontos de coletas

Scenario: Botão "Sobre" abre a página Sobre Empresa
Given O usuario vai para o rodape
When O usuario clica no botao "sobre"
Then O usuario e redirecionado para o sobre da Empresa
