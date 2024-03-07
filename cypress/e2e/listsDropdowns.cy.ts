Cypress.on('uncaught:exception', () => false);

describe('Interacting with dropdowns (select tag) and lists', function () {
	it('Select', function () {
		cy.visit('https://www.globalsqa.com/demo-site/select-dropdown-menu/');
		cy.get('select').select(10);
		cy.get('select').should('have.value', 'ARG');
		cy.get('select').select('ARG');
		cy.get('select').should('have.value', 'ARG');
		cy.get('select').select(31);
		cy.get('select').should('have.value', 'BRA');
	});

	it('Dynamic select', function () {
		cy.visit('https://react-select.com/home');
		cy.get('#react-select-4-input').click();
		cy.get('#react-select-4-listbox');
		cy.get('#react-select-4-listbox')
			.children()
			.each((element) => {
				if (element.text() === 'Orange') {
					cy.wrap(element).click();
					// cy.wrap(element).type('Orange');
				}
			});
		// Lo ideal es buscar el elementos concreto.
		cy.get('#react-select-4-input').click();
		cy.get('#react-select-4-option-5').click();
	});
});
