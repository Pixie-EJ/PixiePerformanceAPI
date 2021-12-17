# PixiePerformanceAPI
API for Pixie Performance

# Passos para configurar ambiente:

1 - Acessar o WAMP e rodar 'Start All Services'<br /><br />

2 - Acessar o MySQL Workbench<br />
    2.1 - Criar uma conexão no símbolo de '+' na tela home
    2.2 - Adicionar um nome qualquer e a porta
        2.2.1 - Por padrão o WAMP abre a porta em '3307'
    2.3 - Rodar o 'Test Connection'
    2.4 - Se o Test Connection retornar sucesso, clicar em ok na criação da conexão
    2.5 - Clicar duas vezes na conexão criada caso deseja acessar o banco

# Passos para rodar o projeto:

1 - Abrir o terminal do VSCode e rodar 'npm install'
2 - Acessar o arquivo: infrastructure/connection.js
3 - Alterar o host, port, user e password 
    3.1 - Por padrão o WAMP abre o host em '127.0.0.1' ou 'localhost'
    3.2 - Por padrão o WAMP abre a porta em '3307'
    3.3 - Por padrão o MySQL Workbench tem o user 'root' e password ''

# Passos para desenvolver:

1 - Rodar o comando 'git checkout dev' para acessar a branch de desenvolvimento
2 - Sodar o comando 'git pull' para atualizar a branch de desenvolvimento
3 - Sodar o comando 'git checkout -b nome-exemplo' para criar sua branch

