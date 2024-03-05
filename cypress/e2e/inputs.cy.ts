Cypress.on('uncaught:exception', () => false);
describe('Interacting with the elements', function () {
	beforeEach(function () {
		cy.visit('/automation-practice-form');
	});

	it('Click for position', function () {
		cy.get('#firstName').type('Galeed');
		cy.get('#lastName').type('Gutierrez');

		cy.get('#firstName').type('{selectAll}{backspace}');
		cy.get('#firstName').type('Axel');
		cy.get('#firstName').clear();
	});
});
