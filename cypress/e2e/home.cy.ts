describe('Home - Shelf e navegação até página de produto', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Deve navegar até a página do produto "O Mistério da Casa Verde" após interagir com a shelf', () => {
      const productName = 'O Mistério da Casa Verde';
  
      // Tente até 5 vezes clicar no botão de próximo slide até o item aparecer
      cy.log('🔁 Navegando no carrossel até encontrar o produto');
  
      cy.get('body').then(() => {
        let attempts = 0;
  
        const tryFindProduct = () => {
          cy.contains('a', productName).then($el => {
            if (Cypress.dom.isVisible($el)) {
              cy.wrap($el).click();
            } else if (attempts < 5) {
              attempts++;
              cy.get('.swiper-button-next').click();
              cy.wait(300); // pequena espera para o slide animar
              tryFindProduct();
            } else {
              throw new Error(`Produto "${productName}" não encontrado ou não visível após ${attempts} tentativas.`);
            }
          });
        };
  
        tryFindProduct();
      });
  
      // Após o clique, verifica se estamos na página do produto
      cy.url().should('include', '/o-misterio-da-casa-verde/p');
      cy.contains('h1', productName).should('exist');
    });
});
  