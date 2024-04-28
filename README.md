# Teste Técnico Front-end Be

O Teste Técnico para Front-End da Be consiste em construir a visualização de uma tabela com dados que virão de uma API simulada, em json-server.

## Requisitos Gerais

Deve-se utilizar React.js ou Vanilla JS (JavaScript puro) para construir o projeto.

É permitido utilizar libs externas, mas recomenda-se que seja o mínimo possível.

A visualização deve ser responsiva.

A tabela deve conter as seguintes colunas:

- imagem (thumb do/a usuário/a);
- nome;
- cargo
- data de admissão;
- telefone.

Também deve ser possível realizar pesquisa na tabela por meio de um input. O input de pesquisa deve permitir filtrar dados por cargo, nome e telefone.

Datas e telefones devem ser formatadas no front-end e não na API.

Tenha instaladas em sua máquina as ferramentas [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/) (ou outro gerenciador de pacotes de sua preferência) para poder trabalhar no projeto.

## Instruções para rodar a aplicação

1) Clone o repositório:

``` shell
git clone https://github.com/spiielberg/desafio-front-end-bemobile.git
```

2) Entre na pasta do projeto:
``` shell
cd desafio-front-end-bemobile
```

3) Instale as dependências do projeto:
``` shell
npm install
```

3) Inicie o JSON Server:
``` shell
npm run server
```

4) Inicie a aplicação:
``` shell
npm run dev
```

5) Acesse a aplicação através do [Localhost](http://localhost:3000)
