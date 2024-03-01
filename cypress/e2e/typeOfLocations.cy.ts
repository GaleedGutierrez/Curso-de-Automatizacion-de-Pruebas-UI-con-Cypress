Cypress.on('uncaught:exception', () => false);
describe('Type of locators', () => {
	it('Navigate to our fist page', () => {
		cy.visit('automation-practice-form');
		cy.get('input');
	});
	it('Get by attribute', () => {
		cy.get('[placeholder="First Name"]');
	});
	it('Get by attribute and tag', () => {
		cy.get('input[placeholder="First Name"]');
	});
	it('Get by id', () => {
		cy.get('#firstName');
	});
	it('Get by class', () => {
		cy.get('.mr-sm-2.form-control');
	});
});
