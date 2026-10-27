describe('Agenda de contatos', () => {
  const novoContato = {
    nome: 'Adryan Teste',
    email: 'adryan.teste@email.com',
    telefone: '11999998888'
  }

  beforeEach(() => {
    cy.visit('/')
  })

  it('deve exibir a lista inicial de contatos', () => {
    cy.get('.contato').should('have.length.greaterThan', 0)
  })

  it('deve incluir um novo contato', () => {
    cy.get('.contato').then(($contatos) => {
      const quantidadeAntes = $contatos.length

      cy.get('input[type="text"]').type(novoContato.nome)
      cy.get('input[type="email"]').type(novoContato.email)
      cy.get('input[type="tel"]').type(novoContato.telefone)
      cy.get('.adicionar').click()

      cy.get('.contato').should('have.length', quantidadeAntes + 1)
      cy.get('.contato').last().should('contain', novoContato.nome)
      cy.get('.contato').last().should('contain', novoContato.email)
      cy.get('.contato').last().should('contain', novoContato.telefone)
    })
  })

  it('deve alterar um contato', () => {
    cy.get('.contato').first().find('.edit').click()

    // Ao editar, os dados do contato vão para o formulário
    cy.get('input[type="text"]').clear().type('Nome Alterado')
    cy.get('input[type="email"]').clear().type('alterado@email.com')
    cy.get('input[type="tel"]').clear().type('11911112222')
    cy.get('.alterar').click()

    cy.get('.contato').first().should('contain', 'Nome Alterado')
    cy.get('.contato').first().should('contain', 'alterado@email.com')
    cy.get('.contato').first().should('contain', '11911112222')
  })

  it('deve remover um contato', () => {
    cy.get('.contato').then(($contatos) => {
      const quantidadeAntes = $contatos.length
      const nomeRemovido = $contatos.first().find('li').first().text()

      cy.get('.contato').first().find('.delete').click()

      cy.get('.contato').should('have.length', quantidadeAntes - 1)
      cy.get('.contato').each(($contato) => {
        cy.wrap($contato).should('not.contain', nomeRemovido)
      })
    })
  })
})
