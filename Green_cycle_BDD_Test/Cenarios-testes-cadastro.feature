Funcionalidade: Cadastro de usuário na página de produtos
  Como um usuário
  Eu quero me cadastrar na página de produtos
  Para poder acessar e comprar produtos

  Scenario: Cadastro bem-sucedido com informações válidas
    Given o usuário está na página de cadastro de produtos
    When o usuário insere um Nome completo válido "Greenname"
    And o usuário insere um CPF válido "000.000.000-00"
    And o usuário insere um E-mail válido "Greencycle@exemplo.com"
    And o usuário insere um Telefone válido "0000000000"
    And o usuário insere uma Senha válida "Green123"
    And o usuário confirma a senha inserindo novamente "Green123"
    Then o usuário deve ver a mensagem "Cadastro realizado com sucesso"
    And o usuário deve ser redirecionado para a página de produtos

  Scenario: Cadastro falha com e-mail inválido
    Given o usuário está na página de cadastro de produtos
    When o usuário insere um Nome completo válido "Greenname"
    And o usuário insere um CPF válido "000.000.000-00"
    And o usuário insere um E-mail inválido "Greencycle@com"
    And o usuário insere um Telefone válido "0000000000"
    And o usuário insere uma Senha válida "Green123"
    And o usuário confirma a senha inserindo novamente "Green123"
    Then o usuário deve ver a mensagem de erro "E-mail inválido"

  Scenario: Cadastro falha com CPF inválido
    Given o usuário está na página de cadastro de produtos
    When o usuário insere um Nome completo válido "Greenname"
    And o usuário insere um CPF inválido "000.000.000-99"
    And o usuário insere um E-mail válido "Greencycle@exemplo.com"
    And o usuário insere um Telefone válido "0000000000"
    And o usuário insere uma Senha válida "Green123"
    And o usuário confirma a senha inserindo novamente "Green123"
    Then o usuário deve ver a mensagem de erro "CPF inválido"

  Scenario: Cadastro falha com senhas que não correspondem
    Given o usuário está na página de cadastro de produtos
    When o usuário insere um Nome completo válido "Greenname"
    And o usuário insere um CPF válido "000.000.000-00"
    And o usuário insere um E-mail válido "Greencycle@exemplo.com"
    And o usuário insere um Telefone válido "0000000000"
    And o usuário insere uma Senha válida "Green123"
    And o usuário confirma a senha inserindo "Diferente123"
    Then o usuário deve ver a mensagem de erro "As senhas não correspondem"

  Scenario: Cadastro falha com campos obrigatórios vazios
    Given o usuário está na página de cadastro de produtos
    When o usuário não insere um Nome completo
    And o usuário não insere um CPF
    And o usuário não insere um E-mail
    And o usuário não insere um Telefone
    And o usuário não insere uma Senha
    And o usuário não confirma a senha
    Then o usuário deve ver a mensagem de erro "Preencha todos os campos obrigatórios"