/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuário, login.senha)
        })
       
        
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Emylle', 'Costa', 'emylle.qa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});
