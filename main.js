const alunos = [
    { nome: 'Ana', nota: 8.5 },
    { nome: 'Bruno', nota: 5.5 },
    { nome: 'Carla', nota: 6 },
    { nome: 'Diego', nota: 4 },
    { nome: 'Elisa', nota: 9.7 },
    { nome: 'Fábio', nota: 7.2 }
];

// Retorna apenas os alunos com nota maior ou igual a 6
const filtraAprovados = (listaDeAlunos, notaMinima = 6) =>
    listaDeAlunos.filter(({ nota }) => nota >= notaMinima);

const aprovados = filtraAprovados(alunos);

console.log('Alunos aprovados:');
aprovados.forEach(({ nome, nota }) => console.log(`- ${nome}: ${nota}`));
console.log(`Total: ${aprovados.length} de ${alunos.length} alunos.`);
