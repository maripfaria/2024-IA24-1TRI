const titulo = document.querySelector(".titulo");
const textoInicial = titulo.textContent;
const texto_livro = document.querySelector(".textoo");
const texto_livro_inicial = texto_livro.textContent;
const mainImage = document.getElementById("mainImage");

function toggleText(buttonClass, textId, novo_texto, nova_imagem) {
    var button = document.querySelector('.' + buttonClass);
    var texto = document.getElementById(textId);
    var buttons = document.querySelectorAll('.Livros input[type="button"]');
    var outroTextoVisivel = document.querySelector('.Livros ol:not(.escondido)');

    button.addEventListener('click', function () {
        // Esconder todos os textos e redefinir os botões
        var textos = document.querySelectorAll('.Livros ol');
        textos.forEach(function(text) {
            text.classList.add('escondido');
        });
        // Redefinir o título e o texto
        titulo.textContent = textoInicial;
        texto_livro.textContent = texto_livro_inicial;

        // Se outro texto está visível ou o texto atual já está visível, não fazer nada
        if (outroTextoVisivel && outroTextoVisivel.id !== textId || !texto.classList.contains('escondido')) {
            return;
        }

        // Mostrar o texto clicado
        texto.classList.remove('escondido');
        titulo.textContent = button.value; // Atualiza o título com o valor do botão

        // Atualiza o texto do elemento .textoo
        texto_livro.innerText = novo_texto;

        // Atualiza a imagem
        mainImage.src = nova_imagem;
    });
}

toggleText('TDV', 'textoTDV', 'A saga Trono de Vidro é uma história gira em torno de Celaena Sardothien, uma assassina que tem 17 anos e é a melhor do seu reino, que é convocada pelo príncipe para competir em uma competição mortal para se tornar a assassina do rei. Com uma trama envolvente e cheia de reviravoltas, a saga acompanha a jornada de Celaena em um mundo de magia, política e perigos. Ao longo dos livros, a personagem principal se envolve em diversas batalhas, alianças e traições, enquanto descobre mais sobre seu passado e seu papel no destino do reino de Adarlan. Composta por oito livros, a saga Trono de Vidro conquistou fãs ao redor do mundo e se tornou um sucesso de vendas. Com elementos de fantasia, romance e ação, a série cativa os leitores com sua trama emocionante e personagens cativantes. Se você é fã de histórias de fantasia épica, com certeza vai se encantar com a saga Trono de Vidro.', 'Figuras/livrostdv.jpg');
toggleText('ACOTAR', 'textoACOTAR', 'A Saga ACOTAR, que significa "A Court of Thorns and Roses". A história se passa em um mundo mágico e segue a protagonista Feyre Archeron, uma jovem caçadora que acaba se envolvendo em um mundo de magia e perigos ao ser levada para a corte de um poderoso feérico chamado Tamlin. Ao longo da saga, Feyre se vê envolvida em uma teia de intrigas políticas e ameaças ancestrais, enquanto luta para proteger aqueles que ama e descobrir seu verdadeiro papel neste mundo de seres mágicos. A trama envolve romance, ação, magia e reviravoltas surpreendentes, tornando a série muito cativante para os fãs de fantasia. A Saga ACOTAR é composta por três livros principais: "A Court of Thorns and Roses", "A Court of Mist and Fury" e "A Court of Wings and Ruin", além de contos extras que expandem o universo criado pela autora. A série conquistou um grande número de fãs ao redor do mundo e se tornou um sucesso editorial, sendo elogiada pela construção de personagens complexos, pelo romance envolvente e pela trama cheia de reviravoltas.', 'Figuras/livrosacotar.jpg');
toggleText('ACDLC', 'textoACDLC', 'A Saga A Cidade da Lua Crescente é uma série de livros de fantasia que se passam em uma cidade moderna e segue Bryce Quinlan, uma jovem metade-fae e metade-humana que busca vingança pela morte de seus amigos. Com elementos de mistério, ação e romance, a série explora temas de amizade, amor e auto-descoberta. A série é composta por três livros principais: "Casa de Terra e Sangue", "Casa de Céu e Respiração" e "Casa de Chama e Sombra".', 'Figuras/livrosacdlc.jpg');
toggleText('Extras', 'textoExtras', 'Sarah J. Maas é uma autora americana conhecida por suas séries de livros de fantasia. Ela nasceu em 5 de março de 1986 em Nova York. Seu primeiro livro, "Trono de Vidro", foi publicado em 2012 e rapidamente se tornou um best-seller. Desde então, ela lançou várias outras séries de sucesso, incluindo "A Court of Thorns and Roses" e "A Cidade da Lua Crescente". Seus livros são conhecidos por suas tramas complexas, personagens bem desenvolvidos e mundos ricamente detalhados.', 'Figuras/autora.jpg');