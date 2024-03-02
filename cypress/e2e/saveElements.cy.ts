Cypress.on('uncaught:exception', () => false);
describe('Save elements', () => {
	it('Repeat', () => {
		cy.visit('automation-practice-form');
		cy.get('[placeholder="First Name"]').parent();
		cy.get('[placeholder="First Name"]').parents();
		cy.get('[placeholder="First Name"]').parents().find('label');
		cy.get('form').find('label');
	});

	it('Avoid repetition', () => {
		cy.visit('automation-practice-form');
		cy.get('[placeholder="First Name"]')
			.parents('form')
			.then((form) => {
				const INPUT = form.find('input');
				const DIVS = form.find('div');
				const LABELS = form.find('label');

				expect(INPUT).to.length(15);
				cy.wrap(INPUT).should('have.length', 15);
				expect(DIVS).to.length(70);
				expect(LABELS).to.length(16);
			});
	});
});
