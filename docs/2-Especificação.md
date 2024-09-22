# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Nessa parte do documento serão apresentados os seguintes tópicos:
>-Personas
>-Histórias de Usuários
>-Requisitos (Funcionais e Não Funcionais)
>-Restrições

## Personas

Maria Silva, tem 32 anos, é dona de casa e tem como hobby cantar em um coral da
comunidade. Sonha em aprender a tocar violão para expandir suas habilidades musicais 
e proporcionar uma educação melhor para seus filhos. Além de aprender a tocar violão, 
Maria Silva está a procura de grupos de estudos que possam oferecer ajuda e aulas gratuitas
para ela e dependendo, para seu filhos também.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Amante de esportes  | Quero encontrar grupos             | Como venho de uma outra cidade e não   |
|e do interior.      | que praticam esporte               | conheço muitas pessoas, acabo ficando  |
|                    | em toda cidade.                    | sem praticar os esportes que amo.      |
|--------------------|------------------------------------|----------------------------------------|
|Profissional de edu-| Poder passar algumas boas práticas | Eu tenho o sonho de ser um treinador de|
|cação física.       | sobre alongamento e tentar reunir  | vôlei e essa pode ser uma boa oportuni-|
|                    | pessoas para o meu projeto de mont | para começar o meu sonho.              |
|                    | um time de vôlei.                  |                                        |
|--------------------|------------------------------------|----------------------------------------|
|Programador Python  | Quero aulas de Phyton para meu au- | Quero entender e me aprofundar mais na |
|Junior, estou come- | xiliar no meu emprego onde faço    | na linguagem e me especializar cada    |
|çando em uma empresa| cações usando essa linguagem.      | vez mais para conseguir subir de cargo |
|onde programamos em |                                    | na minha empresa.                      |
|geral.              |                                    |                                        |
|--------------------|------------------------------------|----------------------------------------|
|Um estudante de mú- | Uma funcionalidade que me permita  | Para aprender e poder praticar novas   |
|sica que deseja     | encontrar aulas de violino em video| técnicas de violino no meu próprio     |
|aprender a tocar    | e exercícios práticos              | ritmo, melhorando minhas habilidades   |
|violino.            |                                    | musicais.                              |  
|--------------------|------------------------------------|----------------------------------------|
|Cantor iniciante que| Um sistema que ofereça vídeos e tu-| Para desenvover minha voz e melhorar   |
|deseja melhorar a   | toriais sobre técnicas vocais e    | minha perfomace em treinos e apresenta-|
|minha técnica vocal.| exercícios de aquecimento.         | ções.                                  |
|--------------------|------------------------------------|----------------------------------------|
|Uma pessoa jovem que| Um curso de inglês que seja de fá- | Para incrementar meu currículo profis- |
|está a procura de   | cil acesso, onde tenho acesso a au-| sional e aumentar minhas chances de ser|
|emprego e começou   | las e exercícios disponibilzados   | contratado por uma empresa.            |
|sua carreira há pou-| gratuitamente.                     |                                        |
|co tempo.           |                                    |                                        |
|--------------------|------------------------------------|----------------------------------------|




## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cada usuário ao entrar no site terá a opção de se cadastrar caso seja o seu primeiro acesso.  | ALTA | 
|RF-002| Após o cadastro o usuário terá a opção de entrar na sua conta já cadastrada.   | ALTA |
|RF-003| O usuário terá a opção de modificar suas informações/personalização no site. | BAIXA |
|RF-004| O usuário poderá se definir no momento do cadastro como aluno ou professor. | ALTA |
|RF-005| O professor poderá fazer o upload de vídeo aulas caso o sistema verifique que ele é apto a isso. | ALTA |
|RF-006| O sistema deve permitir que os usuários pesquisem por conteúdos educacionais utilizando palavras-chave, categorias (ex: música, matemática) ou filtros (ex: nível iniciante, intermediário, avançado). | ALTA |
|RF-007| O sistema deve permitir que os alunos avaliem e deem feedback sobre o conteúdo que consumiram atribuindo uma nota ou comentários para ajudar outros usuários a escolherem materiais. | ALTA |
|RF-008| O sistema deve permitir que os alunos participem de grupos de estudo, onde podem discutir temas específicos e compartilhar experiências de aprendizado com outros alunos e professores. | MÉDIA |
|RF-009| O sistema deve permitir que o aluno mande mensagens privadas ao professor do curso, por meio do chat. | MÉDIA |
|RF-010| O sistema deve ter uma “biblioteca” onde os professores pudessem fazer o upload de arquivos para os alunos consultarem. | ALTA |
|RF-011| O sistema terá um espaço de interação descontraído entre professores e alunos. | BAIXA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deverá estar disponível 7 dias por semana e 24 horas por dia.  | ALTA | 
|RNF-002| O sistema deve ser capaz de suportar usuários simultâneos, garantindo que o tempo de resposta para carregar páginas e acessar conteúdos não ultrapasse 3 segundos, mesmo durante    picos de acesso.   | ALTA | 
|RNF-003| O sistema deve ser compatível com diferentes dispositivos (computadores, tablets e smartphones) e navegadores. | ALTA |
|RNF-004| O sistema deve ser seguro, garantindo a proteção contra acessos não autorizados e outros riscos de segurança. Inclui: Autenticação e Autorização: Mecanismos para verificar a identidade do usuário e controlar o acesso aos dados. | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| Restrições de Recursos da Equipe: Limitações na disponibilidade e habilidades da equipe de desenvolvimento. Tecnologia: Restrições relacionadas às ferramentas e plataformas que podem ser usadas devido a licenças ou compatibilidade. | 
|02| Restrições Orçamentárias - Limite de Custo: Orçamento máximo disponível para o projeto, incluindo desenvolvimento, testes e manutenção. Custos de Recursos: Limitações quanto ao custo dos recursos humanos, ferramentas e tecnologias. |


