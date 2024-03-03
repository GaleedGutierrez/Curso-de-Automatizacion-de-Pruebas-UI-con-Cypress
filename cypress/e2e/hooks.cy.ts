/* eslint-disable mocha/max-top-level-suites */
Cypress.on('uncaught:exception', () => false);

// before(function () {
// 	cy.visit('automation-practice-form');
// });

describe('Assertions', function () {
	beforeEach(function () {
		cy.visit('automation-practice-form');
	});

	// afterEach(function () {
	// 	cy.visit('/');
	// });

	it('Assertion Should', function () {
		cy.url().should('include', 'demoqa.com');
		cy.get('#firstName')
			.should('be.visible')
			// .should('have.attr', 'placeholder', 'First Name');
			.and('have.attr', 'placeholder', 'First Name');
	});
});

describe('Assertions 2', function () {
	it('Assertion Should', function () {
		cy.url().should('include', 'demoqa.com');
		cy.get('#firstName')
			.should('be.visible')
			// .should('have.attr', 'placeholder', 'First Name');
			.and('have.attr', 'placeholder', 'First Name');
	});
});
