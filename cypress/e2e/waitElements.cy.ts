/* eslint-disable no-console */
Cypress.on('uncaught:exception', () => false);
describe('Wait elements', function () {
	beforeEach('Go Platzi', function () {
		cy.visit('https://www.platzi.com/');
	});

	it('Wait for a defined time', function () {
		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.wait(5000);
	});

	it('Wait for a element', function () {
		cy.get('[href="/login/?next=/"]', { timeout: 6000 });
	});

	it('Wait for a element and assertion', function () {
		// Correct
		cy.get('[href="/login/?next=/"]', { timeout: 6000 }).should(
			'be.visible',
		);
		// Wrong
		cy.get('[href="/login/?next=/"]').should('be.visible', {
			timeout: 6000,
		});
	});
});

// eslint-disable-next-line mocha/max-top-level-suites
describe('Disable retry', function () {
	beforeEach('Go Platzi', function () {
		cy.visit('https://galeedgutierrez.com/');
	});

	it.only('Retry', function () {
		cy.get('h2', { timeout: 0 });
	});
});
