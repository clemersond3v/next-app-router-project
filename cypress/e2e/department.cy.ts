describe('Navegação para Departamento', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err) => {
          // Ignora erro de hydration mismatch
          if (err.message.includes('Hydration failed')) {
            return false;
          }
        });
    });

    it('navega para a página de Auto Ajuda', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Auto Ajuda').click();
      cy.url().should('include', '/auto-ajuda');
      cy.contains('h1', 'Auto Ajuda').should('exist'); // Depende do seu título no PLP
    });
});
  