# *"TO PRESENTE"*

Projeto para apresentação do TCC do Curso Técnico em Desenvolvimento de Sistemas
da Escola Técnica Estadual Ariano Vilar Suassuna.

OBS: **"ainda em desenvolvimento"**




## O que é o projeto

Trata-se de uma "agenda eletrônica" para realização de chamadas
em sala de aula, onde o professor poderá controlar por meio do seu
aparelho celular.

O projeto possui dois tipos de *usuários*:

USUÁRIO PROFESSOR  
USUÁRIO ALUNO

## O que terá no APP

O App possuirá opções de login tanto para "ALUNO" quanto "PROFESSOR".

### O perfil Professor:

Irá se cadastrar inserindo os dados:

* Nome completo
* Codigo de matricula/ cpf
* Email válido
* Senha

Para fazer login serão pedidos apenas:

* Email válido 
* Senha

### Dentro do perfil Professor

Terão 3 opções principais que serão:

* Turmas
* Registrar aula
* Aulas registradas

Na opção "TURMAS", o professor terá acesso a listas de alunos 
que estão matriculados nas respectivas turmas.

Na opção "REGISTRAR AULA", o professor poderá registrar sua 
aula inserindo informações como:

* disciplina
* horário de início de aula 
* horário de termino de aula
* data da aula 
* e um botão para poder gerar um QR-code.

Ao gerar o QR-code o app do "professor" ficará com um QR-code
em sua tela com todas as informações de sua aula registradas
onde os alunos com seus aparelhos celulares irão escanear o 
QR-code do professor e ter sua presença registrada.

Ao término de todos da turma escanear e ter sua presença registrada,
o professor finalizará o QR-code, e o app enviará em pdf a lista da 
turma com as presenças dos respectivos alunos registradas para o seu Email
cadastrado.

E a última opção é "AULAS REGISTRADAS", o professor terá acesso a todas
as aulas que ele ja tenha cadastrado, com todas as informações fornecidas 
na hora do seu cadastro.

### O perfil Aluno

Irá se cadastrar inserindo os seguintes dados: 

* Nome completo
* Codigo de matricula/ cpf
* Email válido
* Senha

Para fazer login serão pedidos apenas:
* Email válido 
* Senha

### Dentro do perfil Aluno 

Terá apenas 2 opções que serão: 
* Registrar presença 
* Presenças registradas

Na opção "REGISTRAR PRESENÇA" o aplicativo abrirá a camera 
do celular para leitura do QR-code que será gerado pelo 
professor, o aluno irá ler o QR-code e o aplicativo exibirá
uma tela de "Presença registrada", registrando assim sua presença
na respectiva aula e retornará para a tela principal.

Na opção "PRESENÇAS REGISTRADAS", o aluno poderá ter acesso a 
todas as aulas em que ele ja teve sua presença registrada.


### O que estou utilizando para desenvolver:

Como IDE estou usando o "VSCODE" - <https://code.visualstudio.com/>

Para desenvolvimento mobile estou utilizando o "reac-native"
<https://reactnative.dev/>

Para emulação em aparelhos celulares estou utilizando o "Expo"
<https://expo.dev/>

### Módulos, bibliotecas, e etc:

Para facilitar navegação entre telas e roteamentos estou utilizando "react-navigation"
<https://reactnavigation.org/>

Para facilitar e ajudar no desenvolvimento de interfaces de usuário estou utilizando o "react-native-elements" 
<https://reactnativeelements.com/>

Para mascarar entradas de texto dos usuários, como cpf, numeros de telefone,
estou utilizando o react-native-masked-text, e um pouco antigo mais ainda funciona muito bem
<https://www.npmjs.com/package/react-native-masked-text>







