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
	it('Use contains', () => {
		cy.contains('Reading');
		cy.contains('.header-wrapper', 'Widgets');
	});
	it('Use parents', () => {
		cy.get('[placeholder="First Name"]').parent();
		cy.get('[placeholder="First Name"]').parents();
		cy.get('[placeholder="First Name"]').parents().find('label');
		cy.get('form').find('label');
		// This line get an error.
		// cy.find('label');
	});
});
