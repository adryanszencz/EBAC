const form = document.getElementById('form');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const a = Number(document.getElementById('campoA').value);
    const b = Number(document.getElementById('campoB').value);

    if (b > a) {
        mensagem.textContent = 'Formulário válido: B é maior que A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido: B precisa ser maior que A.';
        mensagem.style.color = 'red';
    }
});
