import sqlite3 from "sqlite3";
const bd = new sqlite3.Database("./filmes.db");

const FILMES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "SERIES" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "title" VARCHAR(200),
    "description" varchar (500),
    "genre" varchar (100),
    "ranking" decimal(100),
    "duration" integer(50)
);`;
    
const ADD_FILMES_DATA = `INSERT INTO SERIES (id, title, description, genre, ranking, duration) VALUES 

(1, 'Harry Potter e a pedra filosofal', 'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursley. Em seu aniversário de 11 anos ele recebe uma carta que mudará sua vida: um convite para ingressar em Hogwarts.', 'Fantasia', '7.6', '152'),

(2, 'Harry Potter e a camara secreta', 'Carros voadores, árvores que lutam e um misterioso elfo, com um aviso ainda mais misterioso. Harry Potter está pronto para dar início ao segundo ano de sua maravilhosa jornada no mundo da bruxaria. Em Hogwarts nesse ano, aranhas falam, cartas dão broncas e a habilidade de Harry para falar com cobras voltará contra ele. De clubes de duelo a jogadores de quadribol desonestos, esse será um ano de aventura e perigo para todos. Quando a mensagem sangrenta na parede anuncia que a Câmara Secreta foi aberta, Harry, Rony e Hermione percebem que para salvar Hogwarts será preciso muita mágica e coragem. Confira essa enfeitiçante adaptação do segundo livro da obra da escritora J.K. Rowling e prepare-se para ficar petrificado quando Harry Potter demonstrar que, mais que um bruxo, é um verdadeiro herói.', 'Fantasia', '7.4', '161'),

(3, 'Harry Potter e o prosioneiro de Azkaban', 'Quando a desprezível Tia Guida voa pelo céu na noite, Harry parte para o que será seu terceiro ano em Hogwarts. Um passeio no Nôitibus o leva para o Beco Diagonal onde ele fica sabendo que um prisioneiro foragido, Sirius Black está atrás dele. Em Hogwarts, Harry e seus amigos aprendem a delicada arte de se aproximar de um Hipogrifo, como transformar monstros em risadas e até mesmo a voltar no tempo. Dementadores sugadores de almas pairam sobre Hogwarts, ameaçando Harry, enquanto um seguidor de Aquele-Que-Não-Se-Deve-Nomear espreita pela escola. E Harry será forçado a confrontar todos eles. Dirigido por Alfonso Cuarón e baseado no terceiro livro de J.K. Rowling, essa maravilhosa história traz risadas, suspense e surpresas de tirar o fôlego, a especialidade dos filmes de Harry Potter. Prepare-se!', 'Fantasia', '7.9', '142'),

(4, 'Harry Potter e o calice de fogo', 'Quando o nome de Harry Potter emerge do Cálice de Fogo, ele se transforma em um competidor em uma extenuante batalha de magia entre três escolas de feiticeiros – o Torneio Tribruxo. Mas se Harry não se inscreveu para o tal torneio, quem o fez? Agora, Harry precisa confrontar um mortal dragão, ferozes demônios da água e um labirinto encantado aonde se deparará com Aquele-Que-Não-Deve-Ser-Nomeado. Nesta quarta adaptação da série Harry Potter, criada por J.K. Rowling, tudo está modificado, a começar pelo próprio Harry e seus inseparáveis amigos, Ron e Hermione, que deixam a infância para sempre e partem para desafios maiores do que tudo aquilo que um dia eles já imaginaram.', 'Fantasia', '7.7', '157'),

(5, 'Harry Potter e a ordem da fenix', 'A rebelião começa! Lord Voldemort está de volta, mas o Ministério da Magia está fazendo tudo a seu alcance para impedir que a comunidade mundial de bruxos descubra isso – incluindo indicar a oficial do Ministério, Dolores Umbridge, como a nova professora de Defesa Contra as Artes das Trevas de Hogwarts. Quando Umbridge se recusa a ensinar a prática de mágica defensiva, Rony e Hermione convencem Harry a secretamente treinar um grupo de estudantes para a guerra de magia que está prestes a estourar. Um terrível combate entre o bem e o mal será o incrível ápice desta versão para o quinto filme da série Harry Potter, mais uma vez baseado na obra de J.K. Rowling. Se prepare para a batalha!', 'Fantasia', '7.5', '138'),

(6, 'Harry Potter e o enigma do principe', 'À medida que Lorde Voldemort aperta seu cerco ao mundo dos Trouxas e dos feiticeiros. Hogwarts deixou de ser um paraiso protegido. Harry suspeita que existam perigos até mesmo dentro do castelo, mas Dumbledore está mais preocupado para a batalha final que está próximo de se iniciar. Juntos, eles se esforçam para descobrir a chave que desbloqueia as defesas de Voldemort e, para isso, Dumbledore recruta seu velho amigo horace slughorn, quem, ele acredita, possuí informações valiosas a respeito. Mesmo quando um confronto decisivo se aproxima, há tempo para romance nos corações de Harry, Ron, Hermione e seus colegas de classe. O amor está no ar, mas o perigo também e Hogwarts poderá nunca mais ser a mesma.', 'Fantasia' , '7.6', '153'),

(7, 'Harry Potter e as reliquias da morte - parte 1', 'Harry, Ron e Hermione estão determinados em sua missão de descobrir e acabar com o segredo da imortalidade e do poder de destruição de Voldemort – os Horcruxes. Fugitivos e sozinhos, os três amigos devem apenas contar uns com os outros, agora mas do que nunca... Mas as Forças das Trevas no caminho ameaçam separá-los para sempre.', 'Fantasia' , '7.7', '146'),

(8, 'Harry Potter e as reliquias da morte - parte 2', 'No final épico, a batalha entre as forças do bem e do mal no mundo da bruxaria toma proporções de uma guerra mundial. As apostas nunca foram tão altas e ninguém está a salvo. Mas é harry que pode ser convocado para fazer um derradeiro sacrifício, à medida que ele se aproxima cada vez mais do confronto final com Lorde Voldemort. Tudo termina aqui.', 'Fantasia' , '8.1', '130')

`

function criaTabelaFilmes() {
    bd.run(FILMES_SCHEMA, (error) => {
      if (error) console.log('Erro ao criar tabela', error);
    });
  }
  
  
  function populaTabelaFilmes() {
    bd.run(ADD_FILMES_DATA, (error) => {
      if (error) console.log("Erro ao popular tabela de Series");
    });
  }
  

  bd.serialize(() => {
    criaTabelaFilmes();
    populaTabelaFilmes();
  });