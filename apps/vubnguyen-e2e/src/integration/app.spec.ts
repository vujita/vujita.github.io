/* eslint-disable @typescript-eslint/no-unsafe-call */
describe('vubnguyen', () => {
  beforeEach(() => cy.visit('/'));

  it('title should be Vubnguyen', (): void => {
    cy.title().should('eq', 'Vubnguyen');
  });
});
