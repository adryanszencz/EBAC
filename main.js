$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>').text(nomeTarefa);

        $('#lista-tarefas').append(novaTarefa);
        $('#nome-tarefa').val('').focus();
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});
