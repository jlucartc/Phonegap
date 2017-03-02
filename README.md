# Projs

1 - Instalação

Para fazer o build do app para as plataformas android e ios, é necessário instalar o cordova/phonegap:

    https://cordova.apache.org/#getstarted


2 - Adicionando as plataformas

OBS: O projeto atual já possui a plataforma android. Essa etapa só precisa ser realizada caso a plataforma ios seja necessária.

Após a instalação do cordova, basta acessar a pasta do projeto e executar os seguintes comandos:

    cordova platform add android

ou

    cordova platform add ios
  

3 - Rodando o app

Para instalar e executar o app em seu aparelho mobile, conecte-o ao computador. Dentro do diretório do projeto, execute o seguinte comando:

      cordova run --device


