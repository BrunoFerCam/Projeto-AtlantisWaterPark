## Repositório-Téc2

Repositório criado para envio das atividades do exercício Atlantis Water Park.

## Atividade II

## Instruções para execução do projeto:

```
npm install typescript
```

```
npx tsc
```

```
node .\js\app.js
```

## Proposta da Atividade:

O desenvolvimento do primeiro MVP do sistema Atlantis está incompleto e isto desagradou 
muito você, que decidiu cobrar da equipe de desenvolvimento uma versão melhorada, com mais 
funcionalidades. Depois de muito esforço e duas sprints uma nova versão foi entregue. Nesta 
versão utilizou-se dois padrões de projetos e princípios SOLID. Os padrões utilizados foram o 
Singleton e o Strategy. 
A nova versão, entregue pela equipe de desenvolvimento, segue como um sistema do tipo CLI, 
assim como a versão anterior. Neste sistema não há comunicação com algum SGBD, portanto, 
utilizou-se uma classe para armazenar as informações enquanto o sistema é executado, como 
uma base de dados em memória. Esta classe foi denominada de “Armazém”. Esta classe 
implementa o padrão Singleton, por isso possui o método construtor privado. A decisão de 
utilizar o Singleton partiu de um dos seus engenheiros de software e, por hora, será a principal 
forma de armazenar dados no sistema durante sua execução. 
Além do padrão Singleton, a equipe de desenvolvimento fez amplo uso do padrão Strategy - 
aplicado em várias partes por todo o sistema. Este padrão fica evidenciado no diagrama de 
classe mostrado na Figura 1. Na Figura 1 se percebe que existe uma interface, denominada 
Menu. A partir da interface, vários outros algoritmos são definidos por classes que 
implementação a interface Menu. 
Figura 1. Aplicação do padrão Strategy. 
Como você já sabe, padrões de projeto não são um framework ou um código pronto, são uma 
definição de alto nível de como um problema comum pode ser solucionado. Então, a equipe de 
desenvolvimento decidiu aplicar o padrão Strategy de um modo diferente, com uma classe 
abstrata, denominada de Processo. Um processo defini qualquer ação ou comportamento que 
o sistema deva fazer. Esta aplicação diferenciada é evidenciada no diagrama de classe mostrado 
na Figura 2. 
Figura 2. Implementação do padrão Strategy com classe abstrata. 
O sistema começou a “ganhar corpo” e está muito próximo da sua primeira versão estável, 
pronta para ser apresentada para futuros clientes e colocada em produção. Contudo, ainda não 
suficientemente bom para um MVP. De acordo com a ideia inicial, quando você pensou em 
fundar a empresa, algumas funcionalidades são obrigatórias e ainda não estão implementadas. 
O objetivo agora é implementar as funcionalidades obrigatórias para o primeiro MVP, mantendo 
a aplicação dos padrões já utilizados e, se necessário, incluindo novos padrões que você 
considere importantes para o sistema. Você é o responsável por esta parte e pelo preparo do 
sistema para seu primeiro lançamento. 
A funcionalidades que devem ser implementadas são: 
• CRUD de cliente, incluindo clientes dependentes. 
• Listagem de clientes dependentes para um titular específico. 
• Listagem do titular para o cliente dependente específico. 