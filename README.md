# Teste para Leadster

## Minhas decisões

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Neste projeto eu tentei utilizar o Next 13 com styled-components, porém como o next 13 é recente, ainda temos bugs de integração com styled. Mesmo eu utilizando o tutorial da vercel, percebo que ainda temos bugs e erros.

Mesmo procurando no github e stack overflow, não se tem uma solução, pelo menos eu não encontrei.

Como eu tenho conhecimento e sei que funciona perfeitamente, eu utilizei:

- Next 13.4.7
- Styled-components 5.3.6
- Typescript 5.1.3

## Organização

Geralmente eu projetos eu prezo estrutura de estilização e tipagem. Neste projeto eu utilizei uma estrutura que montei com theme provider e global styles, onde me permite criar multiplos temas e integrar com os contextos para tornar isso possível.

Na pasta de components temos os componentes reutilizáveis no projetos, junto com componentes de página, pois o Next não permite criar outras subpastas sem que sejam rotas, pelo menos nesta versão.

O componente de gridCards pode ser modificado e tipado, deixei dessa maneira, pois pode ser utilizado somente na HOme, mas se por ventura for ser utilizado em outra parte, o mesmo é fácilmente alterado e convertido em reutilizável.

Dentro da pasta Base temos um tsx que retorna os dados utilizados nos vídeos. Eu acessei o canal da Leadster e peguei os links dos vídeos e montei uma array para que eu possa mostrar nos modais.

## Como iniciar o projeto

Dê um git clone em [https://github.com/iguana-3d/test-for-leadster.git](https://github.com/iguana-3d/test-for-leadster.git) e após isso no terminal:

```bash
npm install
#ou
yarn install
# e após istalar as dependências digite
npm run dev
#ou
yarn dev
#para iniciar o projeto
```

## Observações

Como o porjeto não tinha figma, era só um PNH, eu tentei deixar o mais próximo possível do que estava no PNG. Para uma maior precisão seria interessante disponibilizar um link para o Figma do projeto, fora também que algumas coisas não temos, como por exemplo um triângulo na sessão de ver demonstração.

## Deploy

Foi feito deploy do projeto na vercel e eu utilizei um subdomínio para redirecionar, os links são:

[https://test.leadster.devprophet.com/](https://test.leadster.devprophet.com/)
[test-for-leadster.vercel.app](test-for-leadster.vercel.app)
