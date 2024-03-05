Cypress.on('uncaught:exception', () => false);
describe('Interacting with the elements', function () {
	beforeEach(function () {
		cy.visit('/buttons');
	});

	it('Click', function () {
		cy.get('button').eq(3).click();
		cy.get('#dynamicClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a dynamic click');
	});

	it('Doble click', function () {
		cy.get('#doubleClickBtn').dblclick();
		cy.get('#doubleClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a double click');
	});

	it('Right click', function () {
		cy.get('#rightClickBtn').rightclick();
		cy.get('#rightClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a right click');
	});

	it('Force click', function () {
		cy.visit('/dynamic-properties');
		cy.get('#enableAfter').click({ timeout: 0, force: true });
		// cy.get('#rightClickMessage')
		// 	.should('be.visible')
		// 	.and('contain', 'You have done a right click');
	});

	it('Click for position', function () {
		cy.get('button').eq(3).parent().parent().click('topRight');
		cy.get('button').eq(3).parent().parent().click('bottomLeft');
		cy.get('button').eq(3).parent().parent().click(5, 66);
	});
});
