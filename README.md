# Desenvolvendo o Dio Bank
desenvolvido por [João Victor](https://github.com/jvmarques7)
com mentoria de [Nathally Souza](https://github.com/nathyts)

#### Projeto desenvolvido com conceitos básicos de typescript

App com validação de login utilizando api.

### Tecnologias
- Typescript

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependeências
    
    npm install

3 - Execute o projeto

    npm start

#### Desafios
[X] Incluir validação da senha no campo de login
  - Para logar, além do email faça a validação com a senha informada pelo usuário.
  - Durante a implementação, aplique o TDD e escreva os testes unitários para a nova validação

[X] Implemente um sistema de login com a Context API
  - Seguindo os exemplos demonstrados ao longo do curso, crie um estado global para realizar o login
  - Utilize o localStorage para armazenar os dados do usuário ao logar
  - Caso os dados do usuário existam no localStorage, a tela de login não deve ser exibida

[X] Crie uma página para exibir as informações do usuário
  - Crie uma página onde será exibido o nome, email
  - Esta página só poderá ser acessada caso a usuária esteja logada
  - Caso a usuária não esteja logada, deve ser mantida na página com a tela de login
  - Escreva os testes unitários para as funções criadas ou refatoradas.

[X] Fazer o deploy no Netlify e compartilhar o link da página

Link do deploy no netfly -> [diobank-appfull](https://main--statuesque-kulfi-0f5b48.netlify.app)
