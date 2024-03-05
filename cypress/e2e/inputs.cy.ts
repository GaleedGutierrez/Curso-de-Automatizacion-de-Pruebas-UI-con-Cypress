Cypress.on('uncaught:exception', () => false);
describe('Interacting with the elements', function () {
	before(function () {
		cy.visit('/automation-practice-form');
	});

	it('Input text', function () {
		cy.get('#firstName').type('Galeed');
		cy.get('#lastName').type('Gutierrez');

		cy.get('#firstName').type('{selectAll}{backspace}');
		cy.get('#firstName').type('Axel');
		cy.get('#firstName').clear();
	});

	it('Input checkbox', function () {
		// Wrong. Force is not best practice.
		// cy.get('#gender-radio-1').click({ force: true });
		// cy.get('#gender-radio-1').check({ force: true });
		// cy.get('#hobbies-checkbox-1').check({ force: true });
		// cy.get('#hobbies-checkbox-1').uncheck({ force: true });
		// Good with click
		cy.get('label[for="gender-radio-1"]').click();
		cy.get('label[for="hobbies-checkbox-1"]').click();
		cy.get('label[for="hobbies-checkbox-1"]').click();
	});
});
