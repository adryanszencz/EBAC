// Classe abstrata: representa qualquer funcionário da empresa
class Funcionario {
    constructor(nome, salarioBase) {
        if (new.target === Funcionario) {
            throw new Error('Funcionario é uma classe abstrata e não pode ser instanciada diretamente.');
        }

        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    // Cada tipo de funcionário calcula o salário do seu jeito
    calcularSalario() {
        throw new Error('O método calcularSalario() precisa ser implementado.');
    }

    apresentar() {
        return `${this.nome} recebe R$ ${this.calcularSalario().toFixed(2)} por mês.`;
    }
}

// Herdeira 1: desenvolvedor ganha um bônus por projeto entregue
class Desenvolvedor extends Funcionario {
    constructor(nome, salarioBase, projetosEntregues) {
        super(nome, salarioBase);
        this.projetosEntregues = projetosEntregues;
    }

    calcularSalario() {
        return this.salarioBase + this.projetosEntregues * 500;
    }
}

// Herdeira 2: gerente ganha um adicional de 30% sobre o salário base
class Gerente extends Funcionario {
    constructor(nome, salarioBase, tamanhoEquipe) {
        super(nome, salarioBase);
        this.tamanhoEquipe = tamanhoEquipe;
    }

    calcularSalario() {
        return this.salarioBase * 1.3;
    }

    apresentar() {
        return `${super.apresentar()} Lidera uma equipe de ${this.tamanhoEquipe} pessoas.`;
    }
}

// Herdeira 3: estagiário recebe uma bolsa fixa
class Estagiario extends Funcionario {
    calcularSalario() {
        return this.salarioBase;
    }
}

// Instâncias
const ana = new Desenvolvedor('Ana', 6000, 3);
const bruno = new Gerente('Bruno', 9000, 8);
const carla = new Estagiario('Carla', 1800);

const equipe = [ana, bruno, carla];

equipe.forEach(function(funcionario) {
    console.log(funcionario.apresentar());
});

// Tentar instanciar a classe abstrata gera erro
try {
    new Funcionario('Teste', 1000);
} catch (erro) {
    console.log('Erro esperado:', erro.message);
}
