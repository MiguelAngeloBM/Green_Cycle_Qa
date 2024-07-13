Funcionalidade: Finalização de compra
  Como um usuário
  Eu quero fornecer meu endereço de entrega e informações de pagamento
  Para finalizar minha compra

  Scenario: Finalização bem-sucedida com informações válidas
    Given o usuário está na página de checkout
    When o usuário insere um endereço de entrega válido "Rua Exemplo, 123, Bairro Exemplo, Cidade Exemplo, Estado Exemplo, 00000-000"
    And o usuário seleciona uma forma de pagamento válida "Cartão de Crédito"
    And o usuário insere as informações de pagamento válidas "Número do Cartão: 1234 5678 1234 5678, Validade: 12/25, CVV: 123"
    Then o usuário deve ver a mensagem "Compra finalizada com sucesso"
    And o usuário deve ser redirecionado para a página de confirmação de pedido

  Scenario: Finalização falha com endereço de entrega inválido
    Given o usuário está na página de checkout
    When o usuário insere um endereço de entrega inválido ""
    And o usuário seleciona uma forma de pagamento válida "Cartão de Crédito"
    And o usuário insere as informações de pagamento válidas "Número do Cartão: 1234 5678 1234 5678, Validade: 12/25, CVV: 123"
    Then o usuário deve ver a mensagem de erro "Endereço de entrega inválido"

  Scenario: Finalização falha com informações de pagamento inválidas
    Given o usuário está na página de checkout
    When o usuário insere um endereço de entrega válido "Rua Exemplo, 123, Bairro Exemplo, Cidade Exemplo, Estado Exemplo, 00000-000"
    And o usuário seleciona uma forma de pagamento válida "Cartão de Crédito"
    And o usuário insere as informações de pagamento inválidas "Número do Cartão: 0000 0000 0000 0000, Validade: 00/00, CVV: 000"
    Then o usuário deve ver a mensagem de erro "Informações de pagamento inválidas"

  Scenario: Finalização falha com campos obrigatórios vazios
    Given o usuário está na página de checkout
    When o usuário não insere um endereço de entrega
    And o usuário não seleciona uma forma de pagamento
    And o usuário não insere as informações de pagamento
    Then o usuário deve ver a mensagem de erro "Preencha todos os campos obrigatórios"

  Scenario: Finalização falha com forma de pagamento não selecionada
    Given o usuário está na página de checkout
    When o usuário insere um endereço de entrega válido "Rua Exemplo, 123, Bairro Exemplo, Cidade Exemplo, Estado Exemplo, 00000-000"
    And o usuário não seleciona uma forma de pagamento
    Then o usuário deve ver a mensagem de erro "Selecione uma forma de pagamento"

    Funcionalidade: Botão Finalizar Compra na página de checkout
  Como um usuário
  Eu quero finalizar minha compra ao clicar no botão "Finalizar Compra"
  Para concluir o processo de compra

  Scenario: Finalização de compra bem-sucedida ao clicar no botão "Finalizar Compra"
    Given o usuário está na página de checkout
    And o usuário inseriu um endereço de entrega válido "Rua Exemplo, 123, Bairro Exemplo, Cidade Exemplo, Estado Exemplo, 00000-000"
    And o usuário selecionou uma forma de pagamento válida "Cartão de Crédito"
    And o usuário inseriu as informações de pagamento válidas "Número do Cartão: 1234 5678 1234 5678, Validade: 12/25, CVV: 123"
    When o usuário clica no botão "Finalizar Compra"
    Then o usuário deve ver a mensagem "Compra finalizada com sucesso"
    And o usuário deve ser redirecionado para a página de confirmação de pedido

  Scenario: Botão "Finalizar Compra" desabilitado sem todas as informações necessárias
    Given o usuário está na página de checkout
    And o usuário inseriu um endereço de entrega válido "Rua Exemplo, 123, Bairro Exemplo, Cidade Exemplo, Estado Exemplo, 00000-000"
    And o usuário selecionou uma forma de pagamento válida "Cartão de Crédito"
    And o usuário inseriu apenas algumas informações de pagamento válidas "Número do Cartão: 1234 5678 1234 5678"
    When o usuário verifica o estado do botão "Finalizar Compra"
    Then o botão "Finalizar Compra" deve estar desabilitado

  Scenario: Botão "Finalizar Compra" desabilitado sem endereço de entrega
    Given o usuário está na página de checkout
    And o usuário não inseriu um endereço de entrega
    And o usuário selecionou uma forma de pagamento válida "Cartão de Crédito"
    And o usuário inseriu as informações de pagamento válidas "Número do Cartão: 1234 5678 1234 5678, Validade: 12/25, CVV: 123"
    When o usuário verifica o estado do botão "Finalizar Compra"
    Then o botão "Finalizar Compra" deve estar desabilitado

  Scenario: Botão "Finalizar Compra" desabilitado sem forma de pagamento selecionada
    Given o usuário está na página de checkout
    And o usuário inseriu um endereço de entrega válido "Rua Exemplo, 123, Bairro Exemplo, Cidade Exemplo, Estado Exemplo, 00000-000"
    And o usuário não selecionou uma forma de pagamento
    And o usuário inseriu as informações de pagamento válidas "Número do Cartão: 1234 5678 1234 5678, Validade: 12/25, CVV: 123"
    When o usuário verifica o estado do botão "Finalizar Compra"
    Then o botão "Finalizar Compra" deve estar desabilitado