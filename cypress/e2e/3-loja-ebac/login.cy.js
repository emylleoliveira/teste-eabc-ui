///<reference types="cypress"/>

describe('Funcionalidade:Login',()=>{
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')    
    });

    afterEach(() => {
        cy.screenshot()
    });

it('Deve fazer login com sucesso',()=>{
    cy.get('#username').type('emylle.teste@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, emylle.teste (não é emylle.teste? Sair)')
})

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('emy.teste@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('exist')

});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('emylle.teste@teste.com.br')
    cy.get('#password').type('teste@555')
    cy.get('.woocommerce-form > .button').click()


    cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail emylle.teste@teste.com.br está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')

    
});

})