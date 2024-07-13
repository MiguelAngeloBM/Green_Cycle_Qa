Feature: Sacola
Scenario: Ao clicar no Ícone "Lixeira" na lateral direita o item é excluido 
Given O usuario adiciona um item na sacola
When O usuario clica no icone da lixeira 
Then O produto e excluido da sacola

Scenario: Ao clicar em "Finalizar compra" o pop-up fecha e entra na area de pagamento 
Given  O usuario adiciona item na sacola
When O usuario clica no botao 'Finalizar compra'
Then Abre a area de pagamento de produtos

Scenario: Ao inserir o cupon "TEST10" e aplicar o valor é desconto do total da compra
    Given O usuario  adiciona item na sacola
    When O usuario adiciona  um cupom
    Then E descontando o valor do produto

