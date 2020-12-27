describe('vubnguyen', () => {
  beforeEach(() => cy.visit('/'));

  it('title should be Vubnguyen', (): void => {
    cy.title().should('eq', 'Vubnguyen');
  });
});
