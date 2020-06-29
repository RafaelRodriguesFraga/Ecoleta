
<p align=center>
<img src="https://user-images.githubusercontent.com/29709111/85924383-5deacd00-b868-11ea-8f08-e421bfde713b.png" />
</p>

**<h2 align="center">Projeto desenvolvido na Next Level Week 1 realizada pela [Rocketseat](https://rocketseat.com.br) em conjunto com a Semana do Meio Ambiente</h2>**

<p align="center">
    <img src="https://img.shields.io/badge/node%20-v12.16.3-success">
    <img src="https://img.shields.io/badge/typescript-v3.7.2-blue">
    <img src="https://img.shields.io/badge/react-v16.13.1-%231fcaf7">
    <img src="https://img.shields.io/badge/react--native-sdk--37.0.1-%2325d2f5">
    <img src="https://img.shields.io/badge/expo-v37.0.3-%23432ed7">
    <img src="https://img.shields.io/badge/knex-v0.21.1-%23da6125">
    <img src="https://img.shields.io/badge/sqlite3-v4.2.0-%2307324f">
</p>


## **:hammer: Ferramentas Utilizadas**

* #### **API** ([NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

    * Express
    * Knex       
    * Multer
    * Celebrate 

   Veja o arquivo <kbd>[package.json](./server/package.json)</kbd> para mais ferramentas.

* #### **Site** ([ReactJS](https://pt-br.reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

    * React Router Dom
    * React Icons       
    * Axios
    * React Leaflet

   Veja o arquivo <kbd>[package.json](./web/package.json)</kbd> para mais ferramentas.

* #### **Mobile** ([React Native](https://reactnative.dev/) + [TypeScript](https://www.typescriptlang.org/))
    
    * Expo
    * Expo Mail Composer       
    * React Navigation
    * React Native Maps

  Veja o arquivo <kbd>[package.json](./mobile/package.json)</kbd> para mais ferramentas.

### Índice

| Nº | Conteúdo |
| --- | --------- |
|1  | [Ferramentas necessárias](#ferramentas-necessárias) |
|2  | [Baixando o projeto](#baixando-o-projeto)
|   | **A API (Pasta server)**|
|3  | [Como usar](#como-usar) |
|4  | [Preparando o banco de dados](#preparando-o-banco-de-dados) |
|5  | [Executando a API](#executando-a-api) |
|   | **Postman/Insomnia**
|6 | [Utilizando a API](#utilizando-a-api) |
|7 | [Cadastrando um Ponto de Coleta](#cadastrando-um-ponto-de-coleta) |
|8 | [Listando um Ponto de Coleta](#listando-um-ponto-de-coleta) |
|9 |[Filtrando um Ponto de Coleta](#filtrando-um-ponto-de-coleta) |
|   | **O Site (Pasta Web)**
|10 |[Executando a Aplicação Web](#executando-a-aplicação-web) |
|   | **O App (Pasta Mobile)**|
|11 |[Instalando o Expo](#instalando-o-expo) |
|12 |[Executando em um dispositivo real](#executando-em-um-dispositivo-real) |

_Obs: O uso de toda aplicação será feita localmente. Futuramente o projeto estará em produção_

1. #### Ferramentas Necessárias

    Antes de clonar e baixar o projeto será necessário que algumas ferramentas sejam instaladas:

    * [Node](https://nodejs.org/en/)  
    * [Git](https://git-scm.com/downloads)
    * Um gerenciador de pacotes (o Node vem com Npm)   
    * [Expo](https://expo.io/) (será mostrado abaixo como instalar)
    * Algum software para execução da API ([Postman](https://www.postman.com/downloads/), [Insomnia](https://insomnia.rest/download/))

**[⬆ Voltar ao topo](#índice)**    

2. #### Baixando o projeto

    Com o Git instalado, escolha um local de sua preferência para clonar o projeto. No meu caso, eu escolhi **Meus Documentos** só para exemplo. Dentro da pasta escolhida, clique com o botao direito do mouse e escolha a opção **Git Bash Here**. 

    Com o git aberto, copie e cole ou digite o código abaixo:

     **```git clone https://github.com/RafaelRodriguesFraga/Ecoleta.git```**    

**[⬆ Voltar ao topo](#índice)**

### :pencil2: A API (Pasta Server)

3. #### Como Usar

    A API do projeto foi feito em NodeJS. Como dito lá em cima, é necessário ter o Node instalado para ela poder ser usada. 

    Dentro da pasta clonada (Ecoleta), há três pastas: mobile, server e web. A nossa API está dentro da pasta server. Com o terminal do git aberto (o git bash), navegue até a pasta utilizando o comando:

    **```cd server```** 

    Dentro da pasta server, temos que instalar as dependências do projeto. Isso é feito utilizando o comando:

     **```npm install```**

     Após isso uma pasta chamada node_modules será criada dentro da nossa pasta server. É dentro dela que ficam todas as dependências.

**[⬆ Voltar ao topo](#índice)**    

4. #### Preparando o Banco de Dados

    Para o Banco de Dados foi utilizado o SQLite. Para cria-lo, utilize o comando:

    **```npm run knex:migrate```**

    Isso criará todas as tabelas necessárias para que a API possa ser usada. 

    Vamos então adicionar nossos itens de coleta ao nosso banco. Faremos isso utilizando o comando:

    **```npm run knex:seed```**

**[⬆ Voltar ao topo](#índice)**  

5. #### Executando a API

    Com tudo configurado, é hora de executar. Utilize o comando:

    **```npm run dev```**

    Pronto, nosso servidor está rodando. Agora vamos utilizar de fato

**[⬆ Voltar ao topo](#índice)** 

6. #### Utilizando a API

    Com o Postman/Insomnia aberto, vamos começar a utilizar a API. Ela possui 4 rotas: 
    
    **get** ```localhost:3333/itens```
    **post** ```localhost:3333/points```   
    **get** ```localhost:3333/points/id```
    **get** ```localhost:3333/points```

    Os dois Softwares são bem intuitivos para serem usados. Eu gosto mais do Insomnia mas isso vai de gosto pessoal mesmo. Como exemplo de como o Insomnia é, colocarei uma foto de exemplo da primeira rota sendo usada nele

    ![insomnia](https://user-images.githubusercontent.com/29709111/85936472-95da2a80-b8d1-11ea-920a-84588eb8430e.png)

    No topo está o metodo que estamos usando (GET) e a rota  ```localhost:3333/itens```. Na esquerda, a resposta que está sendo mostrada após a execução.

**[⬆ Voltar ao topo](#índice)**  

7. #### Cadastrando um Ponto de Coleta

    Dentro do Software da sua escolha, escolha como metodo o POST e  coloque **```localhost:3333/points```** na url. Onde possui Body (geralmente é abaixo do método e da rota) mude para Multipart Form. Cada registro possui campos com o tipo chave/valor, onde a chave é o que você quer cadastrar e o valor é a descrição da chave. Abaixo um exemplo:
    
    ```
    name: Mercado Teste MySQL
    email: mercadoteste@gmail.com
    whatsapp: 2799999999
    latitude: -20.2645188
    longitude: -40.2659522
    city: Vitória
    uf: ES

    Para a imagem é necessario trocar o
    tipo de dado dela. indo na setinha ao 
    lado do campo valor. Mude para
    File e você poderá escolher uma foto

    image: cesto-de-pao.jpg
    itens: 1,2,6
    ```

    Após colocar todos os dados, clique em Send e o seguinte resultado aparecerá:

    ```json
    {
       "id": 1,
       "image": "42bbfbd0cddf-cesto-de-pao.jpg",
       "name": "Mercado Teste MySQL",
       "email": "mercadoteste@gmail.com",
       "whatsapp": 2799999999,
       "latitude": -20.2645188,
       "longitude": -40.2659522,
       "city": "Vitória",
       "uf": "ES"
    }
    ```
**[⬆ Voltar ao topo](#índice)**  

8. #### Listando um Ponto de Coleta

    Com um ou mais pontos de coleta cadastrados, vamos listar um deles. Utlizaremos a rota 
    **get** ```localhost:3333/points/id``` para isso. Onde o "id" é o número do id que você quer listar.

    Usando **get** ```localhost:3333/points/1``` teremos o seguinte resultado:

    ```json
    {
      "point": {
         "id": 1,
         "image": "ca326344eb84-cesto-de-pao.jpg",
         "name": "Mercado Teste MySQL",
         "email": "mercadoteste@gmail.com",
         "whatsapp": "2799999999.0",
         "latitude": -20.2645188,
         "longitude": -40.2659522,
         "city": "Vitória",
         "uf": "ES",
         "image_url": "http://192.168.15.7:3333/uploads/ca326344eb84-cesto-de-pao.jpg"
      },
      "itens": [
        {
        "title": "Lãmpadas"
        },
        {
        "title": "Pilhas e Baterias"
        },
        {
        "title": "Óleo de Cozinha"
        }
      ]
    }  
    ```
   
**[⬆ Voltar ao topo](#índice)**  

9. #### Filtrando um Ponto de Coleta

    Poderemos filtrar um Ponto de Coleta pela cidade, uf e pelos itens que foram cadastrados nele.

    No Postman/Insomnia, do lado da opção Auth (embaixo da url), há uma opção Query. Clique nela e, da mesma forma no Multipart Form, teremos um conjunto de chave/valor para serem colocados. No caso, serão os três citados anteriormente

    ``` 
    city: Vitória
    uf: ES
    itens: 1,2
    ```     
    Isso fará ele procurar todos os registros que estão na cidade de Vitória ES, que possuem os itens 1 e 2. No meu caso, só possuo um então o resultado vai mostrar somente um registro.

**[⬆ Voltar ao topo](#índice)**     

## :computer: O Site (Pasta Web)  

10. #### Executando a Aplicação Web

    O Ecoleta também possui uma aplicação web feita em ReactJS. Para executá-lo, primeiro temos que instalar as depêndencias assim como fizemos com a API. Se ainda estiver dentro da pasta server, utlize o comando:

     **```cd ../web```**

     O **../** fará você sair da pasta server e o complemento é a pasta que queira ir (no nosso caso a web)

     Caso esteja na raiz do Ecoleta por ter aberto um outro terminal:

    **```cd web```**     

    Dentro da pasta web, instale as dependências.

    **```npm install```**

    Com elas instaladas, basta executar o seguinte comando:

    **```npm run start ```**

    Com isso, a aplicação estará rodando em **http://localhost:3000**. Vale lembrar que é necessário que o server esteja rodando também. Caso esteja com o terminal ocupado por conta do server, basta só abrir outro terminal para rodar a aplicação.

    ![ecoleta-web-gif](https://user-images.githubusercontent.com/29709111/85964436-14959d00-b990-11ea-86f4-b46907c84390.gif)

 **[⬆ Voltar ao topo](#índice)**    

### :iphone: O Aplicativo (Pasta Mobile) 

11. #### Instalando o Expo

    Agora é hora de instalarmos o Expo. Primeiramente, faça o mesmo procedimento de troca de pastas feita na aplicação web. (isso se estiver dentro da pasta web)

    **```cd ../mobile```**

    Caso esteja na raiz do Ecoleta por ter aberto um outro terminal:

    **```cd mobile```**

    Agora que estamos dentro da pasta mobile, instale mais uma vez as dependências do projeto.

    **```npm install```**

    Feito isso, podemos instalar o Expo com o seguinte comando:
    
     **```npm install -g expo-cli```**

     Isso fará com que o Expo seja instalado globalmente em seu computador, podendo ser usado em qualquer lugar dele a partir do terminal.

**[⬆ Voltar ao topo](#índice)**      

12. #### Executando em um dispositivo real

    Vamos agora preparar o nosso dispositivo real para executar o app. Primeiramente, vá na loja do seu smartphone e baixe o Expo. 

    * [App Store](https://apps.apple.com/br/app/expo-client/id982107779)  
    * [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)   

    Antes de continuarmos no dispositivo real, vamos executar a aplicação. Fazemos isso com o seguinte comando:

    **```npm run start```**

    Isso fará o Metro Bundler ser executado no seu navegador. Agora que ele está aberto, podemos continuar com o dispositivo real.

    Abra o App Expo e você verá essa tela: 

    <p align=center>
    <img src="https://user-images.githubusercontent.com/29709111/86009775-fdd36280-b9f0-11ea-8b71-7df6260e2da8.jpg" />
    </p>

    No Metro Bundler, no navegador, há um QR Code. No App Expo, clique em **Scan QR Code** e posicione sua cãmera para que ele consiga ler o QR Code. Feito isso, só aguardar um pouco que ele abrirá o nosso Ecoleta. 

   <p align=center>
    <img src="https://user-images.githubusercontent.com/29709111/86012489-6b34c280-b9f4-11ea-96d2-aed79698e3df.gif" />
    </p> 

**[⬆ Voltar ao topo](#índice)**      
   
### Agradecimentos

   Queria deixar aqui meus agradecimentos a toda equipe da Rocketseat por ter disponibilzado esse evento sensacional que foi a Next Level Week. Com certeza aprendi bastante com eles, há coisas ainda que preciso entender mas isso a gente consegue com o tempo. E nesse tempo eu tive uma paixão maior pelo Node :laughing:

  Muito obrigado mesmo por compartilhar o conhecimento que vocês tem com a comunidade. Estou ansioso para o próximo NLW e com certeza farei. 

**[⬆ Voltar ao topo](#índice)**  
 
