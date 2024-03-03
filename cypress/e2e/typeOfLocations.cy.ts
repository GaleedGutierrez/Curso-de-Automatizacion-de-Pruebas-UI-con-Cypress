Cypress.on('uncaught:exception', () => false);
describe('Type of locators', function () {
	it('Navigate to our fist page', function () {
		cy.visit('automation-practice-form');
		cy.get('input');
	});

	it('Get by attribute', function () {
		cy.get('[placeholder="First Name"]');
	});

	it('Get by attribute and tag', function () {
		cy.get('input[placeholder="First Name"]');
	});

	it('Get by id', function () {
		cy.get('#firstName');
	});

	it('Get by class', function () {
		cy.get('.mr-sm-2.form-control');
	});

	it('Use contains', function () {
		cy.contains('Reading');
		cy.contains('.header-wrapper', 'Widgets');
	});

	it('Use parents', function () {
		cy.get('[placeholder="First Name"]').parent();
		cy.get('[placeholder="First Name"]').parents();
		cy.get('[placeholder="First Name"]').parents().find('label');
		cy.get('form').find('label');
		// This line get an error.
		// cy.find('label');
	});
});
