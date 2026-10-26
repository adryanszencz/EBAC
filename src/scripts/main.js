// Mostra o nome do produto ao clicar em "Ver detalhes"
const botoesDetalhes = document.querySelectorAll('.product-button');

botoesDetalhes.forEach(function(botao) {
    botao.addEventListener('click', function(evento) {
        evento.preventDefault();

        const produto = botao.closest('.product-item');
        const nomeProduto = produto.querySelector('h4').textContent;

        alert('Você selecionou: ' + nomeProduto);
    });
});
