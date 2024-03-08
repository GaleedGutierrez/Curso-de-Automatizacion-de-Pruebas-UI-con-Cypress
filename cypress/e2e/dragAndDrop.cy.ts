Cypress.on('uncaught:exception', () => false);

describe('Interacting with drag and drop', function () {
	beforeEach(function () {
		cy.visit('/dragabble');
	});

	it('Interacting with drag and drop', function () {
		cy.get('#dragBox').trigger('mousedown', {
			which: 1,
			pageX: 0,
			pageY: 0,
		});
		cy.get('#dragBox').trigger('mousemove', {
			which: 1,
			pageX: 200,
			pageY: 100,
		});
		cy.get('#dragBox').trigger('mouseup');
	});
});
