Funcionalidade: Mapa de pontos de coleta
  Como um usuário
  Eu quero visualizar pontos de coleta no mapa
  Para encontrar locais próximos para entrega ou retirada de produtos

  Scenario: Exibição do texto "PONTOS DE COLETA" com ícone promocional
    Given o usuário está na página do mapa de pontos de coleta
    When o usuário visualiza o mapa
    Then o usuário deve ver o texto "PONTOS DE COLETA"
    And o usuário deve ver um ícone promocional próximo ao texto

  Scenario: Clique no ícone promocional exibe informações detalhadas
    Given o usuário está na página do mapa de pontos de coleta
    And o usuário visualiza o mapa com o texto "PONTOS DE COLETA" e o ícone promocional
    When o usuário clica no ícone promocional
    Then o usuário deve ver informações detalhadas ou uma janela pop-up com promoções ou detalhes adicionais

  Scenario: Navegação para um ponto de coleta específico
    Given o usuário está na página do mapa de pontos de coleta
    And existem vários pontos de coleta no mapa
    When o usuário clica em um ponto de coleta específico no mapa
    Then o usuário deve ser direcionado para mais informações sobre aquele ponto de coleta