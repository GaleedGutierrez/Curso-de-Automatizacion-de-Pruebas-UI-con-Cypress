/* eslint-disable no-console */
Cypress.on('uncaught:exception', () => false);
describe('Save elements', function () {
	it('Avoid repetition', function () {
		cy.visit('automation-practice-form');
		cy.get('[placeholder="First Name"]')
			.parents('form')
			.then((form) => {
				const INPUTS = form.find('input');
				const DIVS = form.find('div');
				const LABELS = form.find('label');

				expect(INPUTS).to.length(15);
				cy.wrap(INPUTS).should('have.length', 15);
				expect(DIVS).to.length(70);
				expect(LABELS).to.length(16);
				cy.log(`Soy el log de cy: Input length: ${INPUTS.length}`);
				cy.task('log', INPUTS.length);
			});
		cy.pause();
		cy.get('[placeholder="First Name"]').then(console.log);
		cy.get('[placeholder="First Name"]').debug;
	});
});
