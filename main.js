const usuarioGithub = 'adryanszencz';

const elementos = {
    avatar: document.getElementById('avatar'),
    nome: document.getElementById('nome'),
    usuario: document.getElementById('usuario'),
    repositorios: document.getElementById('repositorios'),
    seguidores: document.getElementById('seguidores'),
    seguindo: document.getElementById('seguindo'),
    link: document.getElementById('link'),
    erro: document.getElementById('erro')
};

async function carregarPerfil() {
    try {
        const resposta = await fetch(`https://api.github.com/users/${usuarioGithub}`);

        if (!resposta.ok) {
            throw new Error(`Não foi possível carregar o perfil (erro ${resposta.status}).`);
        }

        const dados = await resposta.json();

        elementos.avatar.src = dados.avatar_url;
        elementos.nome.textContent = dados.name || dados.login;
        elementos.usuario.textContent = `@${dados.login}`;
        elementos.repositorios.textContent = dados.public_repos;
        elementos.seguidores.textContent = dados.followers;
        elementos.seguindo.textContent = dados.following;
        elementos.link.href = dados.html_url;
    } catch (erro) {
        elementos.nome.textContent = 'Perfil indisponível';
        elementos.erro.textContent = erro.message;
        elementos.erro.hidden = false;
    }
}

carregarPerfil();
