Cypress.on('uncaught:exception', () => false);
describe('Assertions', function () {
	it('Assertion Should', function () {
		cy.visit('automation-practice-form');
		cy.url().should('include', 'demoqa.com');
		cy.get('#firstName')
			.should('be.visible')
			// .should('have.attr', 'placeholder', 'First Name');
			.and('have.attr', 'placeholder', 'First Name');
	});

	it('Assertion Expect', function () {
		cy.visit('automation-practice-form');
		cy.get('#firstName').then((element) => {
			expect(element).to.be.visible;
			expect(element).to.have.attr('placeholder', 'First Name');
		});
	});

	it('Assertion Assert', function () {
		cy.visit('automation-practice-form');
		cy.get('#firstName').then((element) => {
			assert.equal(element.attr('placeholder'), 'First Name');
		});
	});
});
